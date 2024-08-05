<template>
  <div v-for="(item, index) in items" :key="item.id" class="card mt-2">
    <slot :item="item" :index="index"></slot>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style></style>