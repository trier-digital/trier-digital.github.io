<template>
  <div id="app">
    <div class="menu">
      <button
        v-for="(category, index) in categories"
        :key="index"
        @click="filter(category)"
        :class="{ selected: selectedCat === category }"
      >
        {{ category }}
      </button>
      <button @click="filter('all')" :class="{ selected: selectedCat === 'all' }">
        All
      </button>
    </div>
    <div
      v-for="(preview, index) in filteredPreviews"
      :key="index"
      :class="'preview ' + preview.cat"
    >
      <img :src="preview.src" :alt="'Image in category ' + preview.cat" />
      <div class="caption">{{ preview.caption }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bildergalerie",
  data() {
    return {
      categories: ["cat1", "cat2", "cat3"],
      previews: [
      { src: "/assets/img/trier/Porta Nigra Platz_Stadtmuseum.png", cat: "cat1", caption: "Porta Nigra Platz" },
      { src: "/assets/img/trier/Railcars_at_Trier_Hauptbahnhof,_in_1945_(314837028).jpg", cat: "cat1" },
      { src: "/assets/img/trier/Reserve-Lazarett.jpg", cat: "cat2" },
      { src: "/assets/img/trier/Trier_Hauptmarkt.jpg", cat: "cat2" },
      { src: "/assets/img/trier/Trier_Palastkas.jpg", cat: "cat3" },
      { src: "/assets/img/trier/Trier_Viehmarktbrunnen.jpg", cat: "cat3" },
      ],
      selectedCat: "all",
    };
  },
  computed: {
    filteredPreviews() {
      return this.selectedCat === "all"
        ? this.previews
        : this.previews.filter((preview) => preview.cat === this.selectedCat);
    },
  },
  methods: {
    filter(selection) {
      this.selectedCat = selection;
    },
  },
  mounted() {
    // Shuffle die Previews nach dem Mount
    this.previews = this.shuffle(this.previews);
  },
  methods: {
    filter(category) {
      this.selectedCat = category;
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
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

button {
  cursor: pointer;
  margin: 5px 5px;
  border: 0;
  padding: 5px 10px;
  background: #ddd;
  border: 1px solid #ddd;
  transition: 0.3s ease-in-out;
  transition-property: background, border, color;
}

button.selected {
  background: #fff;
  color: #333;
  border: 1px solid #333;
}

button:focus {
  outline: none;
}

button:hover {
  color: #fff;
  background: #333;
  border: 1px solid #333;
}

@keyframes appear {
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>
