<template>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/assets/img/trier_beispielbild.jpg" class="d-block w-100" alt="test">
    </div>
    <div class="carousel-item">
      <img src="../../public/assets/img/trier_beispielbild.jpg" class="d-block w-100" alt="test">
    </div>
    <div class="carousel-item">
      <img src="../../public/assets/img/trier_beispielbild.jpg" class="d-block w-100" alt="test ">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


  </template>

  
  <script>
  export default {
    name: 'BilderCarousel'
  }


  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#carouselExample {
  max-width: 80%; /* Begrenzung der maximalen Breite auf 80% des Bildschirms */
  width: 100%; /* Passt sich an kleinere Bildschirme an */
  height: auto; /* Erhält das Seitenverhältnis */
  margin: 0 auto; /* Horizontal zentrieren */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Schatten hinzufügen */
}

/* Zentrieren des Carousels auf der Seite */
body {
  display: flex;
  justify-content: center; /* Horizontal zentrieren */
  align-items: center; /* Vertikal zentrieren */
  height: 100vh; /* Höhe des Viewports */
  margin: 0;
}

.carousel-inner img {
  width: 100%; /* Bild passt sich an die Breite des Containers an */
  height: auto;
}

/* Für kleine Bildschirme volle Breite */
@media (max-width: 768px) {
  #carouselExample {
    max-width: 100%;
  }
}
</style>

  