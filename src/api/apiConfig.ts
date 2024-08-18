// src/axiosInstance.js
import axios from 'axios'

const apiClient = axios.create({
  //   baseURL: 'http://api.yourbackend.com',
  baseURL: 'https://localhost:8081/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true
})

export default apiClient
