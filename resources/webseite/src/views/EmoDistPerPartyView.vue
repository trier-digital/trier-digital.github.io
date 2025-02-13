<script>
import Carousel from "@/components/Carousel.vue"
import EmoArrows from "@/components/EmoArrows.vue";

const root = "assets/img/svg/party/"

export default {
  name: "EmoDistPerPartyView",
  components: {EmoArrows, Carousel: Carousel},
  data() {
    return {
      links: [
        root + 'AFD_emotion_distribution.svg',
        root + 'CDU_emotion_distribution.svg',
        root + 'Die Grünen_emotion_distribution.svg',
        root + 'Die Linken_emotion_distribution.svg',
        root + 'FDP_emotion_distribution.svg',
        root + 'SPD_emotion_distribution.svg',
        root + 'UBT-FWG-UBM_emotion_distribution.svg'
      ],
      left: "emodist",
      right: "emodistprozent"
    }
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Emotionsanalyse pro Partei</h1>
  <div class="container">

    <div class="d-flex flex-row justify-content-center">
      <Carousel :cardata="links" indicators size="w-50 pt-5" class="border border-dark"/>
    </div>
    <div class="page-content d-flex flex-row justify-content-center mt-xxl-5">
      <div>
        <p>
          Hier werden für jede Partei Balkendiagramme präsentiert, die die Anzahl der Emotionen pro Jahr zeigen. Durch
          die Visualisierung für jede Partei einzeln kann man erforschen, ob die Anteile einer bestimmten Emotion in
          einem Jahr überwiegen oder ob die Parteien in verschiedenen Jahren unterschiedliche Emotionen kommuniziert
          haben.
          Zum Beispiel kann man beobachten, wie oft die Emotion “Freude” über die Jahre hinweg kommuniziert wurde.
        </p>
      </div>
    </div>
    <EmoArrows :left="left" :right="right"/>
  </div>
</template>

<style scoped>

</style>