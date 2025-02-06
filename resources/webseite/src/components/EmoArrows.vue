<script>
export default {
  name: "EmoArrows",
  props: {
    left: String,
    right: String
  }
}
</script>

<template>
  <div class="d-flex flex-row justify-content-between">
    <div class="d-flex flex-row justify-content-start">
      <div v-if="left" class="zoom">
        <router-link :to="left">
          <i class="bi bi-arrow-left-square-fill fs-1 zoom"/>
        </router-link>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-end">
      <div v-if="right" class="zoom">
        <router-link :to="right" class="">
          <i class="bi bi-arrow-right-square-fill fs-1"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.1);
}
</style>