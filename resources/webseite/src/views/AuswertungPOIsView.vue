<script>
import TextanalyseBoxes from '@/components/TextanalyseBoxes.vue';
import DropdownImage from "@/components/DropdownImage.vue";

const root = "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/"
export default {
  name: "AuswertungPOIsView",
  components: {
    TextanalyseBoxes,
    DropdownImage
  },
  data() {
    return {
      dropdown: {cat1: {
          category: "Partei",
          content: [
            'AFD', 'CDU', 'Die Grünen', 'Die Linken', 'FDP', 'SPD', 'UBT-FWG-UBM'
          ],
          active: "Partei"},
        cat2: {
          category: "Keyword",
          content: [
            'Theater', 'Innenstadt', 'Mosel', 'Exhaus', 'Ehrang', 'Kürenz', 'Euren', 'Trier-West', 'Dom', 'Tarforst'
          ],
          active: "Keyword",
        }
      },
      images: [
    {
        "cat1": "AFD",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Dom.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Ehrang.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Euren.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Exhaus.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Innenstadt.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Kürenz.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Mosel.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Tarforst.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Theater.svg"
    },
    {
        "cat1": "AFD",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/AFD_Trier-West.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Dom.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Ehrang.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Euren.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Exhaus.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Innenstadt.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Kürenz.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Mosel.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Tarforst.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Theater.svg"
    },
    {
        "cat1": "CDU",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/CDU_Trier-West.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Dom.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Ehrang.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Euren.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Exhaus.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Innenstadt.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Kürenz.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Mosel.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Tarforst.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Theater.svg"
    },
    {
        "cat1": "Die Grünen",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Grünen_Trier-West.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Dom.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Ehrang.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Euren.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Exhaus.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Innenstadt.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Kürenz.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Mosel.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Tarforst.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Theater.svg"
    },
    {
        "cat1": "Die Linken",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/Die Linken_Trier-West.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Dom.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Ehrang.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Euren.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Exhaus.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Innenstadt.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Kürenz.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Mosel.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Tarforst.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Theater.svg"
    },
    {
        "cat1": "FDP",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/FDP_Trier-West.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Dom.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Ehrang.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Euren.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Exhaus.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Innenstadt.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Kürenz.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Mosel.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Tarforst.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Theater.svg"
    },
    {
        "cat1": "SPD",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/SPD_Trier-West.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Dom",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Dom.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Ehrang",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Ehrang.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Euren",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Euren.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Exhaus",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Exhaus.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Innenstadt",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Innenstadt.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Kürenz",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Kürenz.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Mosel",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Mosel.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Tarforst",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Tarforst.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Theater",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Theater.svg"
    },
    {
        "cat1": "UBT-FWG-UBM",
        "cat2": "Trier-West",
        "src": "assets/img/Auswertung Rathauszeitung - Rebecca/wordclouds_for_generator/UBT-FWG-UBM_Trier-West.svg"
    }
      ]
    }
  }
}
</script>

<template>


<!-- Page Title -->
<div class="">
    <div class="">
        <h1 class="page-title dark-background">Textanalyse - Rathauszeitung</h1>
    </div>
</div><!-- End Page Title -->

<div class="container"><!--Erster Text mit Bild-->

    <div class="row gy-4 align-items-center features-item">
      <div class="col-md-5 order-2 order-md-2 d-flex align-items-center">
        <figure class="image-container">
          <img src="assets\img\Auswertung Rathauszeitung - Rebecca\Häufigkeiten_Top10_POIs.svg" class="pt-4 img-fluid" alt="">
          <figcaption>
            <p class="fst-italic" style="margin-left: 50px;">So häufig kamen die POIs im Rathaus-Korpus vor.</p>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-7 order-1 order-md-1">
            <h2>Über welche Orte diskutieren die Parteien in Trier und welche Standpunkte nehmen sie hierbei ein?</h2>
            <p>
                Hierfür wurden die Aussagen der Parteien, die sie in der stadteigenen Rathauszeitung getätigt haben, von uns in ein Korpus zusammengefügt und diese Texte automatisiert nach Örtlichkeiten in Trier durchsucht.
            </p>
            <p>
                Die Liste der Örtlichkeiten setzt sich aus Sehenswürdigkeiten, Stadtteilen, übergreifenden Begriffen (z.B. Innenstadt) und anderen geografischen Punkten (z.B. Mosel) zusammen. Sie beinhaltet insgesamt 75 <b>POI</b>s (Places Of Interest).
            </p>
      </div>
    </div>
</div>

