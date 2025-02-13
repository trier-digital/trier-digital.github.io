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
    <iframe :src="graph" width="100%" height="600"></iframe>
    <EmoArrows :left="left"/>
  </div>
</template>

<style scoped>

</style>