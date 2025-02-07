<template>
  <article class="question" :class="{ expanded }">
    <header>
      <h4 @click="expanded = !expanded" class="question-title">
        {{ title }}
      </h4>
      <button class="btn" @click="expanded = !expanded">
        <svg
            v-show="expanded"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
        </svg>
        <svg
            v-show="!expanded"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
    </header>
    <div class="content" v-if="expanded">
      <p class="info" v-html="info"></p>
      <!-- Rekursive Unterfragen direkt in das bestehende Panel setzen -->
      <Question
          v-for="subquestion in sub"
          :key="subquestion.id"
          :title="subquestion.title"
          :info="subquestion.info"
          :sub="subquestion.sub"
          class="subquestion"
      />
    </div>
  </article>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Question",
  props: {
    title: String,
    info: String,
    sub: Array, // `sub` sollte ein Array sein, falls mehrere Unterfragen existieren
  },
  setup() {
    const expanded = ref(false);

    return { expanded };
  },
};
</script>

<style scoped>
.question {
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: all 0.3s ease-in-out;
}

.question.expanded {
  border-color: var(""); /* Optional: Farbe ändern, wenn geöffnet */
}

.question h4 {
  text-transform: none;
  line-height: 1.5;
  cursor: pointer;
}

.question p {
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
}

.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  min-width: 2rem;
}

.content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
}

.question.expanded .content {
  max-height: 1000px; /* Sehr großer Wert, damit Inhalt sichtbar wird */
  opacity: 1;
}

.subquestion {
  margin-left: 1rem;
  border-left: 2px solid var(--clr-grey-special);
  padding-left: 1rem;
}
</style>
