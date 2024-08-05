import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './stores'
const app = createApp(App)

app.use(store)
app.use(createPinia())
app.use(router)
// app.use(axios, {
//   baseUrl: 'http://localhost:8080'
// })
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_ENDPOINT
})

app.config.globalProperties.version = 'v1.0'
app.config.globalProperties.$axios = { ...axiosInstance } //  axios 전역 설정

app.mount('#app')
