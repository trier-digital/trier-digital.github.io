<template>
   <!-- Team Section -->
    <section id="team" class="team section">

        <div class="container">
  
          <div class="row gy-5 gx-5">
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Nune.jpg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Nune Arazyan</h4>
                <span>Kombi-B.A. Kulturwissenschaft & Deutsche Literatur </span>
                <p>Georeferenzierung historischer Karten, Trierer Routen, Recherche</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/avatar.png" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Dennis Binz</h4>
                <span>B.Sc. Sprache, Technologie, Medien</span>
                <p>Webseite</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Naemi_Bürger.jpeg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Naemi Bürger</h4>
                <span>B.A. Mehrsprachige Kommunikation</span>
                <p>Recherche, Fotografien/Bildbearbeitung, Georeferenzierung</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Daniel_Foto.jpg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Rebecca Daniel</h4>
                <span>B.A. Museologie</span>
                <p>Korpuserstellung, Korpusanalyse: Natural Language Processing, Informationsvisualisierung</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Foto_RachelGeorg.jpg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Rachel Georg</h4>
                <span>B.Sc. Informatik</span>
                <p>Webseite, Recherche</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/avatar.png" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Nele Mantaj</h4>
                <span>B.A. Geschichte und Klassische Archäologie</span>
                <p>Recherche, Georeferenzierung historischer Karten</p>
              </div>
            </div><!-- End Team Member -->
  
            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Bianca.jpg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>B. O.</h4>
                <span>B.A. Allgemeine Sprachwissenschaft und Psychologie</span>
                <p>Korpusanalyse: Topic Modeling, Informationsvisualisierung</p>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Rebecca_Robinson.png" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Rebecca Robinson</h4>
                <span>B.A. Literaturwissenschaften und Philosophie</span>
                <p>Öffentlichkeitsarbeit, Recherche, Fotografien, Bilderkuration</p>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/avatar.png" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>M. R.</h4>
                <span>B.A. Philosophie und Geschichte</span>
                <p>Korpusanalyse: Emotionsanalyse, Informationsvisualisierungen, Recherche</p>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Marina_Spielberg.jpeg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Marina Spielberg</h4>
                <span>B.A. Anglistik und Psychologie</span>
                <p>Korpusanalyse: Emotionsanalyse, Informationsvisualisierungen, Recherche</p>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-3 col-md-6 member">
              <div class="member-img">
                <img src="assets/img/team/Carina_Zander.jpg" class="img-fluid" alt="">
              </div>
              <div class="member-info text-center">
                <h4>Carina Zander</h4>
                <span>B.A. Anglistik und Slavistik</span>
                <p>Recherche, Bildkuration, Öffentlichkeitsarbeit, Logo</p>
              </div>
            </div><!-- End Team Member -->

          </div>
  
        </div>
  
      </section><!-- /Team Section -->

    </template>

<script>
export default {
  name: 'Team',
  props: {
  }
}
</script>

<style scoped>
.member-img img {
  height: 350px; /* Hier kannst du die gewünschte feste Höhe eintragen */
  object-fit: cover; /* sorgt dafür, dass das Bild das Container-Verhältnis beibehält */
  width: 100%; /* Damit das Bild immer die volle Breite des Containers einnimmt */
}
</style>