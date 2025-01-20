<template>

    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Trier früher und heute</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav class="breadcrumbs">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Trier früher und heute</li>
        </ol>
      </nav>
    </div>
  </div><!-- End Page Title -->

<div class="services-page">

<section id="featured-services" class="featured-services section">


    <div class="container">
      <div class="iframe-section">
        <h2 class="center-text">Hauptmarkt</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=d3da0f64-d04e-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">Palastkaserne und Basilika</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f23f8fb4-ce9c-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">Hauptbahnhof</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=d860c0d6-ce9c-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">Hauptmarkt/Simeonstraße</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=582ed874-cade-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">Bahnsteig</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=21176d02-d050-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">Viehmarkt</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=bc85e9b0-d26e-11ef-9397-d93975fe8866"></iframe>
      </div>
  
      <div class="iframe-section">
        <h2 class="center-text">TUFA</h2>
        <iframe class="juxtapose" width="70%" height="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f0d1c674-d270-11ef-9397-d93975fe8866"></iframe>
      </div>
    </div>

    </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JuxtaposeView',
    components: {},
  }
  </script>
  
  <style scoped>
  /* Container für den gesamten Inhalt */
  .container {
    align-items: center;
    text-align: center;
  }
  
  /* Überschriften zentrieren */
  .center-text {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px; /* Etwas Abstand unter den Überschriften */
  }
  
  /* Iframes zentrieren und etwas Abstand hinzufügen */
  .iframe-section {
    margin-bottom: 0px; /* Abstand zwischen den Iframes */
    align-items: center;
  }
  
  /* Optional: Responsives Verhalten */
  @media (max-width: 768px) {
    .iframe-section iframe {
      width: 90%; /* Auf mobilen Geräten, die Breite des Iframes auf 90% setzen */
    }
  }
  </style>
  


