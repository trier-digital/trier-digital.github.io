<script>
import test from '@/assets/img/svg/placeholder.svg'
const root = "assets/img/svg/sentiment/"

export default {
  name: "DiskursBoxes",
  data() {
    return {
      test,
      links: [
        [
          root + "emotion_pie_chart.svg",
          "/sentiment"
        ],
        [
          root + "parteiname_emotion_distribution.svg",
          "topics"
        ],
        [
          root + "interactive_emotion_chart.svg",
          "textanalyse"
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
        <div class="col-lg-3 col-md-6 align-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="service-item item-red position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="test" alt="placeholder" class="rounded-3"/>
            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[0][1]" class="page-link">Sentiment Analysis</router-link>
            </div></div>
        </div>
        <!-- End Item 1 -->

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <div class="service-item item-orange position-relative zoom d-flex flex-column justify-content-between">
            <div></div>
            <img :src="test" alt="placeholder" class="rounded-3"/>
            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[1][1]" class="page-link">Topicmodeling</router-link>
            </div></div>
        </div>
        <!-- End Item 2 -->
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <div class="service-item item-teal position-relative zoom d-flex flex-column justify-content-between">
            <div></div>

            <img :src="test" alt="placeholder" class="rounded-3"/>

            <div>
              <hr class="border-opacity-50 my-3"/>
              <router-link :to="links[2][1]" class="page-link">Rathaus Auswertung</router-link>
            </div></div>
        </div>
        <!-- End Item 3 -->
      </div>
      <!-- End Row 1 -->
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