<template>
  <section id="portfolio" class="portfolio section">
    <div class="container">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <ul class="portfolio-filters isotope-filters">
          <li v-for="(option, index) in dropdown"
              :key="index">
            <select class="form-select" aria-label="Default select example" v-model="option.active">
              <option selected disabled>{{ option.category }}</option>
              <option v-for="(dropoption, index) in option.content" :value="dropoption">{{ dropoption }}</option>

            </select>

          </li>
        </ul>
      </div>

      <div v-if="filteredPreviews.length > 0">
        <img 
          :src="filteredPreviews[0].src" 
          alt="..."
          :width="width || undefined"
          :height="height || undefined"
        />
      </div>

    </div>
  </section>
</template>

<script>
import {defineComponent} from "vue";

//Für Galerie-Funktionalitäten
import GLightbox from 'glightbox'; // Importiere GLightbox
import 'glightbox/dist/css/glightbox.css'; // Importiere das CSS für GLightbox

export default defineComponent({
  name: "DropdownImage",
  /*data() {
    return {
      dropdown: {
        cat1: {
          category: "Partei",
          content: [
            "CDU", "SPD", "FDP"
          ],
          active: "Partei"
        },
        cat2: {
          category: "Emotion",
          content:
              [
                "Wut", "Angst", "Ekel"
              ],
          active: "Emotion"
        }
      },
      previews: [
        {
          src: "assets/img/svg/wordclouds/wordcloud_AFD_Angst.svg",
          cat1: "CDU",
          cat2: "Angst",
          date: "1899",
          ort: "Hauptmarkt",
          desc: "Hauptmarkt mit St. Gangolfkirche. Der Hauptmarkt in Trier im Jahr 1899, aufgenommen von Ferdinand Emmerich Laven. Scan einer Postkarte (1906 erstmals herausgegeben, 1914 gelaufen)",
          licence: "Public Domain, PD-US",
          urheber: "Ferdinand Emmerich Laven (*1849;+1922)",
          url: "https://commons.wikimedia.org/wiki/File:Trier_Hauptmarkt.jpg"
        }
      ],
      selectedCat:
          "all",
      selected:
          ""
    }
        ;
  },*/
  props:{
    dropdown: Object,
    previews: Object,
    width: String,
    height: String
    },
  computed: {
    filteredPreviews() {
      return this.previews.filter(
          (image) => image.cat1 === this.dropdown.cat1.active
      ).filter(
          (image) => image.cat2 === this.dropdown.cat2.active
      )
    },
  },
  mounted() {
    // Initialisiere GLightbox, wenn die Komponente gemountet wird (für Galerie-Anzeige, wenn man auf ein Bild klickt)
    const lightbox = GLightbox({
      selector: '.glightbox' // GLightbox auf alle Elemente mit der Klasse .glightbox anwenden
    });
  },
  methods: {
    filter(category) {
      this.selectedCat = category;
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  },
});
</script>

<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;
}

#app {
  background: #fff;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
  /*grid-gap: 10px;*/
  grid-template-columns: repeat(3, 1fr); /* Drei Spalten pro Zeile */
  grid-gap: 20px; /* Abstand zwischen den Bildern */
}

.preview {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
  animation: appear 0.5s ease-in-out forwards;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Zuschneiden, um das Bild in den Container einzupassen */
  border-radius: 4px; /*Runde Ecken */
}

.caption {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-top: 1px solid #ddd;
}

/*
.cat1 {
  background: gold;
}
.cat2 {
  background: #333;
}
.cat3 {
  background: #ddd;
}
  */

.menu {
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  flex-flow: wrap;
  margin: -5px -5px;
}
</style>