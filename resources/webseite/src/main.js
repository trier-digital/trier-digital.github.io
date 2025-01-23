import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Bootstrap template Importe
/*const styles = require.context('./assets', true, /\.css$/);
const scripts = require.context('./assets', true, /\.js$/);
styles.keys().forEach(styles);
scripts.keys().forEach(scripts); */
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import AOS from 'aos'

AOS.init({once: true})

createApp(App).use(bootstrap).use(router).mount('#app')
