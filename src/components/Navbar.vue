<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink class="navbar-brand" to="/">
      Kossie Coder
    </RouterLink>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/todos">
          Todos
        </RouterLink>
      </li>
      <li class="nav-item ">
        <RouterLink to="/login" v-if="!store.state.account.id">Login</RouterLink>
        <a @click.prevent="logout" to="/logout" v-else>Logout</a>
      </li>
      <li class="nav-item ">
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { computed } from 'vue';
// import { useStore } from 'vuex';
import store from '@/stores';




const account = computed(() => {
  console.log('store.state.account.id', store.state.account.id)
  return store.state.account.id
})

// const store = useStore()


const logout = () => {
  console.log('store.state', store.state)
  store.commit('setAccount', 0)
  sessionStorage.removeItem('id')
  alert('로그아웃 성공')
  router.push({ path: '/' })
}
</script>

<style></style>