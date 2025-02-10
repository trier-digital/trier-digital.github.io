<template>

  <!-- Page Title -->
  <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Karten der Stadt Trier</h1>
    </div>
  </div><!-- End Page Title -->
  <div class="">
    <div class="slider-container">
      <div class="row justify-content-center mt-5">
        <h5>Wählen Sie ein Jahrzehnt aus, um Karten anzuzeigen.</h5>
        <vue-slider
            v-model="value"
            :adsorb="true"
            :data="years"
            :marks="true"
            :tooltip-placement="'bottom'"
            width="700px"
            height="13px"
            @change="updateCards"
        ></vue-slider>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-3">
        <!-- Bereich zum Anzeigen der Karten und Metadaten -->
        <div v-if="selectedDecadeCards.length > 0" class="cards-container">
          <h3>Karten für das Jahrzehnt ab {{ value }}</h3>
          <div v-for="(card, index) in selectedDecadeCards" :key="index" class="card-item" @click="selectCard(card)"
               style="cursor:pointer;">
            <div class="card-info">
              <p><strong>Name:</strong> {{ card.name }}</p>
              <p><strong>Jahr:</strong> {{ card.year }}</p>
            </div>
            <div class="card-image">
              <img :src="card.preview" width="200" height="150" frameborder="0"></img>
            </div>
          </div>
        </div>
        <div v-else class="cards-container">
          <p>Keine Karten verfügbar für das Jahrzehnt {{ value }}</p>
        </div>
      </div>

      <div class="col-12 col-md-5">
        <div class="cards-container" v-if="selectedCard">
          <h3>{{ selectedCard.name }}</h3>
          <iframe
              :src="selectedCard.url"
              width="100%"
              height="600px"
          ></iframe>
        </div>
        <div v-else class="cards-container">
          <p>Wählen Sie eine Karte aus, um sie anzuzeigen.</p>
        </div>
      </div>

      <div class="col-12 col-md-4" v-if="selectedCard">
        <div class="metadata-container" v-if="selectedCard">
          <p><strong>Name:</strong> {{ selectedCard.name }}</p>
          <p><strong>Jahr:</strong> {{ selectedCard.year }}</p>
          <p><strong>Herausgeber:</strong> {{ selectedCard.source }}</p>
          <p><strong>Link:</strong> {{ selectedCard.link }}</p>
          <p><strong>Maßstab:</strong> {{ selectedCard.scale }}</p>
          <p>
            <strong>Kommentar:</strong>
            {{ selectedCard.comment }} <br>
            {{ selectedCard.footnote1 }} <br>
            {{ selectedCard.footnote2 }} <br>
            {{ selectedCard.footnote3 }} <br>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
// Importiere den Slider
import VueSlider from 'vue-3-slider-component';
//import 'vue-3-slider-component/theme/default.css'; // Importiere das Stylesheet für den Slider

