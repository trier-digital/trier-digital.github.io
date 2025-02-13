

<template>

  <!-- Page Title -->
  <div class="">
  <div class="">
    <h1 class="page-title dark-background">{{ pageTitle }}</h1>
  </div>
  </div><!-- End Page Title -->

  



<div class="container"><!--Theater Text-->
  <div class="pt-4 align-items-center features-item">
    <p>
        {{ introductionText }}
    </p>
    <p>
        {{ introductionText2 }}
    </p>
  </div>
</div>


<div class="container">
  <div class="pt-4 row gy-4 features-item">
    <div class="col-md-6 order-1 order-md-2 d-flex" data-aos="zoom-out" data-aos-delay="200">
      <figure class="image-container">
        <img :src="images[0].src" class="img-fluid">
        <figcaption>
          <p class="fst-italic">
            {{ images[0].description }}
          </p>
        </figcaption>
      </figure>
    </div>
    <div class="col-md-6 order-1 order-md-2 d-flex" data-aos="zoom-out" data-aos-delay="200">
      <figure class="image-container">
        <img :src="images[1].src" class="img-fluid">
        <figcaption>
          <p class="fst-italic">
            {{ images[1].description }}
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</div>


<div class="container"><!--3 Wordclouds in einer Reihe-->
  <div class="pt-4 row gy-4 align-items-center features-item">
    <div class="col-md-4 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <figure class="image-container">
        <img :src="images[2].src" class="img-fluid">
        <figcaption>
          <p class="fst-italic">
            {{ images[2].description }}
          </p>
        </figcaption>
      </figure>
    </div>
    <div class="col-md-4 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <figure class="image-container">
        <img :src="images[3].src" class="img-fluid">
        <figcaption>
          <p class="fst-italic">
            {{ images[3].description }}
          </p>
        </figcaption>
      </figure>
    </div>
    <div class="col-md-4 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <figure class="image-container">
        <img :src="images[4].src" class="img-fluid">
        <figcaption>
          <p class="fst-italic">
            {{ images[4].description }}
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</div>

</template>

<style scoped>

.image-container figcaption {
  margin-left: 50px; /* Schiebt die Bildunterschrift etwas nach rechts */
}



</style>

<script>


