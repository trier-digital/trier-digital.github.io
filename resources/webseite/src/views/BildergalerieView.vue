<template>

    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Bildergalerie</h1>
    </div>
  </div><!-- End Page Title -->

<Bildergalerie />
</template>

<script>
// @ is an alias to /src
import Bildergalerie from '@/components/Bildergalerie.vue';

export default {
name: 'BildergalerieView',
components: {
Bildergalerie
}
}
</script>
