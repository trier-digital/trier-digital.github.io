<template>
  <nav class="navmenu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/bildergalerie">Bildergalerie</router-link></li>
      <li><router-link to="/karten">Karten</router-link></li>
      <li><router-link to="/diskurs">Diskurs</router-link></li>
      <li><router-link to="/zukunft">Zukunftsvisionen</router-link></li>
    </ul>

  </nav>
  <router-view />
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
@import "./assets/css/main.css";

nav {
  color: #1c1c1c;
}
</style>
