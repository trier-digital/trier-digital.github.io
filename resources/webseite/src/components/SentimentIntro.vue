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
      <h2>Entschlüsselung der Nuancen von Emotionen: Sentimentanalyse in Aktion</h2>
      <p class="text">Im sich ständig weiterentwickelnden Datenuniversum erweist sich die Sentimentanalyse als
        leistungsstarkes
        Werkzeug
        zur Interpretation emotionaler Untertöne in Textinformationen. Mithilfe fortschrittlicher Algorithmen der
        natürlichen Sprachverarbeitung (NLP) entschlüsselt sie unstrukturierte Inhalte und verwandelt diese in
        umsetzbare
        Erkenntnisse. Von Social-Media-Gesprächen bis hin zu Kundenbewertungen erfasst die Sentimentanalyse die Essenz
        der
        öffentlichen Wahrnehmung – sei es positiv, neutral oder negativ – und ermöglicht es Unternehmen und Forschern,
        fundierte Entscheidungen mit Präzision zu treffen.
      </p>
      <p>
        Dieses faszinierende Feld schlägt eine Brücke zwischen computerlinguistischer Analyse und menschlicher
        Psychologie,
        indem es maschinelle Lernmodelle einsetzt, um die Feinheiten von Emotionen zu verstehen und zu quantifizieren.
        Ob
        bei der Vorhersage von Markttrends oder der Verbesserung von Nutzererlebnissen – die Sentimentanalyse dient als
        Kompass, der Strategien in einer von Emotionen und Daten getriebenen Welt lenkt.
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
          <img src="@/assets/img/svg/sentiment/score_distribution.svg" alt="score_distribution" class="glightbox zoom">
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
img{
  cursor: pointer;
}
</style>