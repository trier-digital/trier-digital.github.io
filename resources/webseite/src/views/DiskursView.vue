<script>
import DiskursBoxes from "@/components/DiskursBoxes.vue";

export default {
  name: 'DiskursView',
  components: {
    DiskursBoxes
  }
}
</script>
<template>
  <div class="about">
    <div class="">
      <h1 class="page-title dark-background">Politischer Diskurs</h1>
    </div>
    <div class="container">
      <div class="my-5">
        <h2>Politischen Diskurs in Trier sichtbar machen</h2>
        <p>
          Welche Themen bestimmen den politischen Diskurs in Trier? Über welche Orte wird berichtet? Und mit welchen
          Emotionen wird diskutiert?
        </p>
        <p>
          Politischer Diskurs wird oft durch Einzelmeinungen oder aktuelle Ereignisse geprägt – sei es in Debatten,
          Interviews oder Reden. Um jedoch langfristige Entwicklungen zu erkennen, braucht es einen umfassenderen
          analytischen Blickwinkel.
        </p>
        <p>
          Eine computergestützte Analyse der Rubrik "Meinung der Fraktionen" der Online-Ausgabe der Trierer
          Rathauszeitung
          bietet Möglichkeiten diesen Fragen nachzugehen.
          Mithilfe von Distant Reading – einer quantitativen Herangehensweise zur Untersuchung großer Textmengen –
          lassen
          sich Muster erkennen, die beim Lesen einzelner Artikel kaum auffallen würden.
          Dadurch werden neue Perspektiven auf den politischen Diskurs in Trier sichtbar und zeigen Entwicklungen über
          längere Zeiträume hinweg.
          So wird der öffentliche Diskurs nicht nur inhaltlich, sondern auch visuell sichtbar – ein neuer Blickwinkel
          auf
          politische Kommunikation.
        </p>
        <p>
          Sehen Sie sich die Ergebnisse zu den verschiedenen Schwerpunkten der Diskursanalyse im Detail an.
        </p>
      </div>
      <DiskursBoxes></DiskursBoxes>
    </div>
  </div>
</template>