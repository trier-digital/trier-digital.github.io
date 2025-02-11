<template>
  <article class="question">
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
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
          ></path>
        </svg>
        <svg
            v-show="!expanded"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </header>
    <div :style="contentStyle" class="content">
      <div :style="infoStyle" class="info">
        <div v-html="info"></div>
      </div>
      <div :style="infoStyle" class="info">
        <div v-if="sub" class="mt-5">
          <Question
              v-for="subquestion in sub"
              :key="subquestion.id"
              :title="subquestion.title"
              :info="subquestion.info"
              :sub="subquestion.sub"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: "Question",
  props: {
    title: String,
    info: String,
    sub: Array,
  },
  setup() {
    const expanded = ref(false);
    const contentStyle = computed(() => {
      return {"max-height": expanded.value ? "2000px" : 0};
    });

    const infoStyle = computed(() => {
      return {opacity: expanded.value ? 1 : 0};
    });

    return {expanded, contentStyle, infoStyle};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.question {
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
}

.question h4 {
  text-transform: none;
  line-height: 1.5;
  z-index: 10;
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

.question header h4 {
  margin-bottom: 0;
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
  align-self: center;
  min-width: 2rem;
  z-index: 1;
}

.question-title {
  cursor: pointer;
}

.content {
  max-height: 0;
  transition: max-height 0.4s ease-out;
}

.info {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease-out;
}
</style>