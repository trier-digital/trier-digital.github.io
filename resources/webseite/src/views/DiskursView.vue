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
    <div class="">
      <h1 class="page-title dark-background">Politischer Diskurs</h1>
    </div>
    <DiskursBoxes></DiskursBoxes>
  </div>
</template>