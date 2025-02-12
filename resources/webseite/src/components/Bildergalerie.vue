<template>
  <!--div id="app">
    <div class="menu"-->
    
  <section id="portfolio" class="portfolio section">
    <div class="container">
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters">
        <li @click="filter('all', selectedCat2)" :class="{ selected: selectedCat1 === 'all' }">
        Alle
      </li>
      <li
        v-for="(category, index) in categories1"
        :key="index"
        @click="filter(category, selectedCat2)"
        :class="{ selected: selectedCat1 === category }"
      >
        {{ category }}
      </li>
      </ul>
      </div>



    <!--Zweiter Filter-->
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters">
        <li @click="filter(selectedCat1, 'all')" :class="{ selected: selectedCat2 === 'all' }">
        Alle
      </li>
      <li
        v-for="(category, index) in categories2"
        :key="index"
        @click="filter(selectedCat1, category)"
        :class="{ selected: selectedCat2 === category }"
      >
        {{ category }}
      </li>
      </ul>
      </div>




    
    <div class="container">
    <div ref="masonryGrid" class="row gy-4 isotope-container"> <!--Sorgt für die Reihen-->
    <div
      v-for="(preview, index) in filteredPreviews"
      :key="index"
      :class="['col-lg-4 col-md-6 portfolio-item isotope-item', preview.cat1]"
    >
    <div class="portfolio-content h-100">
      <img :src="preview.src" class="img-fluid" :alt="'Image in category ' + preview.cat1" />
      <div class="portfolio-info">
            <h4>{{ preview.date }}</h4>
            <a :href="preview.src" :title="preview.ort" :data-title="`${preview.ort} <br> <b>Lizenz:</b> ${preview.licence} <br> <b>Urheber:</b> ${preview.urheber}`" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
              <i class="bi bi-zoom-in"></i>
            </a>
            <router-link :to="`/bildergalerie/${getOriginalIndex(index)}`" title="Mehr Details" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </router-link>
        </div>
        <div class="caption">{{ preview.ort }}</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

//Für Galerie-Funktionalitäten
import GLightbox from 'glightbox'; // Importiere GLightbox
import 'glightbox/dist/css/glightbox.css'; // Importiere das CSS für GLightbox

import Masonry from "masonry-layout"; //Importiere Masonry-Layout für Bilder

//Bilder-JSON-Datei laden
import imageData from '../../public/assets/json/bilder_metadata.json';


export default defineComponent({
  name: "Bildergalerie",
  data() {
    return {
      categories1: ["Vor 1900", "1900-1920", "1920-1940", "1940-1960", "1960-1980", "1980-heute"],
      categories2: ["Porta Nigra", "Hauptmarkt", "Dom", "Hauptbahnhof", "Tuchfabrik", "Römerbrücke", "Basilika"],
      previews: imageData,
      selectedCat1: "all",
      selectedCat2: "all",
    };
  },
  computed: {
  filteredPreviews() {
    return (this.selectedCat1 === "all" && this.selectedCat2 === "all")
      ? this.previews
      : this.previews.filter((preview) => {
          const matchesCat1 = this.selectedCat1 === "all" || preview.cat1 === this.selectedCat1;
          const matchesCat2 = this.selectedCat2 === "all" || preview.cat2 === this.selectedCat2;
          
          // Prüfen, ob Kategorien existieren
          const cat1Exists = preview.cat1 !== undefined && preview.cat1 !== null;
          const cat2Exists = preview.cat2 !== undefined && preview.cat2 !== null;
          
          return (
            (matchesCat1 && (cat1Exists || this.selectedCat1 === "all")) &&
            (matchesCat2 && (cat2Exists || this.selectedCat2 === "all"))
          );
        });
  },
},
  mounted() {
    // Initialisiere GLightbox, wenn die Komponente gemountet wird (für Galerie-Anzeige, wenn man auf ein Bild klickt)
    const lightbox = GLightbox({
      selector: '.glightbox' // GLightbox auf alle Elemente mit der Klasse .glightbox anwenden
    });
    //Mosaik-Layout der Bilder
    this.initMasonryWhenImagesLoaded();
  },
  methods: {
    getOriginalIndex(filteredIndex) { //um Unterseiten (Detailansicht) richtig zuzuordnen, auch wenn Filter aktiv sind
    // Suche das Element im Originalarray und gib den Index zurück
    return this.previews.indexOf(this.filteredPreviews[filteredIndex]);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    initMasonry() {
      const grid = this.$refs.masonryGrid; // Vue 3 verwendet $refs für DOM-Zugriff
      if (!grid) return;

      this.msnry = new Masonry(grid, {
        itemSelector: ".portfolio-item",
        columnWidth: ".portfolio-item",
        percentPosition: true,
      });
    },
    initMasonryWhenImagesLoaded() {
      const grid = this.$refs.masonryGrid;
      if (!grid) return;

      const images = grid.querySelectorAll("img");
      let loadedImages = 0;

      if (images.length === 0) {
        this.initMasonry();
        return;
      }

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              this.initMasonry();
            }
          };
          img.onerror = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              this.initMasonry();
            }
          };
        }
      });

      if (loadedImages === images.length) {
        this.initMasonry();
      }
    },
    filter(category1 = "all", category2 = "all") {
      this.selectedCat1 = category1;
      this.selectedCat2 = category2;

      this.$nextTick(() => {
        this.initMasonryWhenImagesLoaded();
      });
    },
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

/* Momentan ausgewählte Kategorie sichtbarer machen */
.portfolio-filters li.selected {
  color: var(--accent-color);
  font-weight: bold;  /* Optional: Fett gedruckter Text */
}





@keyframes appear {
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>






















