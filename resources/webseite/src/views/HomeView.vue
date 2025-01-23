<template>
  <Hero></Hero>
  <div id="home-container" class="home-container">
    <div class="home">
      <HelloWorld msg="Trier Digital" />
    </div>
    <div>
      <Intro></Intro>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Hero,
    Intro
  }
}
</script>

<style>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>