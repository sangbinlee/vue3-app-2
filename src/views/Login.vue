<template>
  <div class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="state.form.email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
          v-model="state.form.password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <!-- <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button> -->
      <button class="btn btn-primary w-100 py-2" @click.prevent="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';

import router from '@/router';
import store from '@/stores';

const baseUrl = 'http://localhost:8081'
const state = reactive({
  form: {
    email: 'sangbinlee9@gmail.com',
    password: 'pwd1234',
    name: '이상빈',
  }
})
const submit = () => {
  console.log('state', state)
  console.log('state.form', state.form)
  axios.post(`${baseUrl}/auth/login`, state.form).then((res) => {
    console.log('res', res)
    store.commit('setAccount', res.data)
    sessionStorage.setItem('id', res.data)
    alert('로그인 성공')
    router.push({ path: '/' })

  }).catch((res) => {
    console.log('failed res', res)
  })
}


</script>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>