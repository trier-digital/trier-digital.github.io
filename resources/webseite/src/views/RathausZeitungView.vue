<script>
import RathausBoxes from "@/components/RathausBoxes.vue";

export default {
  name: "RathausZeitungView",
  components: {
    RathausBoxes
  }
}
</script>

<template>
  <h1 class="page-title dark-background">Topic Modelling</h1>
  <div class="container">
    <br>
    <h2>
      Welche Themen werden von den Fraktionen in der Rathauszeitung präsentiert und so als für die Entwicklung Triers
      relevant gesetzt?
    </h2>
    <p>
      Dieser Frage soll sich hier mittels eines Topic Modelings genähert werden. Dabei handelt es sich um eine Methode
      zur automatischen Themenerkennung, durch die mithilfe von statistischen und KI-gestützten Verfahren große
      Textsammlungen exploriert werden können. Ziel ist es dabei, die den Texten zugrundeliegenden Themen oder „Topics“
      zu extrahieren, ohne dass diese im Vorfeld definiert werden müssen.
      Ein Topic ist hier eine Gruppe von Wörtern, die semantisch miteinander verbunden sind und häufig in ähnlichen
      Kontexten vorkommen - zum Beispiel die Wörter „ÖPNV“, „Bus“ und „Ticket“ im Bereich des öffentlichen Nahverkehrs.
    </p>
    <p>
      Hier geht es zu den Analyseergebnissen, die mit diesem Verfahren entstanden sind:
    </p>
    <RathausBoxes/>
  </div>
</template>

<style scoped>

</style>