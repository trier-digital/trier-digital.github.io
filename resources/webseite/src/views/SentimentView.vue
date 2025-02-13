<script>
import SentimentBoxes  from "@/components/SentimentBoxes.vue";
import SentimentIntro  from "@/components/SentimentIntro.vue";

export default {
  name: "SentimentView",
  components: {
    SentimentBoxes,
    SentimentIntro
  }
}
</script>

<template>
  <div class="about">
    <h1 class="page-title dark-background">Emotionsanalyse Rathauszeitung</h1>
  </div>
  <SentimentIntro/>
  <SentimentBoxes />
</template>

<style scoped>

</style>