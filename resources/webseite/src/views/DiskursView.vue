<script>
import DiskursBoxes from "@/components/DiskursBoxes.vue";

export default {
  name: 'DiskursView',
  components: {
    DiskursBoxes
  }
}
</script>
<template>
  <div class="about">
    <h1 class="page-title">Übersicht Diskurs</h1>
    <DiskursBoxes></DiskursBoxes>
  </div>
</template>