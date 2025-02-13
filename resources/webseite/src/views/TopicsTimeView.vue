<script>
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "TopicsTimeView",
  components: {EmoArrows},
  data() {
    return {
      graph: "assets/topics/Zeitverlauf.html",
      left: "topicsdist"
    }
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Topics über die Zeit</h1>
  <div class="container">
    <br>
    <h2>
      “Wann standen welche Themen im Fokus?“
    </h2>
    <p>
      Diese Grafik zeigt, wie sich die Frequenzen, mit denen die verschiedenen Topics zwischen 2006 und 2024
      aufgegriffen wurden, über die Zeit hinweg entwickelt haben. Welche Themen wurden wann besonders relevant gesetzt,
      welche haben an Aufmerksamkeit im Diskurs gewonnen und welche verloren?
    </p>
    <p>
      Wählen Sie ein Topic über das Menü rechts aus oder betrachten Sie mehrere Topics gleichzeitig, um ihre Entwicklung
      miteinander zu vergleichen.
    </p>
    <iframe :src="graph" width="100%" height="600"></iframe>
    <EmoArrows :left="left"/>
  </div>
</template>

<style scoped>

</style>