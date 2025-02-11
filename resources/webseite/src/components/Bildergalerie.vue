<template>
  <!--div id="app">
    <div class="menu"-->
    
  <section id="portfolio" class="portfolio section">
    <div class="container">
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters">
        <li @click="filter('all', selectedCat2)" :class="{ selected: selectedCat1 === 'all' }">
        Alle
      </li>
      <li
        v-for="(category, index) in categories1"
        :key="index"
        @click="filter(category, selectedCat2)"
        :class="{ selected: selectedCat1 === category }"
      >
        {{ category }}
      </li>
      </ul>
      </div>



    <!--Zweiter Filter-->
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters">
        <li @click="filter(selectedCat1, 'all')" :class="{ selected: selectedCat2 === 'all' }">
        Alle
      </li>
      <li
        v-for="(category, index) in categories2"
        :key="index"
        @click="filter(selectedCat1, category)"
        :class="{ selected: selectedCat2 === category }"
      >
        {{ category }}
      </li>
      </ul>
      </div>




    
    <div class="container">
    <div ref="masonryGrid" class="row gy-4 isotope-container"> <!--Sorgt für die Reihen-->
    <div
      v-for="(preview, index) in filteredPreviews"
      :key="index"
      :class="['col-lg-4 col-md-6 portfolio-item isotope-item', preview.cat1]"
    >
    <div class="portfolio-content h-100">
      <img :src="preview.src" class="img-fluid" :alt="'Image in category ' + preview.cat1" />
      <div class="portfolio-info">
            <h4>{{ preview.date }}</h4>
            <a :href="preview.src" :title="preview.ort" :data-title="`${preview.ort} <br> <b>Lizenz:</b> ${preview.licence} <br> <b>Urheber:</b> ${preview.urheber}`" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
              <i class="bi bi-zoom-in"></i>
            </a>
            <router-link :to="`/bildergalerie/${getOriginalIndex(index)}`" title="Mehr Details" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </router-link>
        </div>
        <div class="caption">{{ preview.ort }}</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

//Für Galerie-Funktionalitäten
import GLightbox from 'glightbox'; // Importiere GLightbox
import 'glightbox/dist/css/glightbox.css'; // Importiere das CSS für GLightbox

import Masonry from "masonry-layout"; //Importiere Masonry-Layout für Bilder
import imagesLoaded from "imagesloaded";


