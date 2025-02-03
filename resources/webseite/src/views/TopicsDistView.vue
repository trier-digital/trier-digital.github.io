<script>
export default {
  name: "TopicsDistView",
  data(){
    return {
      graph: "assets/topics/Themenverteilung_nach_Partei.html"
    }
  }
}
</script>

<template>
<div class="container">
  <h1 class="page-title">Verteilung der Topics pro Partei</h1>
  <p>
    "Wer spricht über was?"
  </p>
  <p>
    Diese Grafik zeigt, wie häufig die einzelnen Topics von den verschiedenen Fraktionen in der Rathauszeitung aufgegriffen wurden.
  </p>
  <iframe :src="graph" width="100%" height="500"></iframe>
</div>
</template>

<style scoped>

</style>