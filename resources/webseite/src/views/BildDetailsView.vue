<template>
  <!-- Page Title -->
  <div class="page-title dark-background">
  <div class="container position-relative">
    <h1>Bilddetails</h1>
  </div>
  </div><!-- End Page Title -->

  <!-- Portfolio Details Section -->
  <section id="portfolio-details" class="portfolio-details section">
  <div class="container">
    <div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper init-swiper">
          <div class="swiper-wrapper align-items-center">
            <img :src="image.src" class="img-fluid" :alt="image.ort" />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>{{ image.ort }}</h3>
          <ul>
            <li><strong>Datierung</strong>: {{ image.date }}</li>
            <li><strong>Lizenz</strong>: {{ image.licence }} <a :href="image.licenselink"><img :src="image.licensebadge"></a></li>
            <li><strong>Urheber</strong>: {{ image.urheber }}</li>
            <li><strong>URL</strong>: <a :href="image.url">URL</a></li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>Beschreibung</h2>
          <p>
            {{ image.desc }}
            </p>
        </div>
      </div>
    </div>

  </div>

</section><!-- /Portfolio Details Section -->

</template>

<script>
import imageData from '../../public/assets/json/bilder_metadata.json';

export default {
    props: ['id'],  // Hier empfangen wir die ID der Bilddetails
    name: 'BildDetailsView',
    data() {
      return {
      images: imageData // Importiere die JSON-Daten direkt in die Komponente
    };
    },
    computed: {
      image() {
        // Verwende die ID, um das entsprechende Bild zu finden
        return this.images[this.id];
      },
    },
  };
</script>
