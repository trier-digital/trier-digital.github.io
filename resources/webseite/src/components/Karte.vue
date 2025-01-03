<template>
  <section id="qgis_demo" class="demo_section">
    <!-- Container für Karte und Metadaten nebeneinander -->
    <div class="map-container">
      <!-- Buttons für den Wechsel zwischen den Karten -->
      <div class="map-buttons">
        <button @click="switchTo2D">2D Karte</button>
        <button @click="switchTo3D">3D Karte</button>
      </div>

      <!-- Container für Karte und Metadaten nebeneinander -->
      <div class="content">
        <!-- Karte -->
        <div class="leaflet-container">
          <iframe
            v-if="is2D"
            width="100%"
            height="500"
            :src="map2DPath"
            frameborder="0"
          ></iframe>
          <iframe
            v-if="!is2D"
            width="100%"
            height="500"
            :src="map3DPath"
            frameborder="0"
          ></iframe>
        </div>

        <!-- Metadaten -->
        <div class="metadata">
          <h3>Metadaten</h3>
          <ul>
            <li><strong>Jahr:</strong> 1916</li>
            <li><strong>Name:</strong> Trier Karte 1916</li>
            <li><strong>Autor:</strong> Max Mustermann</li>
            <li><strong>Links:</strong>
              <ul>
                <li><a href="https://www.example.com" target="_blank">Link zur Karte</a></li>
              </ul>
            </li>
            <li><strong>Beschreibung:</strong> Eine historische Karte von Trier aus dem Jahr 1916, die detaillierte Informationen zur Stadt zeigt.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Karte',
  data() {
    return {
      // Pfade zu den Karten
      map2DPath: '/assets/maps/Trier_1916_LL/index.html',
      map3DPath: '/assets/maps/Trier_1916_3D/index.html',
      // Flag, um zwischen 2D und 3D umzuschalten
      is2D: true
    };
  },
  methods: {
    // Methode zum Wechseln auf die 2D-Karte
    switchTo2D() {
      this.is2D = true;
    },
    // Methode zum Wechseln auf die 3D-Karte
    switchTo3D() {
      this.is2D = false;
    }
  }
};
</script>

<style scoped>
/* Gesamter Container für Karte und Metadaten */
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Höhe des Viewports */
  padding: 20px;
}

/* Buttons für den Wechsel zwischen den Karten */
.map-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.map-buttons button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.map-buttons button:hover {
  background-color: #e0e0e0;
}

/* Container für die Karte und die Metadaten nebeneinander */
.content {
  display: flex;
  flex-direction: row; /* Karte und Metadaten nebeneinander */
  align-items: flex-start;
  gap: 30px; /* Abstand zwischen Karte und Metadaten */
  max-width: 1000px; /* Maximale Breite für den Container */
  width: 100%;
  margin-top: 20px;
}

/* Karte (Iframe) */
.leaflet-container {
  width: 100%;
  max-width: 800px; /* Maximale Breite für das Iframe */
  height: 500px;
  border: none;
}

/* Metadaten */
.metadata {
  width: 300px; /* Breite für die Metadaten-Box */
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.metadata h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.metadata ul {
  list-style-type: none; /* Entfernt die Standard-Punkte */
  padding: 0;
  margin: 0; /* Kein Abstand um das ul-Element */
}

.metadata li {
  margin-bottom: 10px; /* Abstand zwischen den Listenelementen */
}

.metadata li ul {
  padding-left: 20px; /* Einrückung der verschachtelten Liste */
}

.metadata a {
  color: #007bff;
  text-decoration: none;
}

.metadata a:hover {
  text-decoration: underline;
}

/* Responsives Design: Wenn der Bildschirm kleiner wird, passen sich die Elemente an */
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* Bei kleineren Bildschirmen untereinander */
    align-items: center;
  }

  .leaflet-container {
    width: 100%;
    height: 400px;
  }

  .metadata {
    width: 100%;
    margin-top: 20px;
  }
}
</style>