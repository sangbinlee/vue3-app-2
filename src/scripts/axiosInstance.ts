// src/axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
  //   baseURL: 'http://api.yourbackend.com',
  // baseURL: 'https://localhost:8081',
  baseURL: 'https://common.sodi9.store',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true
})

export default axiosInstance
