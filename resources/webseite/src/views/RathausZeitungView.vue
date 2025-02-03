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
<div class="container">
  <h1 class="page-title">Auswertung Rathauszeitung</h1>
  <p>Welche Themen werden von den Fraktionen in der Rathauszeitung präsentiert und so als für die Entwicklung Triers relevant gesetzt?
    Dieser Frage soll sich hier mittels eines Topic Modelings genähert werden.
    Dabei handelt es sich um eine auf statistischen Berechnungen basierende Methode, die es ermöglicht, Textsammlungen thematisch zu explorieren. Ziel ist es dabei, die den Texten zugrundeliegende Themen oder „Topics“ zu extrahieren, ohne dass diese im Vorfeld definiert werden müssen.
    Ein Topic ist hier eine Gruppe von Wörtern, die in der Textsammlung statistisch gesehen ungewöhnlich häufig miteinander auftreten und semantisch miteinander zusammenhängen - zum Beispiel die Wörter „ÖPNV“, „Bus“ und „Ticket“.
    Hier geht es zu den Analyseergebnissen, die mit diesem Verfahren entstanden sind:</p>
  <RathausBoxes />
</div>
</template>

<style scoped>

</style>