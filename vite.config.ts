import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    basicSsl()
    // {
    //   name: 'test',
    //   domains: ['*.custom.com'],
    //   certDir: '/Users/.../.devServer/cert'
    // }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // https://regery.com/en/security/ssl-tools/self-signed-certificate-generator
    // https://www.xolphin.com/support/OpenSSL/OpenSSL_-_Installation_under_Windows
    // https://slproweb.com/products/Win32OpenSSL.html
    // openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate.crt
    https: {
      // key: './vue3-app-2-privateKey.key',
      // cert: './vue3-app-2.crt'
      key: './private.key',
      cert: './certificate.crt'
    },
    port: 3000,
    origin: 'https://127.0.0.1:8080/'
    // proxy: {
    //   '/api': 'https://localhost:8081', // 안됨
    //   '/apixxxx': {
    //     // target: process.env.VITE_SERVER_URL,
    //     target: 'https://localhost:8081',
    //     // target: 'https://127.0.0.1:8081',
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/api/, ''),
    //     secure: false
    //   }
    // }
  }
})
