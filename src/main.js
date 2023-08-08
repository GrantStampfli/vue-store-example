import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueStorage from 'vuejs-storage'
const app = createApp(App)
app.use(VueStorage)
app.use(store)
app.use(router)

app.mount('#app')
