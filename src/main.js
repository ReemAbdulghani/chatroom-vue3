import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//const app = createApp(App)

//app.use(router)

//app.mount('#app')

/* 
to avoid null user on refresh by waiting for firebase to establish the connection with the backend 
and to listen for the first authintication state change (using projectAuth) after which the 
actual user value is set, then fire the app
*/
import { projectAuth } from './firebase/config'

let app 

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.mount('#app')
  }
})