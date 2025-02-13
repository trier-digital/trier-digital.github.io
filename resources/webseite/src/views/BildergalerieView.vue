<template>

    <!-- Page Title -->
    <div class="">
    <div class="">
      <h1 class="page-title dark-background">Bildergalerie</h1>
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
