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
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/todos">Todos</RouterLink>
        </nav> -->
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style></style>