"""
Skript zum gezielten Suchen auf Wikimedia Commons nach Zeitpunkt/-raum eines Bildes
"""
import requests
import re
import json
import dateutil.parser as parser

api_url = "https://commons.wikimedia.org/w/api.php"

# Hyperparameter
query = "trier"
limit = 700
min_year = 1890
max_year = 1930


# Methods
def search_titles() -> list:
    """
    Sucht Bildtitel zu einer Suchanfrage. Die Anzahl der Buchtitel wird durch den Hyperparameter 'limit'
    angegeben und die Suchanfrage durch den Hyperparameter 'query'
    :return: Liste aller gefundener Titel zur Suchanfrage
    """
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": query,
        "srlimit": limit,
        "srnamespace": 6,  # File namespace for images
    }

    response = requests.get(api_url, params=params)
    data = response.json()

    titles = [result["title"] for result in data['query']['search']]

    return titles


def search_meta(titles: list) -> dict:
    """
    Sucht alle Metadaten zu einem Bild
    :param titles: Liste mit Titeln der Bilder
    :return: Dictionary mit allen Metadaten
    """
    titles = [titles[i:i + 50] for i in range(0, len(titles), 50)]

    data = {}
    for title_chunk in titles:
        params = {
            "action": "query",
            "titles": "|".join(title_chunk),  # Replace with your file name
            "prop": "imageinfo",
            "iiprop": "url|size|mime|metadata|extmetadata",
            "format": "json",
        }

        # Make the API call
        response = requests.get(api_url, params=params)
        chunk_data = response.json()
        data.update(chunk_data["query"]["pages"])

    return data


def get_dates(meta: dict) -> dict:
    """
    Extrahiert relevante Informationen aus den kompletten Metadaten:
        -URL
        -Titel
        -Datum
    :param meta: Dictionary mit allen Metadaten
    :return: Dictionary mit ausgewählten Metadaten
    """
    keys = list(meta.keys())
    data = {}
    try:
        for key in keys:
            date = meta[key]["imageinfo"][0]["extmetadata"]["DateTimeOriginal"]["value"]
            date = re.sub(r"<.+>", "", date)
            date = re.sub(r"Taken on|before|Taken in|after", "", date)
            try:
                date = parser.parse(date)
            except ValueError:
                date = "NSD" + date
            url = meta[key]["imageinfo"][0]["url"]
            title = meta[key]["title"]
            data[key] = {"url": url, "title": title, "date": date}
    except KeyError:
        pass

    return data


def filter_dates(data: dict) -> dict:
    """
    Filtert alle Ergebnisse, die in einen bestimmten Zeitraum fallen. Der Zeitraum wird durch die
    Hyperparameter 'min_year' und 'max_year' angegeben.
    :param data: Ausgewählte Metadaten zu jedem Ergebnis der Suchanfrage
    :return: Dictionary mit allen Ergebnissen im Suchzeitraum mit den gewählten Metadaten
    """
    keys = list(data.keys())
    data["unsure"] = {}
    for key in keys:
        date = data[key]["date"]
        if type(date) is str:
            data["unsure"].update({key: data[key]})
            del data[key]
            continue
        if not min_year < date.year < max_year:
            del data[key]
        else:
            data[key]["date"] = str(date)
    return data


def main() -> None:
    titles = search_titles()
    meta = search_meta(titles)
    data = get_dates(meta)
    filtered_data = filter_dates(data)
    with open('trier_dates.json', 'w', encoding="utf-8") as outfile:
        json.dump(filtered_data, outfile, indent="\t", ensure_ascii=False)


main()
