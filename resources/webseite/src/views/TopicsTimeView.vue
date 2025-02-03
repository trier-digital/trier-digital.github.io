<script>
export default {
  name: "TopicsTimeView",
  data(){
    return {
      graph: "assets/topics/Zeitverlauf.html"
    }
  }
}
</script>

<template>
<div class="container">
  <h1 class="page-title">Topics über die Zeit</h1>
  <iframe :src="graph" width="100%" height="600"></iframe>/
</div>
</template>

<style scoped>

</style>