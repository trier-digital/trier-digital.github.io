<script>
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "TopicsView",
  components: {EmoArrows},
  data() {
    return {
      graph_1: "assets/topics/intertopic_distance_map.html",
      graph_2: "assets/topics/topic_barcharts.html",
      right: "topicsdist"
    }
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Überblick Topicmodelling</h1>
  <div class='container'>

    <p>"Worüber wird gesprochen?"</p>
    <p>

      Diese Seite dient zu einem Überblick darüber, welche Themen von den Fraktionen in der Rathauszeitung aufgegriffen
      werden.
    </p>
    <p>
      Eine erste Orientierung über die thematischen Struktur der Texte kann die Intertopic Distance Map geben. Diese
      Grafik stellt die verschiedenen Themen da, die in der Rathauszeitung identifiziert wurden. Die Größe der Kreise
      gibt dabei an, wie häufig ein Topic in den Texten vorkommt. Große Kreise repräsentieren häufigere Topics, kleine
      Kreise selten vorkommende.
      Der Abstand zwischen den Topics zeigt, wie eng diese jeweils miteinander verwandt sind. Themen, die sich
      inhaltlich ähnlich sind und häufig gemeinsam in den Texten vorkommen, liegen eng beieinander.
    </p>
    <p>
      Die Topic Word Scores zeigen für jedes Topic die wichtigsten Wörter, die es charakterisieren und helfen so, den
      inhaltlichen Kern jedes einzelnen Topics zu identifizieren. Anhand der wichtigsten Wörter lässt sich
      nachvollziehen, worum es in den jeweiligen Themen geht. Die Zahlen geben dabei an, wie stark ein bestimmtes Wort
      mit einem bestimmten Topic verbunden ist. Je höher die Zahl, desto relevanter ist das Wort für dieses Thema.
    </p>
    <div class="row gy-1 mb-4 justify-content-center align-items-center">
      <div class="col-lg-7 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200"
           data-aos-duration="1000">
        <iframe :src="graph_1" width="100%" height="700" allowfullscreen></iframe>
      </div>
    </div>
    <div class="row gy-1 mb-4 justify-content-center align-items-center">
      <div class="col-lg-10 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200"
           data-aos-duration="1000">
        <iframe :src="graph_2" width="100%" height="3300"></iframe>
      </div>
    </div>
    <EmoArrows :right="right"/>
  </div>
</template>

<style scoped>

</style>