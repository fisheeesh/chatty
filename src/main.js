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
/**
 * ! We want user to stay in the chatroom as long as the user is logged in
 * ! We dun want to push users back to the welcompage after they refresh the page even throught they are logged in
 * ! So we will let the vue app to build its components only when the auth library is connnected
 * ! Cuz it will take a bit time to connect. During that time route guard beforeEnter() will run and it will know like user is null
 * ! So the system wlll push the user to welcome page
 */
auth.onAuthStateChanged(() => {
    if (!app) app = createApp(App).use(router).mount('#app')
})
