<template>
    <div class="about">
      <h1>This is a Karten page</h1>
    </div>
  <Karte />
    
  </template>

<script>
// @ is an alias to /src
import Karte from '@/components/Karte.vue';

export default {
  name: 'KartenView',
  components: {
    Karte
  }
}
</script>