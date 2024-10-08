import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import store from './vuex-store'

createApp(App).use(router).use(store).mount('#app')
