<template>
  <h1>To-Do Page {{ $route.params.id }}</h1>
  <TodoForm :editing="true" />
</template>
<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue';

</script>

<style></style>