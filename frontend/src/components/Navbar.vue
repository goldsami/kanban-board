<template>
  <nav id="nav" class="teal">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Kanban board</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <template v-if="store.isAuthenticated">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </template>
        <li v-else><router-link to="/login">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { store } from '@/store';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
