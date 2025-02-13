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
  <div class="container">
    <h1 class="page-title dark-background">Verteilung der Emotionen</h1>
    <div class="d-flex flex-row justify-content-center border border-dark p-lg-3">
      <img :src="link" alt="emotion_pie_chart" class="rounded-2 glightbox zoom" width="60%"/>
    </div>
    <div class="page-content d-flex flex-row justify-content-center mt-xxl-5">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </p>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
          feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <p>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <p>
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
          possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <EmoArrows :right="right" />
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