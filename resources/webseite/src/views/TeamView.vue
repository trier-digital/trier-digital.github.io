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
    <img src="assets/img/team/team.jpg" class="img-fluid" alt="">
  </div>
  <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
    <p>
      Das Projekt Trier digital – Wandel sichtbar machen wurde im Rahmen des Masterstudiengangs Digital Humanities an der Universität Trier von elf Studierenden entwickelt. Unter der fachkundigen Betreuung von Dr. Joëlle Weis und Dr. Élodie Ripoll vereinen wir unterschiedliche geistes-, sprach-, kultur- und informationswissenschaftliche Perspektiven, um den Wandel der Stadt Trier aus einer breiten, interdisziplinären Sichtweise zu beleuchten.
    </p>
    <p>
      Unsere akademischen Hintergründe reichen von Literatur-, Sprach- und Kulturwissenschaften über Museologie, Translationswissenschaften, Philosophie, Psychologie und Geschichte bis hin zur Informatik. Diese interdisziplinäre Vielfalt ermöglicht es uns, das Projekt aus unterschiedlichen Blickwinkeln zu gestalten und spiegelt die Kernidee der Digital Humanities wider: die Verbindung von Technologie und Geisteswissenschaften zur Erschließung neuer Perspektiven.
    </p>
  </div>
</div>

</div>

</section><!-- /About Section -->

  <Team />




</template>

<script>
// @ is an alias to /src
import Team from '@/components/Team.vue';

export default {
name: 'TeamView',
components: {
Team
}
}
</script>