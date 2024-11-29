import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/bootstrap.css'
import './assets/css/custom.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { auth } from './firebase/config'

let app;

auth.onAuthStateChanged(() => {
    if(!app) app = createApp(App).use(router).mount('#app');
})
