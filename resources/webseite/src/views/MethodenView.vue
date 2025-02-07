<script>
import Questions from "@/components/Questions.vue";

import {reactive} from "vue";
import data from "@/assets/data/methoden";

export default {
  name: "App",
  components: {
    Questions,
  },
  setup() {
    const questions = reactive(data);

    return {questions};
  },
};
</script>

<template>
  <h1 class="page-title dark-background">Methoden</h1>
  <div class="container">
    <div class="mt-5">
      <h2>Methoden der Digital Humanities</h2>
    </div>
    <Questions :questions="questions"/>
  </div>
</template>

<style scoped>
</style>