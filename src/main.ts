import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)

app.use(store)
app.use(createPinia())
app.use(router)

app.mount('#app')

app.config.globalProperties.version = 'v1.0'
