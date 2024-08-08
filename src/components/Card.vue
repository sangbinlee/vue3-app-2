<template>
  <div class="col">
    <div class="card shadow-sm">
      <span class="img" :style="{ backgroundImage: `url(${item.path + item.name})` }"></span>
      <div class="card-body">
        <p class="card-text">
          {{ item.name }}
          <span class="discount bg-danger badge">
            {{ item.discountPer }}%
          </span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <!-- <div class="btn-group">
            <button class="btn btn-primary">구입하기</button>
          </div> -->
          <button class="btn btn-primary" @click="addToCart(item.id)">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <small class="price text-muted">
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

import { computed } from 'vue'
// import lib from '@/scripts/lib';
import store from '@/stores'
import axios from "axios"
import lib from "@/scripts/lib"


defineProps<{
  item?: Object,
  // item?: string,
}>()

const baseUrl = 'https://localhost:8081'
const addToCart = (itemId) => {
  axios.post(`${baseUrl}/api/cart/${itemId}`).then((res) => {
    console.log('success res', res)
  })
};

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