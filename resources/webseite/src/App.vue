<template>
  <header id="header" class="header d-flex align-items-center fixed-top"
    :class="{ 'solid': this.$route.name !== 'home' }">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <router-link to="/" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="./assets/logo.png" alt="logo">
        <h1 class="sitename">Trier Digital</h1>
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li class="dropdown"><router-link to="/"><span>Bilder</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/bildergalerie">Bildergalerie</router-link></li>
              <li><router-link to="/juxtapose">Trier früher und heute</router-link></li>
            </ul>
          </li>
          <li class="dropdown"><router-link to="/"><span>Karten</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/karten">Karten der Stadt Trier</router-link></li>
              <li><router-link to="/routenkarte">Routen in Trier</router-link></li>
              <li><router-link to="/poiskarte">Markante Orte</router-link></li>
            </ul>
          </li>
          <li class="dropdown"><router-link to="/diskurs"><span>Diskurs</span> <i
              class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/sentiment">Sentiment Rathaus</router-link></li>
              <li><router-link to="/rathaus">Auswertung Rathauszeitung</router-link></li>
              <li><router-link to="/textanalyse">Diskurs3</router-link></li>
            </ul>
          </li>
          <li><router-link to="/zukunft">Zukunftsvisionen</router-link></li>
          <li class="dropdown"><router-link to="/"><span>Extras</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/methoden">Methoden</router-link></li>
              <li><router-link to="/team">Team</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <router-view />
  <footer id="footer" class="footer dark-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="d-flex align-items-center">
            <span class="sitename">Trier Digital</span>
          </a>
          <div class="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div class="social-links d-flex">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Moderna</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>
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

.li {
  color: black;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/

footer {
  margin-top: 30px;
}

.solid {
  background-color: #1e4356;
  transition: all 0.0s;
}
</style>