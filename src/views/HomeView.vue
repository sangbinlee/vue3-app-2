<template>
  <div>
    <h1>The list of schools</h1>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted } from "vue";

// const schoolStore = useSchoolStore();

onMounted(async () => {
  // const { success, status } = await schoolStore.dispatchGetSchools();

  // if (!success) {
  //   alert("Ups, something happened 🙂");
  //   console.log("Api status ->", status);
  // }
});

const url = 'http://localhost:8081'
axios.get(url + '/api/employees').then((res) => {
  console.log('res', res)
})
  .catch((res) => {
    console.log('failed')
  })


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))




</script>

<style scoped></style>