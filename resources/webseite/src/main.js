import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Bootstrap template Importe
/*const styles = require.context('./assets', true, /\.css$/);
const scripts = require.context('./assets', true, /\.js$/);
styles.keys().forEach(styles);
scripts.keys().forEach(scripts); */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount('#app')
