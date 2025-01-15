<template>
    <div class="slider-container">
    <div class="row justify-content-center mt-5">
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
    </div>
    </div>
    
    <div class="row">
      <div class="col-3">
      <!-- Bereich zum Anzeigen der Karten und Metadaten -->
        <div v-if="selectedDecadeCards.length > 0" class="cards-container">
          <h3>Karten für das Jahrzehnt ab {{ value }}</h3>
          <div v-for="(card, index) in selectedDecadeCards" :key="index" class="card-item" @click="selectCard(card)">
            <div class="card-image">
              <iframe :src="card.url" width="200" height="150" frameborder="0"></iframe>
            </div>
            <div class="card-info">
              <p><strong>Name:</strong> {{ card.name }}</p>
              <p><strong>Jahr:</strong> {{ card.year }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Keine Karten verfügbar für das Jahrzehnt {{ value }}</p>
        </div>
      </div>
      <div class="col-9">
        <div class="cards-container" v-if="selectedCard">
          <h3>{{ selectedCard.name }}</h3>
          <iframe 
            :src="selectedCard.url" 
            width="60%" 
            height="600px" 
            frameborder="0"
          ></iframe>
        </div>
        <div v-else>
          <p>Wählen Sie eine Karte aus, um sie anzuzeigen.</p>
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
        { url: 'assets/maps/Trier 1891 LL/index.html', name: 'Trier 1891', year: 1891},
        { url: 'assets/maps/Trier 1894 LL/index.html', name: 'Trier 1894', year: 1894}
        ],
        1900: [
        ],
        1910: [
        { url: '/assets/maps/Trier 1911 Kaiser-Wilhelm-Brücke LL/index.html', name: 'Trier 1911', year: 1911},
        { url: '/assets/maps/Trier 1916 LL/index.html', name: 'Trier 1916', year: 1916},
        { url: '/assets/maps/Trier 1919 Luftaufnahme LL/index.html', name: 'Trier 1919', year: 1919}
        ],
        1920: [
        ],
        1930: [
          { url: '/assets/maps/Trier 1934 LL/index.html', name: 'Trier 1934', year: 1934},
          { url: '/assets/maps/Trier 1936 LL/index.html', name: 'Trier 1936', year: 1936},
          { url: '/assets/maps/Messtichblatt 1936 LL/index.html', name: 'Trier 1936 Messtichblatt', year: 1936},
          { url: '/assets/maps/Trier Messtischblatt 1939 LL/index.html', name: 'Trier 1939', year: 1939}
        ],
        1940: [
        { url: 'assets/maps/Trier 1945 LL/index.html', name: 'Trier 1945', year: 1945}
        ],
        1950: [
          { url: '/assets/maps/Index Trier 1953 LL/index.html', name: 'Trier 1953', year: 1953},
          { url: 'assets/maps/Trier Bollmann 1953 LL/index.html', name: 'Trier Bollmann 1953', year: 1953}
        ],
        1960: [],
        1970: [],
        1980: []
      },
      selectedDecadeCards: [], // Karten für das ausgewählte Jahrzehnt
      selectedCard: null // Die aktuell ausgewählte Karte
    };
  },
  methods: {
    // Diese Methode wird aufgerufen, wenn der Slider sich ändert
    updateCards() {
      this.$nextTick(() => {
      // Wähle die Karten aus, die zum ausgewählten Jahrzehnt passen
      this.selectedDecadeCards = this.cardsByDecade[this.value] || [];
    });
    },
  // Diese Methode wird aufgerufen, wenn auf eine Karte geklickt wird
  selectCard(card) {
    this.selectedCard = card;
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
  height: 30vh; /* Höhe der Seite */
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
  background-color: red; /* Markiere aktive Markierungen */
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

.row {
  display: flex;
  justify-content: space-between;
}
</style>
