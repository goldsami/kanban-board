<template>
  <nav v-if="store.isAuthenticated" id="nav" class="teal">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Kanban board</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
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