export default {
  name: "KartenView",
  components: {
    VueSlider
  },
  data() {
    return {
      value: 1890, // Anfangswert des Sliders
      years: [1890, 1900, 1910, 1920, 1930, 1940, 1950], // Liste der Jahre für den Slider
      cardsByDecade: {
        1890: [
          {
            url: 'assets/maps/Trier 1891 LL/index.html',
            name: '[Neue Nr. 6205] Trier / Geologische Karte',
            year: '1891',
            source: 'Grebe, Heinrich, 1891: "Geologische Spezialkarte von Preussen und den Thüringischen Staaten" und Nachfolgewerke; [Neue Nr. 6205]; Trier; Gradabteilung 80, Blatt 14. Kraatz, Berlin [Fachinformationsdienst Geowissenschaften, Göttinger Digitalisierungszentrum]',
            link: 'https://doi.org/10.23689/fidgeo-3852',
            scale: '1 zu 25000',
            comment: 'Die geologische Karte stammt aus der Sammlung des deutschen Geologen Heinrich Grebe "Geologische Specialkarte von Preussen und den Thüringischen Staaten" aus dem Jahr 1891, die auch Erläuterungen zu jeder Karte aus der Sammlung beinhaltet. In der Erläuterun zu Trierer Blatt [1] werden "die namenhaften Höhepunkte" Trierer Umgebung genannt. Drei höchten Punkte waren zu der Zeit die Höhe östlich von Herresthalerhof (heute Herresthal) mit 382,6 Meter, auf der Ehrenz (Wintersdorfer Berg) in der Nähe von Wintersdorf mit 379, 4 Meter und auf der Olk östlich von Aach (in der Nähe von der heutigen L43) mit 377,7 Meter. Ferner ist die Trierer Gegend reich an paleovulkanischen Eruptivgesteinen aus der Gruppe des Diabas, die durch üner 300 Fundpunkte vertreten sind [2]. Außerdem wird die in der Näne von Feyen liegende Quelle "Mattheiser Sauerbrunnen" erwähnt, deren Wasser reich an Mineralien ist [3].',
            footnote1: '[1] Grebe, Heinrich: Blatt Trier. In: Erläuterungen zur Geologischen Specialkarte von Preussen und den Thüringischen Staaten, Berlin 1892',
            footnote2: '[2] Ebd.',
            footnote3: '[3] Ebd.',
            preview: '/assets/maps/Vorschaubilder/Trier 1891 LL_vorschau.jpg'
          },
          {
            url: 'assets/maps/Trier 1894 LL/index.html',
            name: 'Karte der Umgebung von Trier, 1:40 000, Lithographie',
            year: '1894',
            source: 'Beschreibung: Karte der Umgegend von Trier / Lith. geogr. Anst. v. C. Welzbacher. - 1:40 000. - Trier : Stephanus, [1894]. - 1 Kt. : Lithogr. ; 34 x 39 cm [Sächsische Landesbibliothek - Staats- und Universitätsbibliothek Dresden (SLUB)]',
            link: 'http://www.deutschefotothek.de/documents/obj/90063869',
            scale: '1 zu 40000',
            comment: 'Die litographische Karte zeigt die Umgebung von Trier in der Ansicht von Jahr 1894, samt Nachbarstädte und Höhen. Sie wurde in der lithographisch geographischen Anstalt von C. Welzbacher in Darmstadt angefertigt.',
            preview: '/assets/maps/Vorschaubilder/Trier 1894 LL_vorschau.jpg'
          }
        ],
        1900: [
          {
            url: 'assets/maps/Trier Straßenbahnnetz LL/index.html',
            name: 'Straßenbahnnetz-Trier-Henney',
            year: 'zwischen 1905 und 1913',
            source: 'Henney, Hermann: Die Elektrizitäts-Werke der Stadt Trier, Bau- und Entwicklungs-Geschichte 1902 bis 1913, Trier 1913 [Universitäts- und Stadtbibliothek Köln]',
            link: 'https://commons.wikimedia.org/wiki/File:Stra%C3%9Fenbahnnetz-Trier-Henney.jpg',
            scale: 'nicht angegeben',
            comment: 'Straßenbahnnetz nebst Gleisen und Speisekabeln der Straßenbahn in der Ansicht vom Zeitraum von 1905 bis 1913. Anfangs 1890 als Pferdebahn eingerichtet, ist diese 1905 zur Straßenbahn geworden [1]. Während die Pferdebahn zwei Linien hatte, hatte die Trierer Straßenbahn vier Linien und 22 Haltestellen [2]. Die Karte wurde von Hermann Henney in seinem Buch "Die Elektrizitäts-Werke der Stadt Trier" abgedruckt.',
            footnote1: '[1] Henney, Hermann: Die Elektrizitäts-Werke der Stadt Trier, Bau- und Entwicklungs-Geschichte 1902 bis 1913, Trier 1913',
            footnote2: '[2] Gilles, Joachim und Karl-Josef: Die Trierer Straßenbahnen (Die Reihe auf Schienen unterwegs), Sutton-Verlag Erfurt, 2006',
            preview: '/assets/maps/Vorschaubilder/Trier Straßenbahnnetz LL_vorschau.jpg'
          }
        ],
        1910: [
          {
            url: '/assets/maps/Trier Baueinteilung LL/index.html',
            name: 'Bauklasseneinteilung der Stadt Trier und deren Vororte. Zur Bauordnung vom 6. April 1911.',
            year: '1911',
            source: 'Kunst- und Verlagsanstalt Schaar & Dathe, Trier',
            link: 'https://commons.wikimedia.org/wiki/File:Bauklasseneinteilung-Stadt-Trier.jpg',
            scale: '1 zu 5000',
            comment: 'Die Karte wurde 1911 vom Architekten Hermann Jansen für das Wettbewerb "Bebauungsplan für Heiligkreuz" eingereicht [1]. Die Karte zeigt die Verteilung der Stadt Trier in einzelne Stadtteile (Bauklassen) samt ihren Grenzen.',
            footnote1: '[1] Architekturmuseum der TU Berlin. https://architekturmuseum.ub.tu-berlin.de/P/153069.php',
            preview: '/assets/maps/Vorschaubilder/Trier Baueinteilung LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier 1911 Kaiser-Wilhelm-Brücke LL/index.html',
            name: 'Kaiser-Wilhelm-Brücke-Karte',
            year: 'zwischen 1911 und 1913',
            source: 'Schilling: Die neue Kaiser-Wilhelm-Brücke in Trier. In: Zentralblatt der Bauverwaltung, Jg. 33, 1913 [Zentral- und Landesbibliothek Berlin]',
            link: 'https://commons.wikimedia.org/wiki/File:Kaiser-Wilhelm-Br%C3%BCcke-Karte.jpg',
            scale: '1 zu 10000',
            comment: 'Die Karte zeigt Trierer Innenstadt mit der nachträglich in die Karte eingezeichnetem Plan der Kaiser-Wilhelm-Brücke. Vorher fuhr zwischen den beiden Moselufern eine Fähre und die Römerbrücke war von Metz bis Koblenz die einzige Brücke, die beide Seiten der Mosel vereint [1]. Im Rahmen eines öffentlichen Wettbewerbs wurden mehrere Entwürfe der geplanten Brücke gesichtet und den ersten Platz dem Architekten Prof. Meißner zusammen mit der Firma Dyckerhoff und Widmann A.-G. zugesprochen, die die Bau der Brücke auch übernommen haben [2]. Die Brücke wurde 1913 erbaut und vom Kaiser Wilhelm II eingeweiht [3].',
            footnote1: '[1] Schilling: Die neue Kaiser-Wilhelm-Brücke in Trier. In: Zentralblatt der Bauverwaltung. Nr. 83, 1913, S. 551 ff.',
            footnote2: '[2] Ebd.',
            footnote3: '[3] Morgen, Roland: Glanz, Gloria und ungeliebter Name: 100 Jahre Kaiser-Wilhelm-Brücke. volksfreund.de, 2013.',
            preview: '/assets/maps/Vorschaubilder/Trier 1911 Kaiser-Wilhelm-Brücke LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier Speisekabelnetz LL/index.html',
            name: 'Trier, Seisekabelnetz',
            year: '1913',
            source: 'Henney, Hermann: Die Elektrizitäts-Werke der Stadt Trier, Bau- und Entwicklungs-Geschichte 1902 bis 1913, Trier 1913 [Universitäts- und Stadtbibliothek Köln]',
            link: 'https://commons.wikimedia.org/w/index.php?curid=155209763',
            scale: 'nicht angegeben',
            comment: 'Auf der Karte ist ein Speisekabelnetz zu sehen, das 1902 samt Prüfkabel, die die Licht- und Straßenbahnspannung gemessen haben, eingelegt wurde [1]. Speisekabel verlaufen zwischen Transformatorstationen. Außerdem sind diese durch Zwischenschaltung von Verteilungskästen mit den Verteilungskabeln verbunden, die den Strom auf Straßen verteilen [2]. Die Karte wurde von Hermann Henney in seinem Buch "Die Elektrizitäts-Werke der Stadt Trier" abgedrückt.',
            footnote1: '[1] Henney, Hermann: Die Elektrizitäts-Werke der Stadt Trier, Bau- und Entwicklungs-Geschichte 1902 bis 1913, Trier 1913',
            footnote2: '[2] Ebd.',
            preview: '/assets/maps/Vorschaubilder/Trier Speisekabelnetz LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier Verteilungskabel LL/index.html',
            name: '',
            year: '1913',
            source: '',
            link: '',
            scale: '',
            comment: '',
            preview: '/assets/maps/Vorschaubilder/Trier Verteilungskabel LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier 1916 LL/index.html',
            name: 'Messtischblatt 6204/6205 : Trier, 1916',
            year: '1916',
            source: 'Reichsamt für Landesaufnahme, 1916 [Sächsische Landesbibliothek - Staats- und Universitätsbibliothek Dresden (SLUB)]',
            link: 'http://www.deutschefotothek.de/documents/obj/90120583',
            scale: '1 zu 25000',
            comment: 'Das Messtischblatt zeigt Trier und nähere Umgebung der Stadt in der Ansicht von 1916. Herausgegeben wurde die Karte vom Reichsamt für Landesaufnahme.',
            preview: '/assets/maps/Vorschaubilder/Trier 1916 LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier 1919 Luftaufnahme LL/index.html',
            name: 'Trier, Luftaufnahme 19190421',
            year: '1919',
            source: 'Unbekannt [United States Army]',
            link: 'https://commons.wikimedia.org/wiki/File:Trier,_Luftaufnahme_19190421.jpg',
            scale: '3000 m 50 cm',
            comment: 'An der Luftaufnahme von 1919 erkennt man Trierer Innenstadt. Sie wurde von einem Angestellten der Armee der USA gemacht.',
            preview: '/assets/maps/Vorschaubilder/Trier 1919 Luftaufnahme LL_vorschau.jpg'
          }
        ],
        1920: [],
        1930: [
          {
            url: '/assets/maps/Trier 1934 LL/index.html',
            name: 'Plan von Trier, 1:10 000, Schwarzdruck, um 1934',
            year: '1934',
            source: 'Kunst- und Verlagsanstalt Schaar & Dathe, Trier [Sächsische Landesbibliothek - Staats- und Universitätsbibliothek Dresden (SLUB)]',
            link: 'https://www.europeana.eu/en/item/463/item_MZ6OQEDIN3RCEN6RWL4TMUJANDTZQZEE',
            scale: '1 zu 10000',
            comment: 'Die Karte zeigt die Trierer Innenstadt in der Ansicht um 1934. Dabei sind die Gebäuden in öffentlicher Hand hervorgehoben. Herausgegeben und gedruckt in Trier von Schaar & Dathe.',
            preview: '/assets/maps/Vorschaubilder/Trier 1934 LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Messtichblatt 1936 LL/index.html',
            name: 'Meßtischblatt 6205 : Trier, 1936',
            year: '1936',
            source: 'Reichsamt für Landesaufnahme [Sächsische Landesbibliothek - Staats- und Universitätsbibliothek Dresden (SLUB)]',
            link: 'http://www.deutschefotothek.de/documents/obj/71056921',
            scale: '1 zu 25000',
            comment: 'Die Karte zeigt die Stadt Trier, sowie das Gebiet bis zur luxemburgischen Grenze. Angefertigt vom Reichsamt für Landesaufnahme.',
            preview: '/assets/maps/Vorschaubilder/Messtichblatt 1936 LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier Messtischblatt 1939 LL/index.html',
            name: 'Meßtischblatt-6205-Trier-1939',
            year: '1939',
            source: 'Unbekannt [Harold B. Lee Library, Brigham Young University]',
            link: 'https://commons.wikimedia.org/w/index.php?curid=106888246',
            scale: '1 zu 25000',
            comment: 'Karte erstellt vom US-Militär zu Beginn des Zweiten Weltkriegs. Die Karte zeigt die Stadt Trier und das Gebiet bis zur luxemburgischen Grenze. Die Legenden sind sowohl auf englisch, als auch französisch verfasst.',
            preview: '/assets/maps/Vorschaubilder/Trier Messtischblatt 1939 LL_vorschau.jpg'
          }
        ],
        1940: [
          {
            url: 'assets/maps/Trier Defense 1945 LL/index.html',
            name: 'Topographic Map of Trier with Defense Overprint - NARA - 100384430 (page 3)',
            year: '1945',
            source: 'Unbekannt [United States Army, United States National Archives and Records Administration]',
            link: 'https://commons.wikimedia.org/wiki/File:Topographic_Map_of_Trier_with_Defense_Overprint_-_NARA_-_100384430_(page_3).jpg',
            scale: '1 zu 25000',
            comment: 'Erstelllt von den amerikanischen Streitkräften am Ende des Zweiten Weltkriegs, zeigt die Karte neben der Stadt Trier noch das Gebiet nordwestlich bis zur luxemburgischen Grenze. Hier wurde eine vorhandene deutsche Karte genommen und mithilfe von Luftaufnahmen um militärisch wichtige Punkte (Stellungen, Flugplätze etc.) ergänzt.',
            preview: '/assets/maps/Vorschaubilder/Trier Defense 1945 LL_vorschau.jpg'
          },
          {
            url: '/assets/maps/Trier 1945 LL/index.html',
            name: 'Topographic map of Trier, Germany, February 1945 (100384427)',
            year: '1945',
            source: 'Unbekannt [United States Army, United States National Archives and Records Administration]',
            link: 'https://commons.wikimedia.org/w/index.php?curid=98493068',
            scale: '1 zu 25000',
            comment: 'Erstelllt von den amerikanische Streitkräften am Ende des Zweiten Weltkriegs, zeigt die Karte neben der Stadt Trier noch das Gebiet nordwestlich bis zur luxemburgischen Grenze. Grundlage war eine deutsche topographische Karte. Eine entsprechende Legende, welche die deutschen Beschriftungen übersetzt, findet sich am rechten Rand.',
            preview: '/assets/maps/Vorschaubilder/Trier 1945 LL_vorschau.jpg'
          },
        ],
        1950: [
          {
            url: '/assets/maps/Index Trier 1953 LL/index.html',
            name: 'Index Page: Trier: Aufschnitt der Bildkarte',
            year: '1953',
            source: 'Bollmann Bildkarten Verlag [David Rumsey Historical Map Collection]',
            link: 'https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~310756~90080529:Index-Page--Trier--Aufschnitt-der-B?qvq=q:trier;lc:RUMSEY~8~1&mi=18&trs=32',
            scale: '"Die Entfernung zwischen den Gitterlinien ist 500 Meter"',
            comment: 'Information von der Seite der "David Rumsey Historical Map Collection": Bollmann\'s folded birds-eye-view of Teier with city map on verso "Trier: Aufschnitt der Bildkarte". Includes index. Produced by Hermann Bollmann, a German cartographer who brought his training as a graphic artist to bear on the German tradition of Vogelschaukarten (bird\'s-eye-view maps). Bollmann has repeatedly revised the maps from the exact same point-of-view, demonstrating the development of urban Germany. Library has other edition of this map. For prints of this map, contact Bollmann-Bildkarten-Verlag GmbH & Co. KG.',
            preview: '/assets/maps/Vorschaubilder/Index Trier 1953 LL_vorschau.jpg'
          },
          {
            url: 'assets/maps/Trier Bollmann 1953 LL/index.html',
            name: 'Trier. Bollmann Bildkarten Verlag. Juli 1953.',
            year: '1953',
            source: 'Bollmann Bildkarten Verlag [David Rumsey Historical Map Collection]',
            link: 'https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~310755~90080528:Trier?qvq=q:trier;lc:RUMSEY~8~1&mi=17&trs=32',
            scale: 'nicht angegeben',
            comment: 'Information von der Seite der "David Rumsey Historical Map Collection": Bollmann\'s folded birds-eye-view of Teier with city map on verso "Trier: Aufschnitt der Bildkarte". Includes index. Produced by Hermann Bollmann, a German cartographer who brought his training as a graphic artist to bear on the German tradition of Vogelschaukarten (bird\'s-eye-view maps). Bollmann has repeatedly revised the maps from the exact same point-of-view, demonstrating the development of urban Germany. Library has other edition of this map. For prints of this map, contact Bollmann-Bildkarten-Verlag GmbH & Co. KG.',
            preview: '/assets/maps/Vorschaubilder/Trier Bollmann 1953 LL_vorschau.jpg'
          }
        ]
      },
      selectedDecadeCards: [], // Karten für das ausgewählte Jahrzehnt
      selectedCard: null // Die aktuell ausgewählte Karte
    };
  },
  methods: {
    // Diese Methode wird aufgerufen, wenn der Slider sich ändert
    updateCards() {
      this.$nextTick(() => {
        // Wähle die Karten aus, die zum ausgewählten Jahrzehnt passen
        this.selectedDecadeCards = this.cardsByDecade[this.value] || [];
      });
    },
    // Diese Methode wird aufgerufen, wenn auf eine Karte geklickt wird
    selectCard(card) {
      this.selectedCard = card;
    }
  },
  created() {
    // Initialisieren der Karten für das erste Jahrzehnt
    this.updateCards();
  }
};
</script>

<style scoped>
/* Setze den Slider in die Mitte der Seite */
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; /* Höhe der Seite */
  width: 100%;
  background-color: #f0f0f0; /* Optional: Hintergrundfarbe */
}

/* Anpassungen für den Slider */
.vue-slider {
  width: 80%; /* Setze eine Breite für den Slider */
}

.vue-slider .vue-slider-mark {
  transform: translateX(-50%) scale(0.9); /* Kleinere Markierungen */
  font-size: 12px; /* Kleinere Schrift für die Jahre */
}

/* Styles für die Kartenliste */
.cards-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.metadata-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.card-item {
  /*display: block;*/
  /*width: 200px;*/
  margin-bottom: 10px; /* Abstand zwischen Karten */
}

.card-info {
  padding: 5px;
  /*background-color: rgba(0, 0, 0, 0.6);*/
  /*color: white;*/
  text-align: left;
  border-radius: 5px; /* Ecken abrunden */
}

.card-image {
  margin-top: 0px; /* Abstand zwischen Text und Bild */
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Bild wird das gesamte Element ausfüllen, ohne das Seitenverhältnis zu verzerren */
}


.row {
  display: flex;
  justify-content: space-between;
}

h5 {
  text-align: center;
}
</style>
