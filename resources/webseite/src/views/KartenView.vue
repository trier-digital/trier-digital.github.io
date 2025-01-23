<template>

    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Karten der Stadt Trier</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav class="breadcrumbs">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Karten der Stadt Trier</li>
        </ol>
      </nav>
    </div>
  </div><!-- End Page Title -->

    <div class="slider-container">
    <div class="row justify-content-center mt-5">
      <h5>Wählen Sie ein Jahrzehnt aus, um Karten anzuzeigen.</h5>
      <vue-slider
        v-model="value"
        :adsorb="true"
        :data="years"
        :marks="true"
        :tooltip-placement="'bottom'"
        width="700px"
        height="13px"
        @change="updateCards"
        dotOptions="[{
          disabled: true
        }, {
          disabled: true
        }]"
      ></vue-slider>
    </div>
    </div>
    
    <div class="row">
      <div class="col-3">
      <!-- Bereich zum Anzeigen der Karten und Metadaten -->
        <div v-if="selectedDecadeCards.length > 0" class="cards-container">
          <h3>Karten für das Jahrzehnt ab {{ value }}</h3>
          <div v-for="(card, index) in selectedDecadeCards" :key="index" class="card-item" @click="selectCard(card)"  style="cursor:pointer;">
            <div class="card-image">
              <img :src="card.preview" width="200" height="150" frameborder="0"></img>
            </div>
            <div class="card-info">
              <p><strong>Name:</strong> {{ card.name }}</p>
              <p><strong>Jahr:</strong> {{ card.year }}</p>
            </div>
          </div>
        </div>
        <div v-else class="cards-container">
          <p>Keine Karten verfügbar für das Jahrzehnt {{ value }}</p>
        </div>
      </div>

      <div class="col-5">
        <div class="cards-container" v-if="selectedCard">
          <h3>{{ selectedCard.name }}</h3>
          <iframe 
            :src="selectedCard.url" 
            width="100%" 
            height="600px" 
          ></iframe>
        </div>
        <div v-else class="cards-container">
          <p>Wählen Sie eine Karte aus, um sie anzuzeigen.</p>
        </div>
      </div>

      <div class="col-4" v-if="selectedCard">
        <div class="metadata-container" v-if="selectedCard">
          <p><strong>Name:</strong> {{ selectedCard.name }}</p>
          <p><strong>Jahr:</strong> {{ selectedCard.year }}</p>
          <p><strong>Kommentar:</strong> {{ selectedCard.comment }}</p>
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
        { url: 'assets/maps/Trier 1891 LL/index.html', name: 'Trier 1891', year: 1891, comment: 'Lorem ipsum dolor met',  preview: '/assets/maps/Vorschaubilder/Trier 1891 LL_vorschau.jpg'},
        { url: 'assets/maps/Trier 1894 LL/index.html', name: 'Trier 1894', year: 1894, comment: 'Lorem ipsum dolor met',  preview: '/assets/maps/Vorschaubilder/Trier 1894 LL_vorschau.jpg'}
        ],
        1900: [
        ],
        1910: [
        { url: '/assets/maps/Trier 1911 Kaiser-Wilhelm-Brücke LL/index.html', name: 'Trier 1911', year: 1911, comment: 'Lorem ipsum dolor met',  preview: '/assets/maps/Vorschaubilder/Trier 1911 Kaiser-Wilhelm-Brücke LL_vorschau.jpg'},
        { url: '/assets/maps/Trier 1916 LL/index.html', name: 'Trier 1916', year: 1916, comment: 'Lorem ipsum dolor met',  preview: '/assets/maps/Vorschaubilder/Trier 1916 LL_vorschau.jpg'},
        { url: '/assets/maps/Trier 1919 Luftaufnahme LL/index.html', name: 'Trier 1919', year: 1919, comment: 'Lorem ipsum dolor met',  preview: '/assets/maps/Vorschaubilder/Trier 1919 Luftaufnahme LL_vorschau.jpg'}
        ],
        1920: [
        ],
        1930: [
          { url: '/assets/maps/Trier 1934 LL/index.html', name: 'Trier 1934', year: 1934, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Trier 1934 LL_vorschau.jpg'},
          { url: '/assets/maps/Trier 1936 LL/index.html', name: 'Trier 1936', year: 1936, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Trier 1936 LL_vorschau.jpg'},
          { url: '/assets/maps/Messtichblatt 1936 LL/index.html', name: 'Trier 1936 Messtichblatt', year: 1936, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Messtichblatt 1936 LL_vorschau.jpg'},
          { url: '/assets/maps/Trier Messtischblatt 1939 LL/index.html', name: 'Trier 1939', year: 1939, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Trier Messtischblatt 1939 LL_vorschau.jpg'}
        ],
        1940: [
        { url: 'assets/maps/Trier 1945 LL/index.html', name: 'Trier 1945', year: 1945, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Trier 1945 LL_vorschau.jpg'}
        ],
        1950: [
          { url: '/assets/maps/Index Trier 1953 LL/index.html', name: 'Trier 1953', year: 1953, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Index Trier 1953 LL_vorschau.jpg'},
          { url: 'assets/maps/Trier Bollmann 1953 LL/index.html', name: 'Trier Bollmann 1953', year: 1953, comment: 'Lorem ipsum dolor met', preview: '/assets/maps/Vorschaubilder/Trier Bollmann 1953 LL_vorschau.jpg'}
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

/* Styles für die Kartenliste */
.cards-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.metadata-container {
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

h5{
  text-align: center;
}
</style>
