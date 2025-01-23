<template>

    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Bildergalerie</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav class="breadcrumbs">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Bildergalerie</li>
        </ol>
      </nav>
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