<div class="container">
    <p>
        Aus den zehn am häufigsten genannten POIs sind drei Orte ausgewählt worden, die anschließend genauer analysiert wurden. Dabei ging es um die Frage, wie sich Themen und die Entwicklung des politischen Diskurses innerhalb eines Textkorpus mithilfe von Methoden des Distant Readings untersuchen lassen. Bereits durch einfache Worthäufigkeitsanalysen ließen sich Orte identifizieren, die von den Parteien besonders oft erwähnt wurden. Drei dieser Orte standen anschließend im Fokus einer detaillierteren Betrachtung, wobei die Ergebnisse durch zusätzliche Recherchen ergänzt wurden.
    </p>
    <p>
        Die analysierten Orte sind das <b>Theater</b>, das insgesamt 1.082-mal in den Texten vorkommt, das <b>Exhaus</b> mit 298 Nennungen und schließlich der <b>Dom</b>, der 222-mal erwähnt wird.
    </p>
</div>


<section id="about" class="about section light-background">
    <div class="container"><!--Vier Bilder nebeneinander-->
      <TextanalyseBoxes />
    </div>
</section>



<div class="container"><!--Wortwolken Text-->
  <div class="pt-4 align-items-center features-item">
      <h4>Was ist eine Wortwolke?</h4>
      <p>
        Anhand von Wortwolken können die Aussagen der Fraktionen zu den bestimmten POIs explorativ betrachtet werden.<br/>
        Wortwolken bieten eine Möglichkeit der Informationsvisualisierung. Hierfür wurden zuvor die Texte im Korpus nach Parteien unterteilt und Stoppwörter (z.B. der, die, das) entfernt. Folgend werden alle Texte anhand eines bestimmten Keywords durchsucht und die 100 häufigsten Wörter innerhalb der Texte je nach Vorkommen größer oder kleiner in der Wortwolke dargestellt.
      </p>
  </div>
</div>

<div class="container"><!--Wortwolken-Generator-->
  <div class="pt-4 align-items-center features-item">
      <h4>Wortwolken-Generator</h4>
      <p>
        Mit dem Wortwolken – Generator können eigene Wortwolken mit den Texten der Parteien und
        den zehn am häufigsten genannten Orten angezeigt werden. Hierzu einfach die Partei und das
        gewünschte Keyword auswählen!
      </p>
  </div>
<div class="container">
    <div class="justify-content-center border border-dark custom-container">
        <DropdownImage 
            :dropdown="dropdown" 
            :previews="images" 
            width="60%" 
            height="30%" 
        />
    </div>
</div>
<div class="pt-4 align-items-center features-item small-image">
    <p>
        <b>Disclaimer:</b> Die Datengrundlagen für die Fraktionen „Die Fraktion“ und „Freie Wähler“ sind zu klein für aussagekräftige Word clouds, weshalb sie in dem Generator nicht beachtet werden.
    </p>
</div>
</div>

<div class="container"><!-- Fußnote -->
  <div class="pt-4 align-items-center features-item">
        <p>
            <b>*</b> Quellenverweise der Bilder:
            </p>
        <ul>
            <li>
                Theater:
                Lizenz: CC BY-SA 3.0 <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"><img src="assets/img/copyright/by-sa.svg" height="25px"></a> ,
                Urheber: Stefan Kühn,
                URL: <a href="https://commons.wikimedia.org/wiki/File:Theater_Trier_Germany.jpg">URL</a>
            </li>
            <li>
                Exhaus:
                Lizenz: Public Domain <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"><img src="assets/img/copyright/pd.svg" height="25px"></a> ,
                URL: <a href="https://commons.wikimedia.org/wiki/File:Trier_Zurmaiener_Strasse_114_2.jpg">URL</a>
            </li>
            <li>
                Dom:
                Lizenz: Alle Rechte vorbehalten – Landesarchiv Baden-Württemberg,
                Urheber: Willy Pragher
                URL: <a href="http://www.landesarchiv-bw.de/plink/?f=5-2116122">URL</a>
            </li>
        </ul>
  </div>
</div>








</template>

<style scoped>

.custom-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}

.preview {
  max-width: 300px !important; /* Maximale Breite des Containers */
  max-height: 250px !important; /* Maximale Höhe des Containers */
  overflow: hidden !important; /* Verhindert, dass der Inhalt über den Container hinausgeht */
  position: relative !important; /* Für eventuell notwendige Positionierung */
}


.preview img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  max-width: 300px !important;
  max-height: 250px !important;
  border-radius: 4px;
}

.centered-container {
            width: 60%;
            margin: 0 auto;
        }

.centered #img {
            width: 60px;
            margin: 0 auto;
        }


</style>