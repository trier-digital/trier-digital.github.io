<script>
import GLightbox from 'glightbox'; // Importiere GLightbox
import 'glightbox/dist/css/glightbox.css'; // Importiere das CSS für GLightbox
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "EmoDist",
  components: {EmoArrows},
  data() {
    return {
      link: "assets/img/svg/sentiment/emotion_pie_chart.svg",
      right: "emodistpartei"
    }
  },
  mounted() {
    // Initialisiere GLightbox, wenn die Komponente gemountet wird (für Galerie-Anzeige, wenn man auf ein Bild klickt)
    const lightbox = GLightbox({
      selector: '.glightbox' // GLightbox auf alle Elemente mit der Klasse .glightbox anwenden
    })
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Verteilung der Emotionen</h1>
  <div class="container">
    <div class="d-flex flex-row justify-content-center border border-dark p-lg-3">
      <img :src="link" alt="" class="rounded-2 glightbox zoom" width="60%" />
    </div>
    <div class="page-content d-flex flex-row justify-content-center mt-xxl-5">
      <div>
        <p>
          In diesem Kuchendiagramm sieht man, wie oft die Emotionen in allen Texten vorkommen, unabhängig von der
          Partei. Damit soll ein Überblick gegeben werden, mit welchen Emotionen die Parteien kommunizieren. Es wird
          deutlich, dass die Emotion “Angst” am häufigsten vorkommt. Darüber hinaus ist ein großer Teil der Absätze als
          “Keine davon” (45.1%) kategorisiert worden.
        </p>
      </div>
    </div>
    <EmoArrows :right="right"/>
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