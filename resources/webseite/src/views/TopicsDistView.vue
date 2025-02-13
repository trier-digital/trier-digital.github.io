<script>
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "TopicsDistView",
  components: {EmoArrows},
  data() {
    return {
      graph: "assets/topics/Themenverteilung_nach_Partei.html",
      left: "topicsoverview",
      right: "topicstime"
    }
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Verteilung der Topics pro Partei</h1>
  <div class="container">
    <br>
    <p>
      "Welche Parteien sprechen über welche Themen?"
    </p>
    <p>
      Diese Grafik zeigt, wie häufig die einzelnen Topics von den verschiedenen Fraktionen in der Rathauszeitung aufgegriffen wurden. (Zu beachten ist hierbei, dass die Rathauszeitung erst seit 2009 Beiträge der Partei “Die Linke” und seit 2014 Beitrage der  Partei “AFD” enthält.)
    </p>
    <p>
      Wählen Sie eine Partei über das Menü rechts aus, um sich die Verteilung der von ihr erwähnten Topics anzeigen zu lassen. Sie können auch die Topicverteilungen zweier Parteien miteinander vergleichen, indem sie beide auswählen.
    </p>
    <p>
      Durch Scrollen auf der X-Achse können weitere Topics betrachtet werden. Fahren Sie mit der Maus über die Grafik, um die dem Topic zugeordneten Wörter anzeigen zu lassen.
    </p>
    <iframe :src="graph" width="100%" height="900"></iframe>
    <EmoArrows :left="left" :right="right"/>
  </div>
</template>

<style scoped>

</style>