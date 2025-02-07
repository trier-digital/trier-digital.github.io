const questions = [
    {
        id: 1,
        title: "Historisches Bildmaterial",
        info: "<h5>Dokumentation der Gruppe \"Historisches Bildmaterial</h5>" +
            "<p>Das historische Bildmaterial dient dazu, die städtebaulichen und gesellschaftlichen Veränderungen in Trier im 20. Jahrhundert sichtbar zu machen. Bei der Auswahl der Bilder wurde besonderer Wert daraufgelegt, markante Gebäude und zentrale Orte von Trier (Placesoints of Interest, POIs) zu identifizieren, die den Wandel der Stadt exemplarisch veranschaulichen und einen besonderen Eindruck hinterließenassen. Ziel dieser digitalen Ausstellung ist es, die Bilder soweit wie möglich unter den Prinzipien von Open Access verfügbar zu machen, unter Berücksichtigung der rechtlichen Rahmenbedingungen. Darüber hinaus sind viele Bilder in der Karte wiederzufinden. \n" +
            "Vorgehen und Methoden</p>" +
            "<p>Für die Sammlung des Materials wurden verschiedene Quellen herangezogen, darunter insbesondere frei zugängliche Online-Sammlungen wie Wikimedia Commons. Um die Recherche nach spezifischen Zeiträumen zu erleichtern, wurde ein eigens entwickeltes Python-Skript eingesetzt. Neben Online-Recherchen wurden auch direkte Kontakte zu Institutionen genutzt. Besonders hilfreich erwiesen sich die Zusammenarbeit mit dem Volksfreund, dem Kulturzentrum TUFA und dem Landesarchiv Baden-Württemberg, die uns bereitwillig und effizient unterstützten.</p>" +
            "<p>Die gesammelten Bilder wurden sorgfältig geprüft, um ihre Qualität, Relevanz und Nachnutzbarkeit zu gewährleisten. Einige Bilder wurden mit Wasserzeichen versehen, um die Rechte direkt nachvollziehbar zu machen. Detaillierte Informationen, einschließlich Angaben zu den Creative-Commons-Lizenzen (CC) sind in den Metadaten dokumentiert. Für die Erstellung von Vorher-Nachher-Bildern kam das frei verfügbare Open-Source-Tool JuxtaposeJS. zum Einsatz. Die „Nachher-Bilder“ wurden von uns selbst aufgenommen. Die finale Bildauswahl umfasst überwiegend Fotografien sowie einige digitale Postkarten.</p>" +
            "<p>Während der Arbeit traten verschiedene Herausforderungen auf, insbesondere im Bereich der rechtlichen Klärung der Nachnutzungsrechte. Dabei ging es vor allem um:<p>" +
            "<ul class='punkt'>" +
            "<li><strong>Urheberrechtsfragen bei historischen Bildern:</strong> Nach deutschem Urheberrecht (§ 2 Abs. 2 UrhG) kann ein Urheber nur eine natürliche Person sein. Daher wird die US Army, die bei manchen Bildern als Urheber angegeben ist, in Deutschland nicht als solche anerkannt.</li>" +
            "<li><strong>Fristen für die Schutzdauer:</strong> Gemäß § 64 UrhG erlischt das Urheberrecht 70 Jahre nach dem Tod des Urhebers. Ist der Urheber unbekannt, gilt laut § 66 UrhG eine Frist von 70 Jahren ab der Veröffentlichung. Diese Regelung wurde für unbekannte Urheber der Bilder angewandt.</li>" +
            "<li>§ 64 UrhG: <a href='https://www.gesetze-im-internet.de/urhg/__64.html' target='_blank' class='link-info'>Allgemeines zur Schutzdauer</a></li>" +
            "<li>§ 66 UrhG: <a href='https://www.gesetze-im-internet.de/urhg/__66.html' target='_blank' class='link-info'>Anonyme und pseudonyme Werke</a></li>" +
            "<li>§ 2 UrhG: <a href='https://www.gesetze-im-internet.de/urhg/__2.html' target='_blank' class='link-info'>Definition geschützter Werke</a></li>" +
            "</ul>" +
            "<p>Eine weitere Schwierigkeit bestand in der Zugänglichkeit des Materials. Während einige Archive ihre Bestände digital bereitgestellt haben, waren bei anderen Institutionen spezielle Anfragen erforderlich, was zu Verzögerungen führte. Darüber hinaus wiesen die zur Verfügung gestellten Bildquellen teils unterschiedliche Metadatenformate und Bildauflösungen auf, was eine einheitliche Verarbeitung erschwerte.</p>" +
            "<h5>Lösungsansätze und Ergebnisse</h5>" +
            "<p>Diese Herausforderungen wurden durch intensive Kommunikation mit den Institutionen sowie die Fokussierung auf kostenfreie, digital verfügbare Materialien erfolgreich bewältigt. Die erstellte Sammlung wurde sowohl somit auch mit der digitalen Karte verknüpft und verfügbar gemacht. als auch mit der Diskursanalyse verknüpft. Ziel war es schlussendlich, möglichst viele Bilder frei zugänglich zu machen. Dieses Ziel konnte größtenteils erreicht werden. Für die Nachnutzung der Bilder wird jedoch empfohlen, die jeweiligen Lizenzen und Hinweise in den Metadaten zu berücksichtigen.</p>",
    },
    {
        id: 2,
        title: "Element with Subelements",
        info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        sub: [{
            id: 6,
            title: "Subelement One",
            info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        }, {
            id: 7,
            title: "Subelement Two",
            info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",

        }]
    },
    {
        id: 3,
        title: "What is BankID?",
        info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
        id: 4,
        title: "Whose birth number can I use?",
        info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
        id: 5,
        title: "When do I recieve a password ordered by letter?",
        info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
    },
];

export default questions;
