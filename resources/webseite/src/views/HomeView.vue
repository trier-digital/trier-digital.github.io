<template>
  <Hero></Hero>
  <div id="home-container" class="home-container">
    <Counter/>
    <div>
      <Intro></Intro>
      <HomeBoxes></HomeBoxes>
      <div class="d-flex flex-row justify-content-center">
        <Carousel :cardata="imageLinks" indicators size="w-50 pt-5" class="border border-dark carousel-fixed-height"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import HomeBoxes from "@/components/HomeBoxes.vue";
import Carousel from '@/components/Carousel.vue';

import imageData from '../../public/assets/json/bilder_metadata.json';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Hero,
    Intro,
    Counter,
    HomeBoxes,
    Carousel
  },
  data() {
    return {
      images: imageData, // Importiere die JSON-Bild-Daten
      imageLinks: [] //Array nur für src der Bilder
    };
  },
  created() {
    // Wähle beim Laden der Komponente zufällige Bilder aus
    this.getRandomImages();
  },
  methods: {
    // Methode, um drei zufällige Bilder auszuwählen
    getRandomImages() {
      const shuffled = [...this.images]; // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
      shuffled.sort(() => Math.random() - 0.5); // Mische das Array zufällig
      this.imageLinks = shuffled.slice(0, 3).map(image => image.src); // Nimm die ersten drei Elemente und extrahiere nur die `src`-Eigenschaft
    }
  },
  watch: {
  // Reagiere auf Änderungen der `images` oder `id`, um die zufälligen Bilder neu zu laden
  images() {
    this.getRandomImages();
  }
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

.carousel-fixed-height {
  height: 400px; /* Feste Höhe für den Rahmen */
}
.carousel-fixed-height img {
  max-height: 600px; /* Verhindert riesige Bilder */
  width: auto;
}

</style>