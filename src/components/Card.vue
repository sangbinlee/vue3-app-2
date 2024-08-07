<template>

  <div class="col">
    <div class="card shadow-sm">
      <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c">
        </rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg> -->



      <!-- <img :src="item.path + item.name" width="100%" height="225" /> -->
      <span class="img" :style="{ backgroundImage: `url(${item.path + item.name})` }"></span>
      <div class="card-body">
        <p class="card-text">
          {{ item.name }}
          <span class="discount bg-danger badge">
            {{ item.discountPer }}%
          </span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
            <button class="btn btn-primary">구입하기</button>
          </div>
          <small class="price text-muted">
            <!-- <small class="price text-body-secondary"> -->
            {{ lib.getNumberFormatted(item.price) }} 원
          </small>
          <small class="real text-danger text-body-secondary">
            {{ lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100)) }} 원
          </small>
        </div>
      </div>
    </div>
  </div>




</template>

<script setup lang="ts">
import router from '@/router';
import { computed } from 'vue';
// import { useStore } from 'vuex';
import lib from '@/scripts/lib';
import store from '@/stores';


defineProps<{
  item?: object,
  // item?: string,
}>()

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

<style scoped>
.card .img {
  display: inline-block;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>