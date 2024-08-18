<template>

  <main>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the
            creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>

            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <Card :item="item" v-for="(item, i) in state.items" :key="i" />

        </div>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import { onMounted, reactive } from "vue";

import axiosInstance from '@/scripts/axiosInstance';
// const url = 'https://localhost:8081'
const state = reactive({
  items: []
})
// const schoolStore = useSchoolStore();

onMounted(async () => {
  // const { success, status } = await schoolStore.dispatchGetSchools();

  // if (!success) {
  //   alert("Ups, something happened 🙂");
  //   console.log("Api status ->", status);
  // }
});

// axios.get(url + '/api/employees').then((res) => {
//   console.log('res', res)
// })
//   .catch((res) => {
//     console.log('failed')
//   })


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// $axios.get('/api/item').then((res) => {
axiosInstance.get('/api/item').then((res) => {
  // console.log('111 res', res)
  // console.log('111 data', data)
  state.items = res.data
})
  .catch((res) => {
    console.log('failed res', res)
    alert('에러 메시지 모달 팝업 res' + res)
  })


</script>

<style scoped></style>