// import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

// import axios from 'axios'
import App from './App.vue'
import router from './router'
// import store from './stores'
import store from './stores'

// import VueCookies from 'vue-cookies'

const app = createApp(App)

// app.use(VueCookies)
app.use(store)
app.use(createPinia())
app.use(router)
// app.use(axios, {
//   baseUrl: 'http://localhost:8080'
// })
// const axiosInstance = axios.create({
//   withCredentials: true,
//   baseURL: import.meta.env.VITE_API_ENDPOINT
// })

const baseUrl = 'http://localhost:8081'
app.config.globalProperties.version = 'v1.0'
// app.config.globalProperties.$axios = { ...axiosInstance } //  axios 전역 설정
app.config.globalProperties.baseUrl = baseUrl //  axios 전역 설정

app.mount('#app')















//Vue 3
import axios from 'axios'



app.config.globalProperties.$axios = axios
axios.create({
  //   baseURL: 'http://api.yourbackend.com',
  baseURL: 'https://localhost:8081',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true
})




// Request interceptor
axios.interceptors.request.use(
    (config) => {
      // Modify the request config here
      const token = localStorage.getItem('authToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('[axios.interceptors.request] config', config)

      return config
    }
)

// Response interceptor
axios.interceptors.response.use(
    
    (response) => { 
        // Handle the response here
        console.log('[axios.interceptors.response] response', response)
        return response
    }, 
    (error) => {
        // Handle errors here
        console.error(error)
        if (error.response) {
            if (error.response.status === 401) {
            // Redirect to login page
            router.push('/login')
            } else {
            // Show a generic error message
            alert('An error occurred. Please try again later.')
            }
        }        
        return Promise.reject(error)
    }

)