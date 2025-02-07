<script>
import test from '@/assets/img/svg/placeholder.svg'

const root = "assets/topics/thumbnails/"

export default {
  name: "HomeBoxes",
  data() {
    return {
      test,
      links: [
        [
          root + "topic_overview.png",
          "sentiment"
        ],
        [
          root + "topic_party.png",
          "karten"
        ],
        [
          root + "topic_time.png",
          "topics"
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
              <router-link :to="links[0][1]" class="page-link">Topics im Überblick</router-link>
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
              <router-link :to="links[1][1]" class="page-link">Topicsverteilung pro Partei</router-link>
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
              <router-link :to="links[2][1]" class="page-link">Topics über die Zeit</router-link>
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
</style>