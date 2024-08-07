<template>

  <footer class="text-body-secondary py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
      <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
      <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a
          href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p>
    </div>
  </footer>
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