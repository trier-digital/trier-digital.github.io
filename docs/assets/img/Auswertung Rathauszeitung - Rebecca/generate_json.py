import os
import json

# Funktion, um den Ordner nach SVG-Dateien zu durchsuchen
def generate_json_from_svgs(folder_path):
    # Liste für die resultierenden Objekte
    data = []

    # Durch alle Dateien im Ordner iterieren
    for filename in os.listdir(folder_path):
        if filename.endswith(".svg"):
            # Dateiname ohne Erweiterung
            name = os.path.splitext(filename)[0]
            
            # Annahme: Der Dateiname hat das Format 'partei_ort'
            parts = name.split("_")
            if len(parts) == 2:
                party, location = parts
                file_path = os.path.join(folder_path, filename)
                
                # Objekt für die Datei erstellen
                data.append({
                    'cat1': party,
                    'cat2': location,
                    'src': file_path
                })

    # JSON-Daten generieren
    json_data = json.dumps(data, indent=4)
    return json_data

# Beispielaufruf
folder_path = 'C:/_dev/trier-digital.github.io/resources/webseite/public/assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator'  # Ersetze dies mit dem tatsächlichen Pfad
json_result = generate_json_from_svgs(folder_path)

# Ausgabe des JSON
print(json_result)

# Optional: Speichern des JSON in einer Datei
with open('output.json', 'w') as f:
    f.write(json_result)
