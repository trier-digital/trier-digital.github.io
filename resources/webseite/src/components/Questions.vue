<template>
  <section class="info">
    <Question
        v-for="question in questions"
        :key="question.id"
        :title="question.title"
        :info="question.info"
        :sub="question.sub"
    />
  </section>
</template>

<script>
import Question from "./Question";

export default {
  name: "App",
  components: {
    Question,
  },
  props: {
    questions: Array,
  },
};
</script>

<style scoped>
@import "@/assets/css/accordion.css";
</style>