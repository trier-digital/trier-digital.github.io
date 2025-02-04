<template>
    <section class="counter-section">
        <div class="counter-box">
        <span class="counter" id="maps" :data-target="maps" v-text="maps"></span>
        <p>Karten</p>
      </div>
      <div class="counter-box">
        <span class="counter" id="photos" :data-target="photos" v-text="photos"></span>
        <p>Fotos</p>
      </div>
      <div class="counter-box">
        <span class="counter" id="pages of text" :data-target="texts" v-text="text"></span>
        <p>Analysierte Texte</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Counter',
    data() {
      return {
        photos: 64,
        maps: 16,
        texts: 4642,
      };
    },
    mounted() {
      // Die Zähler werden beim Laden der Komponente animiert
      this.animateCounter('photos', 64);
      this.animateCounter('maps', 16);
      this.animateCounter('text', 4642);
    },
    methods: {
      animateCounter(counterName, target) {
        let currentValue = 0;
        const increment = target / 200;
  
        const updateCounter = () => {
          if (currentValue < target) {
            currentValue += increment;
            this[counterName] = Math.ceil(currentValue);
            setTimeout(updateCounter, 1);
          } else {
            this[counterName] = target;
          }
        };
  
        updateCounter();
      },
    },
  };
  </script>
  
  <style scoped>
  .counter-section {
    display: flex;
    justify-content: center; /* Zentriert die Zähler */
    align-items: center;
    gap: 40px; /* Fügt einen kleinen Abstand zwischen den Zählern hinzu */
    padding: 20px;
  }
  
  .counter-box {
    text-align: center;
    width: 300px; /*Breite der Boxen */
    background-color: var(--surface-color);
  }
  
  .counter {
    font-size: 2rem;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    color: var(--accent-color);
  }
  
  .counter-box p {
    font-size: 1rem;
    margin: 0;
  }
  </style>  