<script>
import Questions from "@/components/Questions.vue";

import {reactive} from "vue";
import data from "@/assets/data/methoden";

export default {
  name: "App",
  components: {
    Questions,
  },
  setup() {
    const questions = reactive(data);

    return {questions};
  },
};
</script>

<template>
  <h1 class="page-title dark-background">Methoden</h1>
  <div class="container">
    <div class="mt-5">
      <h2>Methoden der Digital Humanities</h2>
      <p>
        Das Projekt „Trier Digital“ verfolgt das Ziel, neue Perspektiven auf das Thema Stadtentwicklung aufzuzeigen -
        nicht zuletzt durch die Kombination geisteswissenschaftlicher Fragestellungen mit verschiedenen
        computergestützten Methoden. Damit repräsentiert es den Kerngedanken der Digital Humanities:
      </p>
      <p>
        Die vielfältigen digitalen Herangehensweisen dieser Disziplin ermöglichen es, geisteswissenschaftliche
        Forschungsfragen neu zu denken. Für weitere Einblicke in die Digital Humanities ist auch ein Blick auf
        <a href="https://whatisdigitalhumanities.com">whatisdigitalhumanities.com</a> zu empfehlen.
      </p>
      <p>
        Das Projekt orientiert sich so weit wie möglich an Grundsätzen der Digital Humanities – darunter die
        FAIR-Prinzipien, welche darauf abzielen, Forschungsdaten auffindbar (findable), zugänglich (accessible),
        interoperabel (interoperable) und wiederverwendbar (reusable) zu machen. Zur Förderung der Transparenz und
        Nachnutzbarkeit unserer Arbeit stellen wir verwendete Datensätze, Programmcode und weiterführende Ressourcen zum
        Download auf unserer Webseite und auch auf unserem Github-Repository zur Verfügung.
      </p>
    </div>
    <Questions :questions="questions"/>
  </div>
</template>

<style scoped>
</style>