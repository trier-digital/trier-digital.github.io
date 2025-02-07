<template>
  <section class="info">
    <Question
        v-for="question in questions"
        :key="question.id"
        :title="question.title"
        :info="question.info"
    />
  </section>
</template>

<script>
import Question from "./Question";
import "@/assets/css/accordion.css";

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

<style scoped lang="scss"></style>