<script>
import test from '@/assets/img/svg/placeholder.svg'

export default {
  name: "HomeBoxes",
  data() {
    return {
      test,
      links: [
        [
          "assets/img/trier/Wikimedia Bilder/Trier_Hauptmarkt.jpg",
          "bildergalerie"
        ],
        [
          "assets/maps/Vorschaubilder/Trier 1894 LL_vorschau.jpg",
          "karten"
        ],
        [
          "assets/img/diskurs/Rathauszeitung.jpg",
          "diskurs"
        ]
      ]
    }
  }
}
</script>

<template>
  <div id="featured-services" class="featured-services">

    <div class="container">
      <div class="row gy-3 mb-4 justify-content-center">
        <div class="col-lg-3 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200"
             data-aos-duration="1000">
          <div class="service-item item-red position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="links[0][0]" alt="placeholder" class="rounded-3"/>
            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[0][1]" class="page-link">Historische Bilder</router-link>
            </div>
          </div>
        </div>
        <!-- End Item 1 -->

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <div class="service-item item-orange position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="links[1][0]" alt="placeholder" class="rounded-3"/>
            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[1][1]" class="page-link">Historische Karten</router-link>
            </div>
          </div>
        </div>
        <!-- End Item 2 -->
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="service-item item-teal position-relative zoom d-flex flex-column justify-content-between">
            <div></div>

            <img :src="links[2][0]" alt="placeholder" class="rounded-3"/>

            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[2][1]" class="page-link">Politischer Diskurs</router-link>
            </div>
          </div>
        </div>
        <!-- End Item 3 -->
        <!-- End Row 1 -->
      </div>
    </div>
  </div>

</template>

<style scoped>
.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.05);
}

.service-item img {
  object-fit: cover; /* Bild füllt den Container aus */
  height: 200px; /* Alle Bilder haben die gleiche Höhe */
  width: 100%;
}

</style>