export default defineComponent({
  name: "Bildergalerie",
  data() {
    return {
      categories1: ["Vor 1900", "1900-1920", "1920-1940", "1940-1960", "1960-1980", "1980-heute"],
      categories2: ["Porta Nigra", "Hauptmarkt", "Dom", "Hauptbahnhof", "Tuchfabrik", "Römerbrücke", "Basilika"],
      previews: [
    {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Amphitheater_Charles_Bernhoeft.jpg",
      date: "circa 1890",
      ort: "Amphitheater, Trier",
      desc: "Amphitheater, Trier",
      licence: "public domain",
      urheber: "Charles Bernhoeft  (1859–1933)",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Amphitheater_Charles_Bernhoeft.jpg",
      cat1: "Vor 1900"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Kornmarkt_mit_St.Georgsbrunnen_und_Rathaus_Charles_Bernhoeft.jpg",
      date: "circa 1890",
      ort: "Kornmarkt, Trier",
      desc: "Trier, Kornmarkt mit St. Georgsbrunnen und Rathaus. Links die damalige Feuerwache",
      licence: "public domain",
      urheber: "Charles Bernhoeft (1859–1933)",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Kornmarkt_mit_St.Georgsbrunnen_und_Rathaus_Charles_Bernhoeft.jpg",
      cat1: "Vor 1900"
    },
      {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Dom_und_Liebfrauenkirche_Charles_Bernhoeft.jpg",
      date: "circa 1890",
      ort: "Dom und Liebfrauenkriche, Trier",
      desc: "Dom und Liebfrauenkirche, Trier",
      licence: "public domain",
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
      licence: "public domain",
      urheber: "Charles Bernhoeft  (1859–1933)",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Hauptpost_Charles_Bernhoeft.jpg",
      cat1: "Vor 1900"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Thermen_bei_Sankt_Barbara_Charles_Bernhoeft.jpg",
      date: "circa 1890 ",
      ort: "Trier, Barbarathermen",
      desc: "Trier, Thermen bei Sankt Barbara",
      licence: "public domain",
      urheber: "Charles Bernhoeft (1859–1933)",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Thermen_bei_Sankt_Barbara_Charles_Bernhoeft.jpg",
      cat1: "Vor 1900"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Trier_Römerbrücke_Kaisermanöver_1893.jpg",
      date: "1893",
      ort: "Römerbrücke, Trier",
      desc: "Kaisermanöver 1893: Parade der Köln-Deutzer Kürassiere auf der Trierer Römerbrücke.",
      licence: "public domain",
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
      licence: "public domain in the United States",
      urheber: "unbekannt / Repro: Schaar & Dathe, Trier / Digitalisierung: P170 (eigenes Werk)",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Simeonstra%C3%9Fe_ungelPostkarte1.jpg",
      cat1: "Vor 1900"
    },
      {
    src: "assets/img/trier/Wikimedia Bilder/Trier_Viehmarktbrunnen.jpg",
    date: "before 1898",
    ort: "Trier, Viehmarkt",
    desc: "Brunnen auf dem Viehmarktplatz in Trier, erbaut 1829, abgerissen 1898..",
    licence: "Public Domain, PD-US",
    urheber: "Aufnahme um 1829 von Prof. Wilhelm Deuser, Sammlung Stadtarchiv Trier",
    url: "https://commons.wikimedia.org/wiki/File:Trier_Viehmarktbrunnen.jpg",
    cat1: "Vor 1900"
  },
    {
    src: "assets/img/trier/Wikimedia Bilder/Trier_Hauptmarkt.jpg",
    date: "1899",
    ort: "Hauptmarkt",
    desc: "Hauptmarkt mit St. Gangolfkirche. Der Hauptmarkt in Trier im Jahr 1899, aufgenommen von Ferdinand Emmerich Laven. Scan einer Postkarte (1906 erstmals herausgegeben, 1914 gelaufen)",
    licence: "Public Domain, PD-US",
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
    licence: "Public Domain, PD-US",
    urheber: "Kulturdatenbank Region Trier",
    url: "https://commons.wikimedia.org/wiki/File:Palastkaserne_Trier_1907.jpg",
    cat1: "1900-1920",
    cat2: "Basilika"
    },
  {
      src: "assets/img/trier/Wikimedia Bilder/Straßenbahn-Trier-Henney-5.jpg",
      date: "zwischen 1905 und 1913",
      ort: "Simeonstraße, Trier",
      desc: "Die Simeonstraße in Trier mit Straßenbahnwagen im Hintergrund. Rechts das Gebäude Simeonstraße 42/43 mit Eisenhandlung Carl Schulte und Juwelier G. C. Schwarzmann.",
      licence: "public domain",
      urheber: "unbekannt",
      url: "https://commons.wikimedia.org/wiki/File:Stra%C3%9Fenbahn-Trier-Henney-5.jpg",
      cat1: "1900-1920"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Straßenbahn-Trier-Henney-4.jpg",
      date: "zwischen 1905 und 1913 ",
      ort: "Porta-Nigra-Platz/Simeonstraße, Trier",
      desc: "Straßenbahnwagen in Trier Höhe Porta-Nigra-Platz/Simeonstraße. Rechts die Porta Nigra.",
      licence: "public domain ",
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
      licence: "public domain in the United States",
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
      licence: "public domain",
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
    licence: "Public Domain, PD-US",
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
      licence: "public domain",
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
      licence: "Creative Commons CC0 1.0 Universal Public Domain Dedication.",
      urheber: " ",
      url: "https://commons.wikimedia.org/wiki/File:Trier-Kaiser-Wilhelm-Br%C3%BCcke-Postkarte.jpg",
      cat1: "1900-1920"
    },
    {
    src: "assets/img/trier/Wikimedia Bilder/Reserve-Lazarett.jpg",
    date: "1914-1916",
    ort: "Auguste-Viktoria-Gymnasium",
    desc: "Lazarett, in dem das heutige Gymnasium ist",
    licence: "Public Domain, PD-US",
    urheber: "unbekannt / Verlag Schaar & Dathe / eigene Reproduktion bzw. Digitalisierung (2022)",
    url: "https://commons.wikimedia.org/wiki/File:Reserve-Lazarett.jpg",
    cat1: "1900-1920"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder 2/Trier,_Rheinland-Pfalz_-_Dom_und_Liebfrauenkirche_(Zeno_Ansichtskarten).jpg",
      date: "before 29 September 1916",
      ort: "Trier. Dom und Liebfrauenkirche.",
      desc: "Beschreibung",
      licence: "Gemeinfrei/public domain",
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
      licence: "This image is a work of a U.S. military or Department of Defense employee, taken or made as part of that person's official duties. As a work of the U.S. federal government, the image is in the public domain in the United States",
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
      licence: "public domain in the United States",
      urheber: "U.S. War Department photo 165-WW-60A-59",
      url: "https://commons.wikimedia.org/wiki/File:U.S._Army_artillery_in_the_Simeonsta%C3%9Fe_in_Trier,_Germany,_on_2_December_1918_(20807270).jpg",
      cat1: "1900-1920"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/US_soldiers_attach_a_poster_at_restuarant_in_Trier,_April_1919..jpg",
      date: "16. April 1919",
      ort: "Simeonstraße 1, Trier",
      desc: "U.S. American Expeditionary Force soldiers attach a Victory Loan poster to the pillars of the restaurant \"Zum Christophel\" near the Roman Porta Nigra, Trier, Rhenish Prussia, Germany, 16 April 1919. U.S. troops occupied the the city between 1 December 1918 and 11 August 1919. Deutsch: Soldaten der American Expeditionary Force befestigen ein Plakat für US-amerikanische Kriegsanleihen (\"Siegesanleihen\") auf einem Pfeiler des Restaurants \"Zum Christophel\", Simeonstraße 1, in Trier am 16 April 1919.",
      licence: "public domain in the United States",
      urheber: "U.S. Military",
      url: "https://commons.wikimedia.org/wiki/File:US_soldiers_attach_a_poster_at_restuarant_in_Trier,_April_1919..jpg",
      cat1: "1900-1920"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Group_of_U.S._Army_soldiers_in_Simeonstraße,_Trier,_Germany,_circa_in_May_1919_(20807174).jpg",
      date: "circa 4 May 1919",
      ort: "Simeonstraße/Porta Nigra, Trier",
      desc: "A group of U.S. Army soldiers in the Simeonstraße, Trier, Germany, looking north toward the Porta Nigra, circa in May 1919.",
      licence: "public domain in the United States ",
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
      licence: "public domain",
      urheber: "M.H.",
      url: "https://commons.wikimedia.org/wiki/File:Trier;_Bahnhofstra%C3%9Fe.jpg",
      cat1: "1920-1940"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder 2/Trier,_Hauptmarkt_19270520.jpg",
      date: "20 May 1927",
      ort: "Trier, Hauptmarkt",
      desc: "Trier, Hauptmarkt (Nr. 5, 6, 7 und Petrusbrunnen) sowie Gebäude Grabenstraße Nr. 1, 2, 3. Die zu sehenden Gebäude in der Grabenstraße (ab einschließlich dem dritten Haus von links in der Häuserzeile) wurden nach fast vollständiger Zerstörung im Zweiten Weltkrieg (nur noch die Fassaden standen) nicht wieder aufgebaut. Auch das Gebäude Hauptmarkt 7 (ganz rechts im Bild) wurde nach Kriegszerstörung verändert wieder aufgebaut.",
      licence: "public domain",
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
    licence: "Public Domain, PD-US",
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
    urheber: "Leo Wehrli",
    url: "https://commons.wikimedia.org/wiki/File:Alt-Pallien,_Trier_(Germany),_July_1930_(247-05302).jpg",
    cat1: "1920-1940"
  },
  {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Verbreiterung_der_Römerbrücke_193109.jpg",
      date: "September 1931",
      ort: "Trier, Römerbrücke",
      desc: "Trier, Verbreiterung der Römerbrücke",
      licence: "public domain",
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
      licence: "Creative Commons Attribution-Share Alike 4.0 International",
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
      licence: "Creative Commons Attribution-Share Alike 4.0 International",
      urheber: "SLUB / Deutsche Fotothek / Möbius, Walter ",
      url: "https://commons.wikimedia.org/wiki/File:M%C3%B6bius-Walter-Trier-Stadtansicht-1934.jpeg",
      cat1: "1920-1940"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder 2/Möbius_Walter_Steipe_(Steupe)_1934.jpg",
      date: "1934",
      ort: "Trier, Hauptmarkt",
      desc: "Trier, Hauptmarkt u. \"Steipe\" (Bau von 1450), Aufn. Möbius 1934",
      licence: "Creative Commons Attribution-Share Alike 4.0",
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
      licence: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
      urheber: "Freilichtmuseum Roscheider Hof / Thomas Naethe",
      url: "https://commons.wikimedia.org/wiki/File:Trier,_Blick_auf_die_Benediktinerstra%C3%9Fe_1930er.png",
      cat1: "1920-1940"
    },
  {
      src: "assets/img/trier/Projektseminar Bilder/PortaNigraFotothek.jpg",
      date: "1942",
      ort: "Porta Nigra, Trier",
      desc: "Teilansicht der Feldseite mit Turm",
      licence: "Public Domain Mark 1.0 Universell",
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
      licence: "public domain in the United States",
      urheber: "Signal Corps Archive from United States",
      url: "https://commons.wikimedia.org/wiki/File:SC_201589-S_-_Infantrymen_of_10th_Armored_Division_dash_along_main_street_in_newly-captured_town_of_Trier,_Germany._2_March,_1945._(53008235369).jpg",
      cat1: "1940-1960"
    },
    {
    src: "assets/img/trier/Wikimedia Bilder/View_of_the_heavily_damaged_Trier_Hauptbahnhof_17_March_1945.jpg",
    date: "17. März 1945",
    ort: "Trier, Hauptbahnhof",
    desc: "Ansicht des stark beschädigten Trierer Hauptbahnhofs.",
    licence: "Public Domain, PD-US",
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
    licence: "Public Domain, PD-US",
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
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
    urheber: "Sammlung Kurt Kullmann, Volksfreund",
    url: "https://www.volksfreund.de/region/trier-trierer-land/kaiserthermen-1950er-jahre-bild-schaab-tankstelle_aid-64474567",
    cat1: "1940-1960"
  },
    {
      src: "assets/img/trier/Projektseminar Bilder/Trier,_Hauptmarkt_mit_Petrusbrunnen_1950er_(Willy_Pragher)_(2).jpg",
      date: "zwischen 1955 und 1958",
      ort: "Hauptmarkt, Trier",
      desc: "Trier, Hauptmarkt mit Petrusbrunnen zwischen 1955 und 1958. Das Datum ist vom Landesarchiv Baden-Württemberg mit 9. August 1975 angegeben, das Foto muss aber im vorgenannten Zeitraum entstanden sein, wahrscheinlich im Rahmen der Fotoreihen 2. Oktober 1956 (vermutlich, aufgrund des Wetters, vgl. File:Trier, Fachwerkhäuser Hauptmarkt 22u23 und Simeonstraße 37 19561002.jpg) oder 8. September 1958.",
      licence: "Creative Commons Attribution 3.0 Germany license",
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
      licence: "Creative Commons Attribution 3.0 Germany license. Attribution: Landesarchiv Baden-Württemberg Abt. Staatsarchiv Freiburg",
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
      licence: "Creative Commons Attribution 2.0 Generic license",
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
    licence: "Alle Rechte vorbehalten",
    urheber: "TV/ Josef Tietzen, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#39",
    cat1: "1940-1960",
    cat2: "Basilika"
    },
    {
    src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/1.jpg",
    date: "1963",
    ort: "Trier, Domplatz",
    desc: "Trier, Domplatz/ Domfreihof mit Parkplatz und Menschengruppe",
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
    urheber: "TV/Hilde Ewerz, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/zeitreise-historische-fotos-aus-der-region-trier_bid-93648817#25",
    cat1: "1960-1980"
  },
    {
      src: "assets/img/trier/Projektseminar Bilder 2/Hochwasser_an_der_Mosel_im_Februar_1970_19700223_(HB10856).jpg",
      date: "23 February 1970",
      ort: "Mariensäule, Trier",
      desc: "Blick von der Mariensäule flussaufwärts auf die Mosel in Trier bei Hochwasser. Die Brücke im Bild ist die Römerbrücke. Rechts davon Trier-West/Pallien mit Bahnanlagen des Personen- und Güterbahnhofs Trier West.",
      licence: "Creative Commons Attribution 4.0",
      urheber: "unbekannt / Bundesanstalt für Wasserbau Karlsruhe",
      url: "https://commons.wikimedia.org/wiki/File:Hochwasser_an_der_Mosel_im_Februar_1970_19700223_(HB10856).jpg",
      cat1: "1960-1980"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/Römerbrücke_Trier_1970_(MK170).jpg",
      date: "1970",
      ort: "Trier, Römerbrücke",
      desc: "Römerbrücke Trier ",
      licence: "Creative Commons Attribution 4.0 International",
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
      licence: "Creative Commons Attribution-Share Alike 4.0 International",
      urheber: "Mabit1",
      url: "https://commons.wikimedia.org/wiki/File:Barbarathermen_Trier_1970.jpg",
      cat1: "1960-1980"
    },
    {
      src: "assets/img/trier/Projektseminar Bilder/PortaNigraDDB.jpg",
      date: "um 1970",
      ort: "Porta Nigra, Trier",
      desc: "Die Porta Nigra ist ein um 170 n. Chr. errichtetes römisches Stadttor und heute das Wahrzeichen der Stadt Trier",
      licence: "CC0 1.0 Universell",
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
    licence: "Alle Rechte vorbehalten",
    urheber: "TV-Archiv, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#9",
    cat1: "1960-1980"
  },
    {
      src: "assets/img/trier/Projektseminar Bilder/BA 2004-04303_Scan01.jpg",
      date: "1970er Jahre",
      ort: "Porta Nigra, Trier",
      desc: "Das Foto zeigt die Porta Nigra in Trier.Die Porta Nigra (der Name bedeutet Schwarzes Tor) ist ein um 170 n. Chr. errichtetes römisches Stadttor und Wahrzeichen der Stadt Trier.",
      licence: "CC0 1.0 Universell",
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
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
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
    licence: "Alle Rechte vorbehalten",
    urheber: "EGB/Albrecht Haag, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/20-jahre-neuer-petrisberg-damals-und-heute-im-vergleich_bid-99239733#0"
  },
  {
    src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/5.jpg",
    date: "unbekannt",
    ort: "Trier, Hotel Reichshof",
    desc: "Trier, Hotel Reichshof gegenüber Hauptbahnhof. Heute steht das Heitkamp-Haus dort, wo damals das Hotel Reichshof von 1897-1956 stand.",
    licence: "Alle Rechte vorbehalten",
    urheber: "TV/Archiv, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/historische-bilder-fotos-trier-bahnhof-bernkastel-brauerei-bitburg_bid-64761297#26"
  },
  {
    src: "assets/img/trier/Historisches Foto Wasserzeichen_Volksfreund/8.jpg",
    date: "unbekannt",
    ort: "Trier, Kaiserthermen",
    desc: "Trier, Kaisertherme mit Skiläufern, die Langlaufen.",
    licence: "Alle Rechte vorbehalten",
    urheber: "TV/Friedemann Vetter, Volksfreund",
    url: "https://www.volksfreund.de/fotos/regionale-fotostrecken/fotos-winter-anno-dazumal-in-der-region-trier_bid-105431639#10"
  }
      ],
      selectedCat1: "all",
      selectedCat2: "all",
    };
  },
  computed: {
  filteredPreviews() {
    return (this.selectedCat1 === "all" && this.selectedCat2 === "all")
      ? this.previews
      : this.previews.filter((preview) => {
          const matchesCat1 = this.selectedCat1 === "all" || preview.cat1 === this.selectedCat1;
          const matchesCat2 = this.selectedCat2 === "all" || preview.cat2 === this.selectedCat2;
          
          // Prüfen, ob Kategorien existieren
          const cat1Exists = preview.cat1 !== undefined && preview.cat1 !== null;
          const cat2Exists = preview.cat2 !== undefined && preview.cat2 !== null;
          
          return (
            (matchesCat1 && (cat1Exists || this.selectedCat1 === "all")) &&
            (matchesCat2 && (cat2Exists || this.selectedCat2 === "all"))
          );
        });
  },
},
  mounted() {
    // Initialisiere GLightbox, wenn die Komponente gemountet wird (für Galerie-Anzeige, wenn man auf ein Bild klickt)
    const lightbox = GLightbox({
      selector: '.glightbox' // GLightbox auf alle Elemente mit der Klasse .glightbox anwenden
    });
    //Mosaik-Layout der Bilder
    this.initMasonryWhenImagesLoaded();
  },
  methods: {
    getOriginalIndex(filteredIndex) { //um Unterseiten (Detailansicht) richtig zuzuordnen, auch wenn Filter aktiv sind
    // Suche das Element im Originalarray und gib den Index zurück
    return this.previews.indexOf(this.filteredPreviews[filteredIndex]);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    initMasonry() {
      const grid = this.$refs.masonryGrid; // Vue 3 verwendet $refs für DOM-Zugriff
      if (!grid) return;

      this.msnry = new Masonry(grid, {
        itemSelector: ".portfolio-item",
        columnWidth: ".portfolio-item",
        percentPosition: true,
      });
    },
    initMasonryWhenImagesLoaded() {
      const grid = this.$refs.masonryGrid;
      if (!grid) return;

      const images = grid.querySelectorAll("img");
      let loadedImages = 0;

      if (images.length === 0) {
        this.initMasonry();
        return;
      }

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              this.initMasonry();
            }
          };
          img.onerror = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              this.initMasonry();
            }
          };
        }
      });

      if (loadedImages === images.length) {
        this.initMasonry();
      }
    },
    filter(category1 = "all", category2 = "all") {
      this.selectedCat1 = category1;
      this.selectedCat2 = category2;

      this.$nextTick(() => {
        this.initMasonryWhenImagesLoaded();
      });
    },
  },
});
</script>

<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;
}

#app {
  background: #fff;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
  /*grid-gap: 10px;*/
  grid-template-columns: repeat(3, 1fr); /* Drei Spalten pro Zeile */
  grid-gap: 20px; /* Abstand zwischen den Bildern */
}

.preview {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
  animation: appear 0.5s ease-in-out forwards;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Zuschneiden, um das Bild in den Container einzupassen */
  border-radius: 4px; /*Runde Ecken */
}

.caption {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-top: 1px solid #ddd;
}

/*
.cat1 {
  background: gold;
}
.cat2 {
  background: #333;
}
.cat3 {
  background: #ddd;
}
  */

.menu {
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  flex-flow: wrap;
  margin: -5px -5px;
}

/* Momentan ausgewählte Kategorie sichtbarer machen */
.portfolio-filters li.selected {
  color: var(--accent-color);
  font-weight: bold;  /* Optional: Fett gedruckter Text */
}





@keyframes appear {
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>






















