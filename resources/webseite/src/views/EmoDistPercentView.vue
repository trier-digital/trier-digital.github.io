<script>
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "EmoDistPercentView",
  components: {EmoArrows},
  data() {
    return {
      link: "assets/sentiment/interactive_emotion_chart.html",
      left: "emodistpartei",
      right: "emowort"
    }
  }
}
</script>

<template>
  <h1 class="page-title dark-background"> Emotionen-Verteilung in Prozent</h1>
  <div class="container">

    <iframe :src="link" width="100%" height="700" allowfullscreen></iframe>
    <div class="page-content d-flex flex-row justify-content-center mt-xxl-5">
      <div>
        <p>
          Diese Grafik (Bubble-Chart) ermöglicht es den Nutzer*innen, den gewünschten Zeitraum über den Zeitstrahl
          selbst auszuwählen, um die Emotionen der Parteien miteinander zu vergleichen. Die Größe der Blase imitiert die
          prozentuale Emotionsverteilung pro Partei ([wie in der Grafik “Emotionsverteilung pro Partei”]()), mit der
          Möglichkeit, die verschiedenen Emotionen der Parteien direkt miteinander zu vergleichen. Die genaue
          Prozentzahl wird angezeigt, wenn man mit der Maus über die Blase fährt.
          So kann man zum Beispiel sehen, mit wie viel Prozent die Emotion “Freude” in den Textbeiträgen der Parteien im
          Jahr 2015 kommuniziert wurde.
          Für eine spezifische Analyse können die Emotionen in der Legende (rechts) durch Anklicken aus- und
          eingeblendet werden.
          Auch hier gilt: Die Texte der Parteien “Die Linke“ und “AFD” wurden erst ab 2009 bzw. 2014 publiziert.
        </p>
      </div>
    </div>
    <EmoArrows :left="left" :right="right"/>
  </div>
</template>

<style scoped>

</style>