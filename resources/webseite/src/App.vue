<template>
  <header id="header" class="header d-flex align-items-center fixed-top"
    :class="{ 'solid': this.$route.name !== 'home', 'float': this.$route.name == 'home' }">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <router-link to="/" class="d-flex align-items-center dedec">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="./assets/logo_inverse.svg" alt="logo" width="100">
        <div class="logo">
        <h1 class="sitename">Trier Digital</h1>
        </div>
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
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
              <li><router-link to="/poisrathauszeitungkarte">Orte aus der Diskursanalyse</router-link></li>
            </ul>
          </li>
          <li class="dropdown"><router-link to="/diskurs"><span>Politischer Diskurs</span> <i
              class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/diskurs">Übersicht</router-link></li>
              <li><router-link to="/textanalyse">Textanalyse</router-link></li>
              <li><router-link to="/topics">Topic Modeling</router-link></li>
              <li><router-link to="/sentiment">Emotionsanalyse</router-link></li>
            </ul>
          </li>
          <li class="dropdown"><router-link to="/"><span>Projekt</span> <i
                class="bi bi-chevron-down toggle-dropdown"></i></router-link>
            <ul>
              <li><router-link to="/methoden">Methoden</router-link></li>
              <li><router-link to="/team">Team</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>



 <!-- Mobile Menü Button -->
 <button class="mobile-menu-btn d-lg-none" @click="toggleMobileMenu">
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </button>

      <!-- Mobile Navigation -->
      <nav v-if="mobileMenuOpen" class="mobile-nav">
        <ul>
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li>
            <button @click="toggleDropdown('bilder')">Bilder <i class="bi bi-chevron-down"></i></button>
            <ul v-if="dropdowns.bilder">
              <li><router-link to="/bildergalerie" @click="closeMobileMenu">Bildergalerie</router-link></li>
              <li><router-link to="/juxtapose" @click="closeMobileMenu">Trier früher und heute</router-link></li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('karten')">Karten <i class="bi bi-chevron-down"></i></button>
            <ul v-if="dropdowns.karten">
              <li><router-link to="/karten" @click="closeMobileMenu">Karten der Stadt Trier</router-link></li>
              <li><router-link to="/routenkarte" @click="closeMobileMenu">Routen in Trier</router-link></li>
              <li><router-link to="/poiskarte" @click="closeMobileMenu">Markante Orte</router-link></li>
              <li><router-link to="/poisrathauszeitungkarte" @click="closeMobileMenu">Orte aus der Diskursanalyse</router-link></li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('diskurs')">Politischer Diskurs <i class="bi bi-chevron-down"></i></button>
            <ul v-if="dropdowns.diskurs">
              <li><router-link to="/diskurs" @click="closeMobileMenu">Übersicht</router-link></li>
              <li><router-link to="/textanalyse" @click="closeMobileMenu">Textanalyse</router-link></li>
              <li><router-link to="/topics" @click="closeMobileMenu">Topic Modeling</router-link></li>
              <li><router-link to="/sentiment" @click="closeMobileMenu">Emotionsanalyse</router-link></li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('projekt')">Projekt <i class="bi bi-chevron-down"></i></button>
            <ul v-if="dropdowns.projekt">
              <li><router-link to="/methoden" @click="closeMobileMenu">Methoden</router-link></li>
              <li><router-link to="/team" @click="closeMobileMenu">Team</router-link></li>
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
  background-color: var(--new-heading);
  transition: all 0.0s;
}

.dedec{
  text-decoration: none;
}






/* Mobile Menü Styling */
.mobile-menu-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.mobile-nav {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #425269;
  color: white;
  padding: 10px;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
}

.mobile-nav li {
  padding: 10px;
}

.mobile-nav a, .mobile-nav button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: block;
}

.mobile-nav button:hover, .mobile-nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

</style>
<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      dropdowns: {
        bilder: false,
        karten: false,
        diskurs: false,
        projekt: false
      }
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>

