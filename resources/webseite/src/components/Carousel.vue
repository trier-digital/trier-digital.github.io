<template>
  <div id="carouselExampleCaptions" class="carousel slide carousel-dark">

    <!-- Bildelemente -->
    <div class="carousel-inner">
      <div v-for="(link, index) in cardata" :key="index">
        <div class="carousel-item" :class="{ active: index === 0 }">
          <img :src="link" class="d-block mx-auto" :class="size" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
    </div>

    <!-- Pfeile -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <!-- Indicators -->
    <div class="carousel-indicators">
      <div v-for="(link, index) in cardata" :key="index">
        <button type="button" data-bs-target="#carouselExampleCaptions" class="" :data-bs-slide-to="index"
                :class="{active: index === 0}"
                aria-current="true" aria-label="Slide 1"></button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Carousel',
  props: {
    cardata: Array,
    size: String,
  }
}
</script>

<style scoped>

.carousel-indicators {
  position: static;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>