export default {
  name: "TheaterExhausDomView",
  props: {
    type: String,
  },
  computed: {
    pageTitle() {
      switch (this.type) {
        case 'dom':
          return 'Der Dom - Ein zentraler Ort Triers';
        case 'exhaus':
          return 'Das Exhaus - Das Ende eines historischen Ortes der Jugendarbeit';
        case 'theater':
          return 'Das Theater - Ein sanierungsbedürftiger Ort der Kunst';
      }
    },
    introductionText() {
      switch (this.type) {
        case 'dom':
          return 'Der Trierer Dom ist nicht nur die älteste Bischofskirche Deutschlands und UNESCO-Welterbe, er ist auch Mittelpunkt der Innenstadt. Während im Inneren dem kirchlichen Leben nachgegangen werden kann, ist der Platz vor dem Dom dem Irdischen gewidmet. Hier finden während des Altstadtfestes Konzerte statt und im Winter der Weihnachtsmarkt.';
        case 'exhaus':
          return 'Seit den siebziger Jahren war das historische Exhaus, oder auch Exzellenzhaus, ein Jugend- und Kulturzentrum in Trier. Das Zentrum bot nicht nur Freizeit-, sondern auch Unterstützungsangebote für Kinder und Jugendliche und wurde bis zu dessen Insolvenz von einem gemeinnützigen Verein verwaltet. Schon im Jahr 2015 wurden Brandschutzmängel im Exhaus festgestellt, die mit einer Sanierung im Jahr 2016 behoben werden sollten. Im Verlauf der Sanierung wurden weitere Mängel innerhalb der Gebäudestruktur festgestellt, weshalb nach und nach Teile des Gebäudes für die Öffentlichkeit geschlossen wurden, bis 2019 bekannt wurde, dass tragende Bauteile des Gebäudes so marode sind, dass das gesamte Gebäude gesperrt wurde. Für die Sanierung und Wiedereröffnung demonstrierten Teile der Bevölkerung unter der Federführung des Aktionsbündnisses eXhaus bleibt! in den vergangenen Jahren immer wieder und auch die Parteien im Stadtrat diskutieren über die Zukunft des Gebäudes und der Jugendarbeit in Trier.';
        case 'theater':
          return 'Das Theater Trier ist ein städtisches Dreispartentheater mit jährlich mehr als 300 Vorstellungen. Es werden Musiktheater, Tanz, Schauspiel und Musical gezeigt. Das Theater ist der am häufigsten genannte Ort innerhalb der POI-Liste und damit scheinbar vieldiskutiert. Einer der Gründe hierfür dürfte der Sanierungsbedarf des Baus und der technischen Ausstattung sein, für die ungefähr 50 Millionen Euro in die Hand genommen werden müssen. Der Stadtrat fasste 2019 den Grundsatzbeschluss zur Sanierung des Theaters, die bereits in den Jahren zuvor stark diskutiert worden war. Das große Sanierungsprojekt begann im Jahr 2024 mit dem Spatenstich eines Neubaus bei der TUFA, in dem der Theaterbetrieb während des Umbaus des Haupthauses weiterbetrieben werden soll.';
      }
    },
    introductionText2() {
      switch (this.type) {
        case 'dom':
          return 'Der Trierer Dom ist nicht nur die älteste Bischofskirche Deutschlands und UNESCO-Welterbe, er ist auch Mittelpunkt der Innenstadt. Während im Inneren dem kirchlichen Leben nachgegangen werden kann, ist der Platz vor dem Dom dem Irdischen gewidmet. Hier finden während des Altstadtfestes Konzerte statt und im Winter der Weihnachtsmarkt. Während bei den beiden anderen Orten wichtige Gründe für die häufige Nennung Sanierungsbedarfe darstellten und die Häufigkeit der Nennung mit Ereignissen verknüpft werden kann, sind die Gründe für die Nennung des Doms vielschichtiger und haben nicht selten, anstatt mit dem Bauwerk, etwas mit dessen Lage zu tun. So wurde der Begriff Dom auch häufig in der Diskussion um die Umbenennung des Platzes hinter dem Bauwerk genannt, die wenige Übereinstimmungen zeigen.';
        case 'exhaus':
          return '';
        case 'theater':
          return 'Die Stadtratsfraktionen äußerten sich in der Rathauszeitung beim Thema Theater außerdem zu Personalentscheidungen, Kosten des Spielbetriebs und der Tickets und dem allgemeinen Nutzen eines Theaters für die Stadt.';
      }
    },
    
    // Das Array für Bilder und Beschreibungen
    images() {
      switch (this.type) {
        case 'dom':
          return [
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Generelle_Häufigkeit_DOM.svg'),
            description: 'Häufigkeit des Keywords "Dom" über die Jahre. Der Anstieg der Nennung im Jahr 2012 könnte mit der Heilig-Rock-Wallfahrt in diesem Jahr zusammenhängen. ' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Viz_Dom.svg'),
            description: 'Verteilung der Worthäufigkeit auf die Parteien' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_dom_spd.svg'),
            description: 'SPD' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_dom_ubt-fwg-ubm.svg'),
            description: 'UBT und ihre Vorgängerparteien (UBM, FWG)' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_dom_grüne.svg'),
            description: 'Die Grünen' },
          ];
        case 'exhaus':
          return [
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Generelle_Häufigkeit_EXHAUS.svg'),
            description: 'Häufigkeit des Keywords "Exhaus" über die Jahre. Die Worthäufigkeit stieg mit der Feststellung der Brandschutzmängel im Jahr 2015 an.' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Viz_Exhaus.svg'),
            description: 'Verteilung der Worthäufigkeit auf die Parteien' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_exhaus_linke.svg'),
            description: 'Die Linke' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_exhaus_ubt-fwg-ubt.svg'),
            description: 'UBT und ihre Vorgängerparteien (UBM, FWG)' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_exhaus_afd.svg'),
            description: 'AFD' },
          ];
        case 'theater':
          return [
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Generelle_Häufigkeit_THEATER.svg'),
            description: 'Die Verteilung des Wortes "Theater" innerhalb der Jahre. Im Jahr 2016 stellte ein Machbarkeitsbericht fest, dass die Sanierung des Theaters 50 Mio. Euro kosten würde, im Jahr 2018 wurde diese Rechnung überarbeitet und 2019 die Sanierung beschlossen.' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/Viz_Theater.svg'),
            description: 'Verteilung der Worthäufigkeit auf die Parteien' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_theater_cdu.svg'),
            description: 'CDU' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_theater_fdp.svg'),
            description: 'FDP' },
            { src: require('../../public/assets/img/Auswertung Rathauszeitung - Rebecca/wortwolke_theater_spd.svg'),
            description: 'SPD' },
          ];
        default:
          return [];
      }
    },
  },
};
</script>