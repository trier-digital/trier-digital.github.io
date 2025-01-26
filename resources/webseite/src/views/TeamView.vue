<template>
    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Team</h1>
    </div> 
    </div><!-- End Page Title -->

    <!-- Großes Team-Bild mit Text -->
    <section id="about" class="about section light-background">

  <div class="container">

  <div class="row gy-4">
    <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
      <img src="assets/img/about.jpg" class="img-fluid" alt="">
    </div>
    <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
      <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
      <p class="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
      </p>
    </div>
  </div>

</div>

</section><!-- /About Section -->

    <Team />
</template>

<script>
import Team from '@/components/Team.vue';

export default {
  name: "TeamView",
  components: {
    Team
  }
}

</script>