<script>
import EmoArrows from "@/components/EmoArrows.vue";

export default {
  name: "TopicsTimeView",
  components: {EmoArrows},
  data(){
    return {
      graph: "assets/topics/Zeitverlauf.html",
      left: "topicsdist"
    }
  }
}
</script>

<template>
<div class="container">
  <h1 class="page-title">Topics über die Zeit</h1>
  <iframe :src="graph" width="100%" height="600"></iframe>/
  <EmoArrows :left="left" />
</div>
</template>

<style scoped>

</style>