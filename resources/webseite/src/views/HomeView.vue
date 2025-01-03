<template>
        <!-- Page Title -->
        <div class="page-title dark-background">
        <div class="container position-relative">
          <h1>Trier digital</h1>
          <h2>Wandel sichtbar machen.</h2>
        </div>
      </div><!-- End Page Title -->
  <BilderCarousel />
</template>

<script>
// @ is an alias to /src
import BilderCarousel from '@/components/BilderCarousel.vue';

export default {
  name: 'HomeView',
  components: {
    BilderCarousel
  }
}
</script>
