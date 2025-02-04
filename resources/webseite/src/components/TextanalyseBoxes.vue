<script>

export default {
  name: "TextanalyseBoxes",
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  data() {
    return {
      links: [
        [
          "assets/img/Auswertung Rathauszeitung - Rebecca/Theater_Trier_Germany.jpg",
          "/textanalyse/theater"
        ],
        [
          "assets/img/Auswertung Rathauszeitung - Rebecca/Trier_Zurmaiener_Strasse_114_2.jpg",
          "/textanalyse/exhaus"
        ],
        [
          "assets/img/trier/LandesarchivBW/Dom_Aussenansicht_Marktplatz.jpg",
          "/textanalyse/dom"
        ]
      ]
    }
  }
}
</script>

<template>
  <div id="featured-services" class="featured-services">
    <div class="container">

        <div class="row gy-2 mb-4 justify-content-center">

            <!-- Item 1 -->
            <div class="col-lg-3 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div class="service-item item-red position-relative zoom d-flex flex-column justify-content-between">
                    <img :src="links[0][0]" alt="placeholder" class="rounded-3"/>
                    <div>
                        <hr class="border-opacity-50 my-3"/>
                        <router-link @click.native="scrollToTop" :to="links[0][1]" class="page-link">Theater</router-link>
                    </div>
                </div>
            </div>
            <!-- End Item 1 -->

            <!-- Item 2 -->
            <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <div class="service-item item-orange position-relative zoom d-flex flex-column justify-content-between">
                    <img :src="links[1][0]" alt="placeholder" class="rounded-3"/>
                    <div>
                        <hr class="border-opacity-50 my-3"/>
                        <router-link @click.native="scrollToTop" :to="links[1][1]" class="page-link">Exhaus</router-link>
                    </div>
                </div>
            </div>
            <!-- End Item 2 -->

            <!-- Item 3 -->
            <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div class="service-item item-teal position-relative zoom d-flex flex-column justify-content-between">
                    <div class="image-container">
                        <img :src="links[2][0]" alt="placeholder" class="rounded-3 image-resize"/>
                    </div>
                    <div>
                        <hr class="border-opacity-50 my-3"/>
                        <router-link @click.native="scrollToTop" :to="links[2][1]" class="page-link">Dom</router-link>
                    </div>
                </div>
            </div>
            <!-- End Item 3 -->
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

.image-resize {
  max-height: 170px; /* Maximale Höhe des Bildes */

  object-fit: contain; /* Sicherstellen, dass das Bild ohne Verzerrung angezeigt wird */
}
.image-container {
  width: 100%;
  height: 170px;
  overflow: hidden; /* Verhindert, dass das Bild über den Container hinausgeht */
  border-radius: 15px; /* Rundet die Ecken des Containers */
}
</style>