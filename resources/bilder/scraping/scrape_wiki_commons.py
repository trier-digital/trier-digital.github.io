"""
Skript zum gezielten Suchen auf Wikimedia Commons nach Zeitpunkt/-raum eines Bildes
"""
from time import sleep

import requests
import re
import json
import dateutil.parser as parser
from requests.adapters import HTTPAdapter
from tqdm import tqdm
from urllib3 import Retry
from xml.etree import ElementTree as ET

api_url = "https://commons.wikimedia.org/w/api.php"

# Hyperparameter
query = "trier"
limit = 100
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

    results = []

    print("Searching Wikimedia Commons...")

    while True:
        # Make the API request
        response = requests.get(api_url, params=params)
        data = response.json()

        # Append results
        results.extend(data['query']['search'])

        # Check for continuation
        if "continue" in data:
            params.update(data["continue"])  # Update params with continuation token
        else:
            break  # No more results

        # Stop after reaching the max_results limit
        if len(results) >= limit:
            results = results[:limit]
            break

    titles = [result["title"] for result in results]

    return titles


def search_meta(titles: list) -> dict:
    """
    Sucht alle Metadaten zu einem Bild
    :param titles: Liste mit Titeln der Bilder
    :return: Dictionary mit allen Metadaten
    """

    print("Searching metadata...")

    titles = [titles[i:i + 50] for i in range(0, len(titles), 50)]

    data = {}
    for title_chunk in tqdm(titles, "Title Chunks (size 50)"):
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


def search_meta_v2(titles: list) -> dict:
    session = requests.Session()
    retries = Retry(
        total=5,  # Retry up to 5 times on failures
        backoff_factor=1,  # Wait 1s, 2s, 4s, etc. between retries
        status_forcelist=[429, 500, 502, 503, 504],  # Retry on these HTTP status codes
    )
    session.mount("https://", HTTPAdapter(max_retries=retries))
    print("Searching metadata...")

    # Split titles into chunks of 50
    titles = [titles[i:i + 50] for i in range(0, len(titles), 50)]

    data = {}
    for title_chunk in tqdm(titles, "Title Chunks (size 50)"):
        # Prepare API parameters
        params = {
            "action": "query",
            "titles": "|".join(title_chunk),
            "prop": "imageinfo",
            "iiprop": "url|size|mime|metadata|extmetadata",
            "format": "json",
        }

        # Make the API call
        try:
            response = session.get(api_url, params=params, timeout=10)
            response.raise_for_status()  # Raise exception for HTTP errors
            chunk_data = response.json()
            data.update(chunk_data.get("query", {}).get("pages", {}))
        except requests.exceptions.RequestException as e:
            print(f"Error during request: {e}")
            sleep(5)  # Wait before retrying

        # Optional: Delay to avoid hitting API rate limits
        sleep(0.1)

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

    print("Getting dates...")

    for key in tqdm(keys):
        try:
            date = meta[key]["imageinfo"][0]["extmetadata"]["DateTimeOriginal"]["value"]
            date = re.sub(r"<.+>", "", date)
            date = re.sub(r"Taken on|before|Taken in|after", "", date)
            try:
                date = parser.parse(date)
            except ValueError:
                date = "NSD" + date
        except KeyError:
            del meta[key]
            continue
        license = meta[key]["imageinfo"][0]["extmetadata"]["LicenseShortName"]["value"]
        url = meta[key]["imageinfo"][0]["url"]
        title = meta[key]["title"]
        data[key] = {"url": url, "title": title, "date": date, "license": license}

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

    print("Filtering dates...")

    for key in tqdm(keys):
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


def make_html(data: dict) -> None:
    keys = list(data.keys())
    html = ET.Element("html", {"lang": "de"})
    root = ET.ElementTree(html)
    head = ET.SubElement(html, "head")
    title = ET.SubElement(head, "title")
    style = ET.SubElement(head, "style")
    style.text = "img {width: 500px;}"
    ET.SubElement(head, "meta", {"charset": "utf-8"})
    title.text = "Wikimedia Results"
    body = ET.SubElement(html, "body")
    for key in tqdm(keys):
        if key == "unsure":
            sub_keys = list(data[key].keys())
            for sub_key in sub_keys:
                section = ET.SubElement(body, "section")
                name = ET.SubElement(section, "h3")
                name.text = data[key][sub_key]["title"]
                ET.SubElement(section, "img", {"src": data[key][sub_key]["url"]})
                date = ET.SubElement(section, "p")
                date.text = "Date:", data[key][sub_key]["date"]
                license = ET.SubElement(section, "p")
                license.text = "License:", data[key][sub_key]["license"]
            continue
        section = ET.SubElement(body, "section")
        name = ET.SubElement(section, "h3")
        name.text = data[key]["title"]
        ET.SubElement(section, "img", {"src": data[key]["url"], "alt": "bild"})
        date = ET.SubElement(section, "p")
        date.text = f"Date: {data[key]['date']}"
        license = ET.SubElement(section, "p")
        license.text = f"License: {data[key]['license']}"
        ET.SubElement(section, "br")

    ET.indent(root, space="\t", level=0)
    with open("results.html", "wb") as f:
        f.write(bytes("<!DOCTYPE html>\n", "utf-8"))
        root.write(f, encoding="utf-8")


def main() -> None:
    titles = search_titles()
    meta = search_meta_v2(titles)
    data = get_dates(meta)
    filtered_data = filter_dates(data)
    make_html(filtered_data)
    with open('trier_dates.json', 'w', encoding="utf-8") as outfile:
        json.dump(filtered_data, outfile, indent="\t", ensure_ascii=False)


main()
