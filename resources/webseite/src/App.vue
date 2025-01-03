<template>

      <nav id="navbar">
      <ul>
        <li class="logo">
          <a href="index.html" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <img src="../public/assets/img/logo.png" alt="">
      </a>
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/bildergalerie">Bildergalerie</router-link></li>
        <li><router-link to="/karten">Karten</router-link></li>
        <li><router-link to="/diskurs">Diskurs</router-link></li>
        <li><router-link to="/zukunft">Zukunftsvisionen</router-link></li>
      </ul>
      <router-view />
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
@import "../public/assets/css/main.css";



/* Stil für die Navbar */
#navbar {
  background-color: #6f4f28; /* Brauner Hintergrund */
  /*position: fixed; /* Navbar fixieren */
  top: 0; /* Oben anheften */
  left: 0; /* Am linken Rand ausrichten */
  width: 100%; /* Breite der Seite ausfüllen */
  z-index: 1000; /* Sicherstellen, dass sie über dem restlichen Inhalt bleibt */
  padding: 10px 20px; /* Etwas Padding für Abstand */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: Schatten für ein schöneres Aussehen */
}

/* Sicherstellen, dass der Inhalt der Seite nicht unter die Navbar rutscht */
body {
  padding-top: 60px; /* Platz für die fixierte Navbar schaffen */
}

/* Die Links in der Navbar */
#navbar ul {
  list-style: none; /* Keine Aufzählungspunkte */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Links zentrieren */
}

#navbar li {
  margin: 0 15px; /* Abstand zwischen den Links */
}

#navbar a {
  color: white; /* Weißer Text */
  text-decoration: none; /* Keine Unterstreichung */
  font-size: 16px; /* Schriftgröße */
}

#navbar a:hover {
  text-decoration: underline; /* Unterstreichung beim Hover */
}

#navbar i {
  display: none; /*mobilen Menübutton verstecken */
}

</style>


<script>
export default {
  name: 'App',
  mounted() {
    this.loadScripts();
  },
  methods: {
    loadScripts() {
      const scripts = [
        "../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "../public/assets/vendor/php-email-form/validate.js",
        "../public/assets/vendor/aos/aos.js",
        "../public/assets/vendor/glightbox/js/glightbox.min.js",
        "../public/assets/vendor/purecounter/purecounter_vanilla.js",
        "../public/assets/vendor/swiper/swiper-bundle.min.js",
        "../public/assets/vendor/waypoints/noframework.waypoints.js",
        "../public/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
        "../public/assets/vendor/isotope-layout/isotope.pkgd.min.js",
        "../public/assets/js/main.js"
      ];

      scripts.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    },
  },
};
</script>
