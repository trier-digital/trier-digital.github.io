<script>
import GLightbox from 'glightbox'; // Importiere GLightbox
import 'glightbox/dist/css/glightbox.css'; // Importiere das CSS für GLightbox


export default {
  name: "SentimentIntro",
  mounted() {
    // Initialisiere GLightbox, wenn die Komponente gemountet wird (für Galerie-Anzeige, wenn man auf ein Bild klickt)
    const lightbox = GLightbox({
      selector: '.glightbox' // GLightbox auf alle Elemente mit der Klasse .glightbox anwenden
    });
  }
}
</script>

<template>
  <div class="container d-flex flex-row gap-3 justify-content-between">
    <div class="">
      <h2 class="">
        Von welchen Emotionen ist der Diskurs um die Entwicklung der Stadt Trier geprägt?
      </h2>
      <p>
        Auf dieser Unterseite präsentieren wir mehrere Betrachtungsweisen einer Emotionsanalyse, die mit Hilfe eines
        <a href="https://huggingface.co/visegradmedia-emotion/Emotion_RoBERTa_german6_v7" target="_blank"
           class="link-dark">KI-Modells </a> aus Texten der <a
          href="https://www.trier.de/rathaus-buerger-in/aktuelles/rathaus-zeitung/?all=true&getAttrValues=2b9509da-8416-ad31-ecb5-6e23032ead2a&getAttrValuesCls=0a8303dd-3261-0d31-46e6-9c3332ead2aa&getAttrValuesMax=10&getAttrValuesOrder=DESC&page=1&pagesize=20&press=true"
          target="_blank" class="link-dark">Trierer
        Rathauszeitung</a>
        erstellt wurde. Im Mittelpunkt stehen Texte aus der Rathauszeitung, die von verschiedenen Parteien zwischen 2006
        und Ende 2024 dort publiziert wurden.
      </p>
      <p>
        Das KI-Modell kann dabei sechs verschiedene Emotionen erkennen: Wut, Angst, Freude, Traurigkeit, Ekel. Kann das
        Modell einen Text keiner dieser Kategorien zuordnen, wird er als “Keine davon” erkannt.
        Ein Text kann jedoch mehrere Emotionen beinhalten, weshalb die Texte in Abschnitte geteilt wurden und pro
        Abschnitt eine Emotion entnommen wurde.
      </p>
      <p>
        Die Anzahl der Texte pro Partei ist in Abbildung 1 rechts dargestellt. Die Textanzahl der Parteien “CDU”, “SPD”,
        “FDP”, “Die Grünen” und “UBT/FWG/UBM” ist mit jeweils etwa 700 Texten relativ ausgeglichen. Anders als bei den
        Texten der Parteien - die seit 2006 veröffentlicht werden - wurden von der Partei “Die Linke” erst seit 2009 und
        bei der Partei “AFD” erst seit 2014 Texte veröffentlicht, was den Unterschied in der Textanzahl erklärt.
      </p>
      <p>
        Doch wie kann man erkennen, wie gut das Modell die Texte den Emotionen zuordnet?
        In Abbildung 2 kann man sehen, wie sicher das Modell bei der Entscheidung für eine Emotion war und wie oft diese
        Sicherheit (Score) vorgekommen ist. Die Analyse ergab, dass das Modell im Durchschnitt 0,9289 (von 1) sicher
        ist,
        dass es sich um die gewählte Emotion handelt. Das bedeutet, dass das Modell eine hohe Vorhersagekraft hat, aber
        es
        gibt trotzdem noch Fälle, in denen die Texte für eine Zuordnung zu komplex waren.
      </p>
      <p>
        Hier sind vier Analyseergebnisse, die mit diesem Verfahren entstanden sind.
      </p>
    </div>
    <div class="d-flex flex-column gap-3 justify-content-center w-25">
      <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
        <figure>
          <div class="service-item item-red position-relative d-flex flex-column">
            <img src="@/assets/img/svg/sentiment/entries_per_party.svg" alt="entries" class="glightbox zoom">
            <span>Abbildung 1</span>
          </div>
        </figure>
      </div>
      <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
        <figure>
          <div class="service-item item-red position-relative d-flex flex-column">
            <img src="@/assets/img/svg/sentiment/score_distribution.svg" alt="score_distribution"
                 class="glightbox zoom">
            <span>Abbildung 2</span>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.05);
}

img {
  cursor: pointer;
}
</style>