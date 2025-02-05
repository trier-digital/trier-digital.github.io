<template>
  <!-- Page Title -->
  <div class="page-title dark-background">
  <div class="container position-relative">
    <h1>Bilddetails</h1>
  </div>
  </div><!-- End Page Title -->

  <!-- Portfolio Details Section -->
  <section id="portfolio-details" class="portfolio-details section">
  <div class="container">
    <div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper init-swiper">
          <div class="swiper-wrapper align-items-center">
            <img :src="image.src" class="img-fluid" :alt="image.ort" />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>{{ image.ort }}</h3>
          <ul>
            <li><strong>Datierung</strong>: {{ image.date }}</li>
            <li><strong>Lizenz</strong>: {{ image.licence }} <a :href="image.licenselink"><img :src="image.licensebadge"></a></li>
            <li><strong>Urheber</strong>: {{ image.urheber }}</li>
            <li><strong>URL</strong>: <a :href="image.url">URL</a></li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>Beschreibung</h2>
          <p>
            {{ image.desc }}
            </p>
        </div>
      </div>
    </div>

  </div>

</section><!-- /Portfolio Details Section -->

</template>

<script>

export default {
    props: ['id'],  // Hier empfangen wir die ID der Bilddetails
    name: 'BildDetailsView',
    data() {
      return {
        images: [
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Amphitheater_Charles_Bernhoeft.jpg",
            date: "circa 1890",
            ort: "Amphitheater, Trier",
            desc: "Amphitheater, Trier",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Charles Bernhoeft  (1859–1933)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Amphitheater_Charles_Bernhoeft.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Kornmarkt_mit_St.Georgsbrunnen_und_Rathaus_Charles_Bernhoeft.jpg",
            date: "circa 1890",
            ort: "Kornmarkt, Trier",
            desc: "Trier, Kornmarkt mit St. Georgsbrunnen und Rathaus. Links die damalige Feuerwache",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Charles Bernhoeft (1859–1933)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Kornmarkt_mit_St.Georgsbrunnen_und_Rathaus_Charles_Bernhoeft.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Dom_und_Liebfrauenkirche_Charles_Bernhoeft.jpg",
            date: "circa 1890",
            ort: "Dom und Liebfrauenkriche, Trier",
            desc: "Dom und Liebfrauenkirche, Trier",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Charles Bernhoeft (1859–1933)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Dom_und_Liebfrauenkirche_Charles_Bernhoeft.jpg",
            cat1: "Vor 1900",
            cat2: "Dom"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Hauptpost_Charles_Bernhoeft.jpg",
            date: "circa 1890",
            ort: "Trier, Kornmarkt",
            desc: "Trier, Blick vom Kornmarkt zur Oberpostdirektion. Ganz rechts das sogenannte Kaufhaus (im 2. Weltkrieg zerstört), links das Friseurgeschäft Joseph Mohr",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Charles Bernhoeft  (1859–1933)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Hauptpost_Charles_Bernhoeft.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Thermen_bei_Sankt_Barbara_Charles_Bernhoeft.jpg",
            date: "circa 1890 ",
            ort: "Trier, Barbarathermen",
            desc: "Trier, Thermen bei Sankt Barbara",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Charles Bernhoeft (1859–1933)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Thermen_bei_Sankt_Barbara_Charles_Bernhoeft.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier_Römerbrücke_Kaisermanöver_1893.jpg",
            date: "1893",
            ort: "Römerbrücke, Trier",
            desc: "Kaisermanöver 1893: Parade der Köln-Deutzer Kürassiere auf der Trierer Römerbrücke.",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "unbekannt",
            url: "https://commons.wikimedia.org/wiki/File:Trier_R%C3%B6merbr%C3%BCcke_Kaiserman%C3%B6ver_1893.jpg",
            cat1: "Vor 1900",
            cat2: "Römerbrücke"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Simeonstraße_ungelPostkarte1.jpg",
            date: "zwischen 1896 und 1904",
            ort: "Simeonstraße, Trier",
            desc: "Trier, Simeonstraße, Aufnahme zwischen 1896 und 1904. Nicht gelaufene Postkarte. Ganz links sind die Gebäude Hauptmarkt 23 und Simeonstraße 37 zu sehen, deren Fachwerk später freigelegt wurde. Zwischen den Gebäuden befindet sich die Judenpforte, die hier von einer Kutsche halb verdeckt wird.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "unbekannt / Repro: Schaar & Dathe, Trier / Digitalisierung: P170 (eigenes Werk)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Simeonstra%C3%9Fe_ungelPostkarte1.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Trier_Viehmarktbrunnen.jpg",
            date: "before 1898",
            ort: "Trier, Viehmarkt",
            desc: "Brunnen auf dem Viehmarktplatz in Trier, erbaut 1829, abgerissen 1898..",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Aufnahme um 1829 von Prof. Wilhelm Deuser, Sammlung Stadtarchiv Trier",
            url: "https://commons.wikimedia.org/wiki/File:Trier_Viehmarktbrunnen.jpg",
            cat1: "Vor 1900"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Trier_Hauptmarkt.jpg",
            date: "1899",
            ort: "Hauptmarkt",
            desc: "Hauptmarkt mit St. Gangolfkirche. Der Hauptmarkt in Trier im Jahr 1899, aufgenommen von Ferdinand Emmerich Laven. Scan einer Postkarte (1906 erstmals herausgegeben, 1914 gelaufen)",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Ferdinand Emmerich Laven (*1849;+1922)",
            url: "https://commons.wikimedia.org/wiki/File:Trier_Hauptmarkt.jpg",
            cat1: "Vor 1900",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Trier_Palastkas.jpg",
            date: "1907 oder früher",
            ort: "Kurfürstliches Palais und Konstantinsbasilika",
            desc: "Kurfürstliches Palais und Konstantinsbasilika um 1907",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Kulturdatenbank Region Trier",
            url: "https://commons.wikimedia.org/wiki/File:Palastkaserne_Trier_1907.jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Straßenbahn-Trier-Henney-5.jpg",
            date: "zwischen 1905 und 1913",
            ort: "Simeonstraße, Trier",
            desc: "Die Simeonstraße in Trier mit Straßenbahnwagen im Hintergrund. Rechts das Gebäude Simeonstraße 42/43 mit Eisenhandlung Carl Schulte und Juwelier G. C. Schwarzmann.",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "unbekannt",
            url: "https://commons.wikimedia.org/wiki/File:Stra%C3%9Fenbahn-Trier-Henney-5.jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Straßenbahn-Trier-Henney-4.jpg",
            date: "zwischen 1905 und 1913 ",
            ort: "Porta-Nigra-Platz/Simeonstraße, Trier",
            desc: "Straßenbahnwagen in Trier Höhe Porta-Nigra-Platz/Simeonstraße. Rechts die Porta Nigra.",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "unbekannt",
            url: "https://commons.wikimedia.org/wiki/File:Stra%C3%9Fenbahn-Trier-Henney-4.jpg",
            cat1: "1900-1920",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Trier,_Hauptmarkt_ungelPostkarte1.jpg",
            date: "between 1905 and 1916",
            ort: "Trier, Hauptmarkt",
            desc: "Der Hauptmarkt in Trier. Die Aufnahme muss zwischen 1905 und 1916 entstanden sein. Die Postkarte, von der sie stammt, ist nicht gelaufen.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "unbekannt / eigene Digitalisierung",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Hauptmarkt_ungelPostkarte1.jpg",
            cat1: "1900-1920",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Gebäude_Hauptmarkt_23_und_Simeonstraße_37_vor_1910.jpg",
            date: "vor 1910",
            ort: "Trier, Hauptmarkt/Simeonstraße",
            desc: "Trier, Gebäude Hauptmarkt 23 und Simeonstraße 37",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Wilhelm Deuser  (1861–1953)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Geb%C3%A4ude_Hauptmarkt_23_und_Simeonstra%C3%9Fe_37_vor_1910.jpg",
            cat1: "1900-1920",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Trier_Dom_und_Liebfrauenkirche_639B_(NBY_420952).jpg",
            date: "1910",
            ort: "Trier, Dom",
            desc: "Dom und Liebfrauenkirche in Trier.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Charles E. Flower (1871–1951). Publisher: Raphael Tuck & Sons",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Dom_und_Liebfrauenkirche._639B_(NBY_420952).jpg",
            cat1: "1900-1920",
            cat2: "Dom"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Strassenbahn-Wagenhalle-Trier-1.jpg",
            date: "zwischen 1910 und 1913",
            ort: "Werner-Siemens-Straße, Trier",
            desc: " Die Wagenhalle der Straßenbahn Trier auf dem Gelände des Elektrizitätswerks Trier (Werner-Siemens-Straße). Das Gebäude wurde im Zweiten Weltkrieg zerstört. Henney: Die Elektrizitäts-Werke der Stadt Trier: Bau- und Entwicklungs-Geschichte 1902 bis 1913",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "unbekannt",
            url: "https://commons.wikimedia.org/wiki/File:Strassenbahn-Wagenhalle-Trier-1.jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/1_npg-7-trier-rotes-haus-121828-831632.jpg",
            date: "1910-1915",
            ort: "Trier, Hauptmarkt",
            desc: "Rotes Haus in Trier, ein historisches Gebäude und Wahrzeichen der Stadt.",
            licence: "CC BY-NC-SA",
            licensebadge: "assets/img/copyright/by-nc-sa.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            urheber: "Stadtmuseum Simeonstift Trier",
            url: "https://rlp.museum-digital.de/object/121828",
            cat1: "1900-1920",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier-Kaiser-Wilhelm-Brücke-Postkarte.jpg",
            date: "zwischen 1913 und 1930",
            ort: "Trier, Kaiser-Wilhelm-Brücke",
            desc: "Trier, Kaiser-Wilhelm-Brücke mit Pallien im Hintergrund",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: " ",
            url: "https://commons.wikimedia.org/wiki/File:Trier-Kaiser-Wilhelm-Br%C3%BCcke-Postkarte.jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Reserve-Lazarett.jpg",
            date: "1914-1916",
            ort: "Auguste-Viktoria-Gymnasium",
            desc: "Lazarett, in dem das heutige Gymnasium ist",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "unbekannt / Verlag Schaar & Dathe / eigene Reproduktion bzw. Digitalisierung (2022)",
            url: "https://commons.wikimedia.org/wiki/File:Reserve-Lazarett.jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Trier,_Rheinland-Pfalz_-_Dom_und_Liebfrauenkirche_(Zeno_Ansichtskarten).jpg",
            date: "before 29 September 1916",
            ort: "Trier. Dom und Liebfrauenkirche.",
            desc: "",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Carl Lander, Berlin",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Rheinland-Pfalz_-_Dom_und_Liebfrauenkirche_(Zeno_Ansichtskarten).jpg",
            cat1: "1900-1920",
            cat2: "Dom"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/U.S._troops_on_Porta-Nigra-Platz_in_Trier,_Germany,_on_2_December_1918_(20807210).jpg",
            date: "2 December 1918",
            ort: "Porta-Nigra-Platz in Trier, Germany",
            desc: "U.S. troops on Porta-Nigra-Platz in Trier, Germany, on 2 December 1918.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. War Department photo 165-WW-60A-29",
            url: "https://commons.wikimedia.org/wiki/File:U.S._troops_on_Porta-Nigra-Platz_in_Trier,_Germany,_on_2_December_1918_(20807210).jpg",
            cat1: "1900-1920",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/U.S._Army_artillery_in_the_Simeonstaße_in_Trier,_Germany,_on_2_December_1918_(20807270).jpg",
            date: "2. Dezember 1918",
            ort: "Simeonstraße/Porta Nigra, Trier",
            desc: "U.S. Army artillery in the Simeonstaße, next to the Porta Nigra, in Trier, Germany, on 2 December 1918.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. War Department photo 165-WW-60A-59",
            url: "https://commons.wikimedia.org/wiki/File:U.S._Army_artillery_in_the_Simeonsta%C3%9Fe_in_Trier,_Germany,_on_2_December_1918_(20807270).jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/US_soldiers_attach_a_poster_at_restuarant_in_Trier,_April_1919..jpg",
            date: "16. April 1919",
            ort: "Simeonstraße 1, Trier",
            desc: "U.S. American Expeditionary Force soldiers attach a Victory Loan poster to the pillars of the restaurant \"Zum Christophel\" near the Roman Porta Nigra, Trier, Rhenish Prussia, Germany, 16 April 1919. U.S. troops occupied the the city between 1 December 1918 and 11 August 1919. Deutsch: Soldaten der American Expeditionary Force befestigen ein Plakat für US-amerikanische Kriegsanleihen (\"Siegesanleihen\") auf einem Pfeiler des Restaurants \"Zum Christophel\", Simeonstraße 1, in Trier am 16 April 1919.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. Military",
            url: "https://commons.wikimedia.org/wiki/File:US_soldiers_attach_a_poster_at_restuarant_in_Trier,_April_1919..jpg",
            cat1: "1900-1920"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Group_of_U.S._Army_soldiers_in_Simeonstraße,_Trier,_Germany,_circa_in_May_1919_(20807174).jpg",
            date: "circa 4 May 1919",
            ort: "Simeonstraße/Porta Nigra, Trier",
            desc: "A group of U.S. Army soldiers in the Simeonstraße, Trier, Germany, looking north toward the Porta Nigra, circa in May 1919.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. Army Signal Corps photo 165-WW-60A-11",
            url: "https://commons.wikimedia.org/wiki/File:Group_of_U.S._Army_soldiers_in_Simeonstra%C3%9Fe,_Trier,_Germany,_circa_in_May_1919_(20807174).jpg",
            cat1: "1900-1920",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Trier;_Bahnhofstraße.jpg",
            date: "circa 1920",
            ort: "Trier, Bahnhofstraße",
            desc: "Historische Aufnahme der Bahnhofstraße in Trier. Der Standort ist heute die Theodor-Heuss-Allee, die Bahnhofstraße beginnt erst mit dem vierten Haus auf der linken Seite. Im Hintergrund der Hauptbahnhof.",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "M.H.",
            url: "https://commons.wikimedia.org/wiki/File:Trier;_Bahnhofstra%C3%9Fe.jpg",
            cat1: "1920-1940"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Trier,_Hauptmarkt_19270520.jpg",
            date: "20 May 1927",
            ort: "Trier, Hauptmarkt",
            desc: "Trier, Hauptmarkt (Nr. 5, 6, 7 und Petrusbrunnen) sowie Gebäude Grabenstraße Nr. 1, 2, 3. Die zu sehenden Gebäude in der Grabenstraße (ab einschließlich dem dritten Haus von links in der Häuserzeile) wurden nach fast vollständiger Zerstörung im Zweiten Weltkrieg (nur noch die Fassaden standen) nicht wieder aufgebaut. Auch das Gebäude Hauptmarkt 7 (ganz rechts im Bild) wurde nach Kriegszerstörung verändert wieder aufgebaut.",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Franz Idzior (1883–1947)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Hauptmarkt_19270520.jpg",
            cat1: "1920-1940",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Trier_Blick_von_der_Mariensäule_nach_Trier-Süd_192908.jpg",
            date: "1929",
            ort: "Trier, Mariensäule",
            desc: "Blick von der Mariensäule nach Trier-Süd. Die lange Häuserzeile am Ufer ist der einige Jahre später abgerissene alte Vorort St. Barbara.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Adolf Welter: Franz Idzior - Der (un-)bekannte Trierer Fotograf, Trier 2008",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Blick_von_der_Mariens%C3%A4ule_nach_Trier-S%C3%BCd_192908.jpg",
            cat1: "1920-1940"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Alt-Pallien,_Trier_(Germany),_July_1930_(247-05302).jpg",
            date: "Juli 1930",
            ort: "Trier, Alt-Pallien",
            desc: "Blick von der Kaiser-Wilhelm-Brücke entlang der Mosel bei Alt-Pallien, Trier, im Juli 1930. In der Mitte des Fotos ist der im März 1945 zerstörte Haltepunkt Pallien an der Trierer Weststrecke.",
            licence: "CC BY-SA 4.0",
            licensebadge: "assets/img/copyright/by-sa.svg",
            urheber: "Leo Wehrli",
            url: "https://commons.wikimedia.org/wiki/File:Alt-Pallien,_Trier_(Germany),_July_1930_(247-05302).jpg",
            cat1: "1920-1940"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Verbreiterung_der_Römerbrücke_193109.jpg",
            date: "September 1931",
            ort: "Trier, Römerbrücke",
            desc: "Trier, Verbreiterung der Römerbrücke",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Franz Idzior (1883–1947)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Verbreiterung_der_R%C3%B6merbr%C3%BCcke_193109.jpg",
            cat1: "1920-1940",
            cat2: "Römerbrücke"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Möbius-Walter-Hauptmarkt-1934.jpeg",
            date: "1934",
            ort: "Trier, Hauptmarkt",
            desc: "Trier, Hauptmarkt mit St. Gangolfskirche u. \"Steipe\" (rechts), Aufn. Möbius 1934",
            licence: "CC BY-SA 4.0",
            licensebadge: "assets/img/copyright/by-sa.svg",
            licenselink: "https://creativecommons.org/licenses/by-sa/4.0/",
            urheber: "SLUB / Deutsche Fotothek / Möbius, Walter",
            url: "https://commons.wikimedia.org/wiki/File:M%C3%B6bius-Walter-Hauptmarkt-1934.jpeg",
            cat1: "1920-1940",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Möbius-Walter-Trier-Stadtansicht-1934.jpeg",
            date: "1934",
            ort: "Simeonstraße, Trier",
            desc: "Trier, Blick von der St. Gangolfskirche in die Simeonstraße das Moseltal abwärts, Mittelgrund: Porta Nigra, rechts: St. Paulinuskirche, Aufn. Möbius 1934 ",
            licence: "CC BY-SA 4.0",
            licensebadge: "assets/img/copyright/by-sa.svg",
            licenselink: "https://creativecommons.org/licenses/by-sa/4.0/",
            urheber: "SLUB / Deutsche Fotothek / Möbius, Walter ",
            url: "https://commons.wikimedia.org/wiki/File:M%C3%B6bius-Walter-Trier-Stadtansicht-1934.jpeg",
            cat1: "1920-1940"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Möbius_Walter_Steipe_(Steupe)_1934.jpg",
            date: "1934",
            ort: "Trier, Hauptmarkt",
            desc: "Trier, Hauptmarkt u. \"Steipe\" (Bau von 1450), Aufn. Möbius 1934",
            licence: "CC BY-SA 4.0",
            licensebadge: "assets/img/copyright/by-sa.svg",
            licenselink: "https://creativecommons.org/licenses/by-sa/4.0/",
            urheber: "SLUB / Deutsche Fotothek / Möbius, Walter",
            url: "https://commons.wikimedia.org/wiki/File:M%C3%B6bius_Walter_Steipe_(Steupe)_1934.jpg",
            cat1: "1920-1940",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Blick_auf_die_Benediktinerstraße_1930er.png",
            date: "1930er",
            ort: "Benediktinerstraße, Trier",
            desc: "Trier, Blick auf die Benediktinerstraße in den 1930er Jahren. Im Hintergrund das Moselstadion und das Exzellenzhaus.",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Freilichtmuseum Roscheider Hof / Thomas Naethe",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Blick_auf_die_Benediktinerstra%C3%9Fe_1930er.png",
            cat1: "1920-1940"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/PortaNigraFotothek.jpg",
            date: "1942",
            ort: "Porta Nigra, Trier",
            desc: "Teilansicht der Feldseite mit Turm",
            licence: "Public Domain Mark",
            licensebadge: "assets/img/copyright/pd.svg",
            licenselink: "https://creativecommons.org/public-domain/pdm/",
            urheber: "Franz Grasser",
            url: "https://www.deutsche-digitale-bibliothek.de/item/3K5M2NP4CWB3SWYJ3NYB5TN5DXFMFI35?isThumbnailFiltered=true&query=Trier&viewType=list&facetValues%5B%5D=type_fct%3Dmediatype_002&facetValues%5B%5D=license_group%3Drights_001&facetValues%5B%5D=topic_fct%3DArchitektur&facetValues%5B%5D=objecttype_fct%3DFotografie&facetValues%5B%5D=objecttype_fct%3DFoto&facetValues%5B%5D=type_fct%3Dmediatype_002&facetValues%5B%5D=license%3Dhttp%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fmark%2F1.0%2F&rows=20&offset=0&hitNumber=04",
            cat1: "1940-1960",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/SC_201589-S_-_Infantrymen_of_10th_Armored_Division_dash_along_main_street_in_newly-captured_town_of_Trier,_Germany._2_March,_1945.jpg",
            date: "2. März 1945",
            ort: "Simeonstraße, Trier",
            desc: "Photographer: T/5 Ornitz, 166th Signal Photo Co.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "Signal Corps Archive from United States",
            url: "https://commons.wikimedia.org/wiki/File:SC_201589-S_-_Infantrymen_of_10th_Armored_Division_dash_along_main_street_in_newly-captured_town_of_Trier,_Germany._2_March,_1945._(53008235369).jpg",
            cat1: "1940-1960"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/View_of_the_heavily_damaged_Trier_Hauptbahnhof_17_March_1945.jpg",
            date: "17. März 1945",
            ort: "Trier, Hauptbahnhof",
            desc: "Ansicht des stark beschädigten Trierer Hauptbahnhofs.",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. Army, U.S. Army 732nd Railway Operations Battalion photo",
            url: "https://commons.wikimedia.org/wiki/File:View_of_the_heavily_damaged_Trier_Hauptbahnhof,_17_March_1945_(314836945).jpg",
            cat1: "1940-1960",
            cat2: "Hauptbahnhof"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Railcars_at_Trier_Hauptbahnhof,_in_1945_(314837028).jpg",
            date: "1945",
            ort: "Trier, Hauptbahnhof",
            desc: "Züge am Bahngleis des Trierer Hauptbahnhofs 1945",
            licence: "Public Domain US",
            licenselink: "https://commons.wikimedia.org/wiki/Template:PD-US",
            licensebadge: "assets/img/copyright/pd.svg",
            urheber: "U.S. Army 732nd Railway Operations Battalion",
            url: "https://commons.wikimedia.org/wiki/File:Railcars_at_Trier_Hauptbahnhof,_in_1945_(314837028).jpg",
            cat1: "1940-1960",
            cat2: "Hauptbahnhof"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/3.jpg",
            date: "1950-1953",
            ort: "Trier, Hauptbahnhof",
            desc: "Hauptbahnhof kurz nach Ende des Wiederaufbaus (1950-1953) von der Bushaltestelle",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "Stadtarchiv Trier, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/zeitreise-historische-fotos-aus-der-region-trier_bid-93648817#43",
            cat1: "1940-1960",
            cat2: "Hauptbahnhof"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/10.jpg",
            date: "ca. 1953",
            ort: "Trier, Kaisertherme",
            desc: "Trier, Kaisertherme Luftansicht. Das Foto entstand 1953 oder später. Der abgebildete Mercedes-Ponton wurde zwischen 1953 und 1961 gebaut.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "Sammlung Kurt Kullmann, Volksfreund",
            url: "https://www.volksfreund.de/region/trier-trierer-land/kaiserthermen-1950er-jahre-bild-schaab-tankstelle_aid-64474567",
            cat1: "1940-1960"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Hauptmarkt_mit_Petrusbrunnen_1950er_(Willy_Pragher)_(2).jpg",
            date: "zwischen 1955 und 1958",
            ort: "Hauptmarkt, Trier",
            desc: "Trier, Hauptmarkt mit Petrusbrunnen zwischen 1955 und 1958. Das Datum ist vom Landesarchiv Baden-Württemberg mit 9. August 1975 angegeben, das Foto muss aber im vorgenannten Zeitraum entstanden sein, wahrscheinlich im Rahmen der Fotoreihen 2. Oktober 1956 (vermutlich, aufgrund des Wetters, vgl. File:Trier, Fachwerkhäuser Hauptmarkt 22u23 und Simeonstraße 37 19561002.jpg) oder 8. September 1958.",
            licence: "CC BY 3.0 DE",
            licensebadge: "assets/img/copyright/by.svg",
            licenselink: "https://creativecommons.org/licenses/by/3.0/de/",
            urheber: "Willy Pragher  (1908–1992)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_Hauptmarkt_mit_Petrusbrunnen_1950er_(Willy_Pragher)_(2).jpg",
            cat1: "1940-1960",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Römerbrücke_19580908.jpg",
            date: "8. September 1958",
            ort: "Trier, Römerbrücke",
            desc: "Trier, Römerbrücke (Südseite, vom St.-Barbara-Ufer)",
            licence: "CC BY 3.0 DE",
            licensebadge: "assets/img/copyright/by.svg",
            licenselink: "https://creativecommons.org/licenses/by/3.0/de/",
            urheber: "Willy Pragher (1908–1992)",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_R%C3%B6merbr%C3%BCcke_19580908.jpg",
            cat1: "1940-1960",
            cat2: "Römerbrücke"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Trier,_Römerbrücke_1958.jpg",
            date: "1958 ",
            ort: "Trier, Römerbrücke",
            desc: "A 35mm Kodachrome slide taken by Bobbie O Britton of Illinois, USA, (1925-2015).",
            licence: "CC BY 2.0",
            licensebadge: "assets/img/copyright/by.svg",
            licenselink: "https://creativecommons.org/licenses/by/2.0/",
            urheber: "gbfernie5",
            url: "https://commons.wikimedia.org/wiki/File:Trier,_R%C3%B6merbr%C3%BCcke_1958.jpg",
            cat1: "1940-1960",
            cat2: "Römerbrücke"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/2.jpg",
            date: "1959",
            ort: "Trier, Basilika",
            desc: "Trier, Johann-Philipp-Straße. Die Basilika im Hintergrund ist noch ohne Dach zu sehen",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV/ Josef Tietzen, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#39",
            cat1: "1940-1960"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/1.jpg",
            date: "1963",
            ort: "Trier, Domplatz",
            desc: "Trier, Domplatz/ Domfreihof mit Parkplatz und Menschengruppe",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "Archiv, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#40",
            cat1: "1960-1980",
            cat2: "Dom"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/7.jpg",
            date: "1969",
            ort: "Trier, Hauptmarkt",
            desc: "Trier, Hauptmarkt mit Gaststätte Goldener Stern und Zum Ochsen. Rechts zu sehen sind Bauarbeiten am Roten Haus.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV/ Josef Tietzen, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#0",
            cat1: "1960-1980",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/9.jpg",
            date: "1960er Jahre",
            ort: "Trier, Palastgarten",
            desc: "Trier, Palastgarten im Schnee und Familie mit Schlitten.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV/Hilde Ewerz, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/zeitreise-historische-fotos-aus-der-region-trier_bid-93648817#25",
            cat1: "1960-1980"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder 2/Hochwasser_an_der_Mosel_im_Februar_1970_19700223_(HB10856).jpg",
            date: "23 February 1970",
            ort: "Mariensäule, Trier",
            desc: "Blick von der Mariensäule flussaufwärts auf die Mosel in Trier bei Hochwasser. Die Brücke im Bild ist die Römerbrücke. Rechts davon Trier-West/Pallien mit Bahnanlagen des Personen- und Güterbahnhofs Trier West.",
            licence: "CC BY 4.0",
            licensebadge: "assets/img/copyright/by.svg",
            licenselink: "https://creativecommons.org/licenses/by/4.0/",
            urheber: "unbekannt / Bundesanstalt für Wasserbau Karlsruhe",
            url: "https://commons.wikimedia.org/wiki/File:Hochwasser_an_der_Mosel_im_Februar_1970_19700223_(HB10856).jpg",
            cat1: "1960-1980"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Römerbrücke_Trier_1970_(MK170).jpg",
            date: "1970",
            ort: "Trier, Römerbrücke",
            desc: "Römerbrücke Trier ",
            licence: "CC BY 4.0",
            licensebadge: "assets/img/copyright/by.svg",
            licenselink: "https://creativecommons.org/licenses/by/4.0/",
            urheber: "unbekannt / Bundesanstalt für Wasserbau Karlsruhe",
            url: "https://commons.wikimedia.org/wiki/File:R%C3%B6merbr%C3%BCcke_Trier_1970_(MK170).jpg",
            cat1: "1960-1980",
            cat2: "Römerbrücke"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/Barbarathermen_Trier_1970.jpg",
            date: "1970",
            ort: "Trier, Barabarathermen",
            desc: "Barbarathermen 1970 ",
            licence: "CC BY-SA 4.0",
            licensebadge: "assets/img/copyright/by-sa.svg",
            licenselink: "https://creativecommons.org/licenses/by-sa/4.0/",
            urheber: "Mabit1",
            url: "https://commons.wikimedia.org/wiki/File:Barbarathermen_Trier_1970.jpg",
            cat1: "1960-1980"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/PortaNigraDDB.jpg",
            date: "um 1970",
            ort: "Porta Nigra, Trier",
            desc: "Die Porta Nigra ist ein um 170 n. Chr. errichtetes römisches Stadttor und heute das Wahrzeichen der Stadt Trier",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Alwin Tölle",
            url: "https://www.deutsche-digitale-bibliothek.de/item/L3VCMXWH54WYZ7MPQSL2B2MYOZVTYEOB?isThumbnailFiltered=true&query=trier&viewType=list&facetValues%5B%5D=license_group%3Drights_001&facetValues%5B%5D=type_fct%3Dmediatype_002&facetValues%5B%5D=objecttype_fct%3DFotografie&rows=20&offset=200&hitNumber=2002",
            cat1: "1960-1980",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/6.jpg",
            date: "ca. 1970",
            ort: "Trier, Pferdemarkt",
            desc: "Pferdemarkt mit Busverkehr und Autos.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV-Archiv, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#9",
            cat1: "1960-1980"
          },
          {
            src: "assets/img/trier/Projektseminar Bilder/BA 2004-04303_Scan01.jpg",
            date: "1970er Jahre",
            ort: "Porta Nigra, Trier",
            desc: "Das Foto zeigt die Porta Nigra in Trier.Die Porta Nigra (der Name bedeutet Schwarzes Tor) ist ein um 170 n. Chr. errichtetes römisches Stadttor und Wahrzeichen der Stadt Trier.",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Alwin Tölle",
            url: "https://katalog.landesmuseum.de/object/3E6C4209A7394DCA96C4D7C9F3842082-porta-nigra-in-trier",
            cat1: "1960-1980",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/Tufa_Bilder/TUFA0042.jpg",
            date: "vor 1983",
            ort: "Trier, Tuchfabrik",
            desc: "Alte Fassade des Tuchfabrik Gebäudes mit parkenden Autos.",
            licence: "Nicht freigegeben, urheberrechtlich geschützt",
            urheber: "Claus-Peter Beckhäuser, Tuchfabrik (Kulturzentrum)",
            url: "unbekannt",
            cat1: "1980-heute",
            cat2: "Tuchfabrik"
          },
          {
            src: "assets/img/trier/Tufa_Bilder/TUFA0111.jpg",
            date: "1983-1993",
            ort: "Trier, Tuchfabrik ",
            desc: "Innenraum der alten Fabrik, wo heute das Atelier ist.",
            licence: "Nicht freigegeben, urheberrechtlich geschützt",
            urheber: "Claus-Peter Beckhäuser, Tuchfabrik (Kulturzentrum)",
            url: "unbekannt",
            cat1: "1980-heute",
            cat2: "Tuchfabrik"
          },
          {
            src: "assets/img/trier/Tufa_Bilder/TUFA0292 - Kopie.jpg",
            date: "1983-1993",
            ort: "Trier, Tuchfabrik ",
            desc: "Tuchfabrik während den Bauarbeiten.",
            licence: "Nicht freigegeben, urheberrechtlich geschützt",
            urheber: "Claus-Peter Beckhäuser, Tuchfabrik (Kulturzentrum)",
            url: "Unbekannt",
            cat1: "1980-heute",
            cat2: "Tuchfabrik"
          },
          {
            src: "assets/img/trier/Wikimedia Bilder/Porta Nigra Platz_Stadtmuseum.png",
            date: "2023",
            ort: "Trier, Porta Nigra Platz",
            desc: "Porta Nigra Platz in Trier, ein historisch bedeutender Ort in der Nähe des berühmten römischen Stadttors.",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Freilichtmuseum Roscheider Hof",
            url: "https://rlp.museum-digital.de/object/78304?navlang=de",
            cat1: "1980-heute",
            cat2: "Porta Nigra"
          },
          {
            src: "assets/img/trier/heute_Fotos_Rebecca/P1010287.JPG",
            date: "05.12.2024",
            ort: "Trier, Hauptbahnhof",
            desc: "Hauptbahnhof von vorne",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Rebecca Robinson",
            url: "Nicht angegeben",
            cat1: "1980-heute",
            cat2: "Hauptbahnhof"
          },
          {
            src: "assets/img/trier/heute_Fotos_Rebecca/P1010303.JPG",
            date: "05.12.2024",
            ort: "Trier, Hauptmarkt/Simeonstraße",
            desc: "Hauptmarkt/Simeonstraße",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Rebecca Robinson",
            url: "Nicht angegeben",
            cat1: "1980-heute",
            cat2: "Hauptmarkt"
          },
          {
            src: "assets/img/trier/heute_Fotos_Rebecca/P1010305.JPG",
            date: "05.12.2024",
            ort: "Trier, Palastkaserne und Basilika",
            desc: "Palastkaserne und Basilika",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Rebecca Robinson",
            url: "Nicht angegeben",
            cat1: "1980-heute",
            cat2: "Basilika"
          },
          {
            src: "assets/img/trier/heute_Fotos_Rebecca/P1010292.JPG",
            date: "05.12.2024",
            ort: "Trier, Dom",
            desc: "Dom von der Seite",
            licence: "CC0 1.0 Universal",
            licensebadge: "assets/img/copyright/cc-zero.svg",
            licenselink: "https://creativecommons.org/publicdomain/zero/1.0/",
            urheber: "Rebecca Robinson",
            url: "Nicht angegeben",
            cat1: "1980-heute",
            cat2: "Dom"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/4.jpg",
            date: "unbekannt",
            ort: "Trier, Petrisberg",
            desc: "Trier, Petrisberg Luftaufnahme. Ehemalige Kaserne, später Quartier Belvédère, vor der Umgestaltung",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "EGB/Albrecht Haag, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/20-jahre-neuer-petrisberg-damals-und-heute-im-vergleich_bid-99239733#0"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/5.jpg",
            date: "unbekannt",
            ort: "Trier, Hotel Reichshof",
            desc: "Trier, Hotel Reichshof gegenüber Hauptbahnhof. Heute steht das Heitkamp-Haus dort, wo damals das Hotel Reichshof von 1897-1956 stand.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV/Archiv, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#26"
          },
          {
            src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/8.jpg",
            date: "unbekannt",
            ort: "Trier, Kaiserthermen",
            desc: "Trier, Kaisertherme mit Skiläufern, die Langlaufen.",
            licence: "CC BY-NC-ND",
            licensebadge: "assets/img/copyright/by-nc-nd.eu.svg",
            licenselink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            urheber: "TV/Friedemann Vetter, Volksfreund",
            url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/fotos-winter-anno-dazumal-in-der-region-trier_bid-105431639#10"
          }
      ],
      };
    },
    computed: {
      image() {
        // Verwende die ID, um das entsprechende Bild zu finden
        return this.images[this.id];
      },
    },
  };
</script>
