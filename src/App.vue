<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Svg from './components/Svg.vue';
import store from './stores';


import axios from 'axios';



import axiosInstance from './scripts/axiosInstance';

const baseUrl = 'https://localhost:8081'

// axios.get(`${baseUrl}/api/check`).then((res) => {// cookie 값이 서버에 전달 안됨
axiosInstance.get(`${baseUrl}/api/check`).then((res) => {// cookie 값이 서버에 전달 잘됨
  console.log('res', res)

  let id = res.data
  console.log('check 성공 id=' + id)


  const val = id || 0
  console.log('check 성공 val=' + val)
  // store.commit('setAccount', val)

  // if (id) {
  //   store.commit('setAccount', id)
  // }
  // else {
  //   store.commit('setAccount', 0)
  // }

}).catch((res) => {
  console.log('failed res', res)
  console.log('check 에러 메시지 모달 팝업 res' + res)
})











console.log('1[App.vue] store.state.account.id', store.state.account.id)

const id = sessionStorage.getItem('id')
console.log('[App.vue] sessionStorage id', id)
if (id) {
  store.commit('setAccount', id)
}


console.log('2[App.vue] store.state.account.id', store.state.account.id)




// axios.get(`${baseUrl}/api/check`).then((res) => {
axiosInstance.get(`/api/cookie`).then((res) => {
  console.log('cookie res', res)

  let id = res.data
  console.log('cookie 성공 id=' + id)


}).catch((res) => {
  console.log('cookie failed res', res)
  console.log('cookie 에러 메시지 모달 팝업 res' + res)
})


</script>

<template>
  <!-- <Navbar /> -->
  <Svg />
  <Header />
  <div class="container">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
