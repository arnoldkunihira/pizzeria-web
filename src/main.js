import { createApp } from 'vue'
import App from './App.vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
import 'jquery'
import Popper from 'popper.js'
import '/node_modules/bootstrap'
import router from './routes/web'
import store from './store'

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

const app = createApp(App);

app.use(router);

app.use(store);

app.component('BootstrapIcon', BootstrapIcon);

app.mount('#app');
