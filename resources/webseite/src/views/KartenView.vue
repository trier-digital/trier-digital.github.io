<template>
  <div class="slider-container">
    <vue-slider
      v-model="value"
      :adsorb="true"
      :data="years"
      :marks="true"
      :tooltip-placement="'bottom'"
      width="700px"
      height="13px"
      @change="updateCards"
    ></vue-slider>

    <!-- Bereich zum Anzeigen der Karten und Metadaten -->
    <div v-if="selectedDecadeCards.length > 0" class="cards-container">
      <h3>Karten für das Jahrzehnt {{ value }}</h3>
      <div v-for="(card, index) in selectedDecadeCards" :key="index" class="card-item">
        <div class="card-image">
          <iframe :src="card.url" width="200" height="150" frameborder="0"></iframe>
        </div>
        <div class="card-info">
          <p><strong>Name:</strong> {{ card.name }}</p>
          <p><strong>Jahr:</strong> {{ card.year }}</p>
          <p><strong>Kommentar:</strong> {{ card.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Importiere den Slider
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'; // Importiere das Stylesheet für den Slider

export default {
  components: {
    VueSlider
  },
  data() {
    return {
      value: 1890, // Anfangswert des Sliders
      years: [1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980], // Liste der Jahre für den Slider
      cardsByDecade: {
        1890: [
          { url: '../../../assets/maps/Trier 1911 Kaiser-Wilhelm-Brücke LL/index.html', name: 'Trier 1911', year: 1911, comment: 'Brücke und Umgebung' },
          { url: '/assets/maps/Trier 1916 LL/index.html', name: 'Trier 1916', year: 1916, comment: 'Luftaufnahme von Trier' },
          { url: '/assets/maps/Trier 1919 Luftaufnahme LL/index.html', name: 'Trier 1919', year: 1919, comment: 'Luftbild aus dem Jahr 1919' }
        ],
        1900: [
          { url: '1900_map.html', name: 'Trier 1900', year: 1900, comment: 'Kartenansicht von 1900' },
          { url: '1900_map1.html', name: 'Trier 1900 (2)', year: 1900, comment: 'Detaillierte Karte von 1900' }
        ],
        1910: [
          { url: '/assets/maps/Trier 1891 LL/index.html', name: 'Trier 1891', year: 1891, comment: 'Luftaufnahme von 1891' },
          { url: '1910_map3.html', name: 'Trier 1910', year: 1910, comment: 'Kartenansicht von 1910' }
        ],
        1920: [
          { url: 'assets/maps/Trier 1920 LL/index.html', name: 'Trier 1920', year: 1920, comment: 'Kartenansicht von 1920' }
        ],
        1930: [
          { url: 'assets/maps/Trier 1934 LL/index.html', name: 'Trier 1934', year: 1934, comment: 'Stadtansicht von 1934' },
          { url: 'assets/maps/Trier 1936 LL/index.html', name: 'Trier 1936', year: 1936, comment: 'Karte von 1936' }
        ],
        1940: [],
        1950: [],
        1960: [],
        1970: [],
        1980: []
      },
      selectedDecadeCards: [] // Karten für das ausgewählte Jahrzehnt
    };
  },
  methods: {
    // Diese Methode wird aufgerufen, wenn der Slider sich ändert
    updateCards() {
      // Wähle die Karten aus, die zum ausgewählten Jahrzehnt passen
      this.selectedDecadeCards = this.cardsByDecade[this.value] || [];
    }
  },
  created() {
    // Initialisieren der Karten für das erste Jahrzehnt
    this.updateCards();
  }
};
</script>
<style scoped>
/* Setze den Slider in die Mitte der Seite */
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Höhe der Seite */
  width: 100%;
  background-color: #f0f0f0; /* Optional: Hintergrundfarbe */
}

/* Anpassungen für den Slider */
.vue-slider {
  width: 80%; /* Setze eine Breite für den Slider */
}
.vue-slider .vue-slider-mark {
  transform: translateX(-50%) scale(0.9); /* Kleinere Markierungen */
  font-size: 12px; /* Kleinere Schrift für die Jahre */
}

.vue-slider .vue-slider-mark-active {
  background-color: #2d87f0; /* Markiere aktive Markierungen */
}

/* Styles für die Kartenliste */
.cards-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-item {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.card-image {
  margin-right: 15px;
}

.card-info p {
  margin: 5px 0;
}
</style>
