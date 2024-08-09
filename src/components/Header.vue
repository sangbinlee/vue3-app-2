<template>





  <header data-bs-theme="dark">
    <div class="collapse text-bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4>사이트맵</h4>
            <!-- <p class="text-body-secondary">Add some information about the album below, the author, or any other
              background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link
              them off to some social networking sites or contact information.</p> -->

            <ul class="list-unstyled">
              <li>
                <!-- <router-link to="/" class="text-white">메인 화면</router-link> -->
                <RouterLink to="/" class="text-white">home</RouterLink>
              </li>
              <li v-if="store.state.account.id">
                <router-link to="/orders" class="text-white">주문 내역</router-link>
              </li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
              </li>
              <li>
                <RouterLink to="/about" class="text-white">About</RouterLink>
              </li>
            </ul>

          </div>
          <!-- <div class="col-sm-4 offset-md-1 py-4">dddddd -->
          <!-- <h4>Contact</h4> -->
          <!-- <ul class="list-unstyled"> -->
          <!-- <li><a href="#" class="text-white">Follow on Twitter</a></li>
              <li><a href="#" class="text-white">Like on Facebook</a></li>
              <li><a href="#" class="text-white">Email me</a></li> -->
          <!-- <li>
              <RouterLink to="/" class="text-white">home</RouterLink>
            </li> -->
          <!-- <li v-if="store.state.account.id">
                <router-link to="/orders" class="text-white">주문 내역</router-link>
              </li> -->
          <!-- <li>
                <RouterLink to="/login" class="text-white" v-if="!store.state.account.id">login</RouterLink>
                <a @click.prevent="logout" to="/logout" v-else>Logout</a>
              </li> -->
          <!-- <li>
                <RouterLink to="/about" class="text-white">About</RouterLink>
              </li> -->
          <!-- </ul> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <!-- <a href="#" class="navbar-brand d-flex align-items-center"> -->

        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2"
            viewBox="0 0 24 24">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>

          <!-- font family ::::  Karantina -->

          <strong>Gallery</strong>
        </router-link>
        <router-link to="/cart" class="cart btn" v-if="store.state.account.id">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </router-link>
        <!-- </a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '@/router';
import { computed } from 'vue';
// import { useStore } from 'vuex';
import store from '@/stores';

import { useCookies } from "vue3-cookies";

import axiosInstance from '../scripts/axiosInstance';
const account = computed(() => {
  console.log('store.state.account.id', store.state.account.id)
  return store.state.account.id
})

// const store = useStore()


const { cookies } = useCookies();
const logout = () => {




  // axios.delete(`${baseUrl}/api/check`).then((res) => {
  axiosInstance.post(`/api/logout`).then((res) => {
    console.log('cookie res', res)

    console.log('store.state', store.state)
    store.commit('setAccount', 0)
    // sessionStorage.removeItem('id')
    console.log('0000000000 로그아웃 성공')
    router.push({ path: '/' })


  }).catch((res) => {
    console.log('logout failed res', res)
    console.log('logout 에러 메시지 모달 팝업 res' + res)
  })








  // 이건 안됨
  cookies.remove('3test')
  cookies.remove('token')
  cookies.remove('token2')
  cookies.remove('token3')
  cookies.remove('token4')


  // 10초 뒤 사라짐
  cookies.set('test1', new Date().toLocaleString(), 10)
  cookies.set('test2', new Date().toLocaleString(), 10)
  cookies.set('test3', new Date().toLocaleString(), 10)
  cookies.set('test4', new Date().toLocaleString(), 10)




  // axios.delete(`${baseUrl}/api/check`).then((res) => {
  axiosInstance.delete(`/api/cookie`).then((res) => {
    console.log('cookie res', res)

    let id = res.data
    console.log('cookie 성공 id=' + id)


  }).catch((res) => {
    console.log('cookie failed res', res)
    console.log('cookie 에러 메시지 모달 팝업 res' + res)
  })






}
</script>

<style></style>