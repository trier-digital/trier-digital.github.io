<script>
import emo_pie from '@/assets/img/svg/sentiment/emotion_pie_chart.svg'
const root = "assets/img/svg/sentiment/"

export default {
  name: "SentimentBoxes",
  data() {
    return {
      test: emo_pie,
      links: [
        [
          root + "emotion_pie_chart.svg",
          "/sentiment/emodist"
        ],
        [
          root + "parteiname_emotion_distribution.svg",
          "/sentiment/emodistpartei"
        ],
        [
          root + "interactive_emotion_chart.svg",
          "/sentiment/emodistprozent"
        ],
        [
          root + "wordcloud_(BSP-Datei).svg",
          "/sentiment/emowort"
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
        <div class="col-lg-3 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="service-item item-red position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="test" alt="placeholder" class="rounded-3"/>
            <div>
            <hr class="border-opacity-50 my-3"/>
            <router-link :to="links[0][1]" class="page-link">Verteilung der Emotionen</router-link>
          </div></div>
        </div>
        <!-- End Item 1 -->

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <div class="service-item item-orange position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="links[1][0]" alt="placeholder" class="rounded-3"/>
            <div>
            <hr class="border-opacity-50 my-3"/>
            <router-link :to="links[1][1]" class="page-link">Emotionsverteilung pro Partei</router-link>
          </div></div>
        </div>
        <!-- End Item 2 -->
      </div>
      <!-- End Row 1 -->
      <div class="row gy-2 justify-content-center">
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="service-item item-teal position-relative zoom d-flex flex-column justify-content-between">
            <div></div>

            <img :src="links[2][0]" alt="placeholder" class="rounded-3"/>

            <div>
            <hr class="border-opacity-50 my-3"/>
            <router-link :to="links[2][1]" class="page-link">Prozentuale Emotionsverteilung</router-link>
          </div></div>
        </div>
        <!-- End Item 3 -->
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <div class="service-item item-red position-relative zoom d-flex flex-column justify-content-between">
            <div class=""></div>


            <img :src="links[3][0]" alt="placeholder" class="rounded-3"/>

              <div>
            <hr class="border-opacity-50 my-3"/>
            <router-link :to="links[3][1]" class="page-link">Wörter hinter den Emotionen</router-link>
          </div></div>
          <!-- End Item 4 -->
        </div>
        <!-- End Row 2 -->
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
</style>