<template>
  <div style="margin-left: 4px">
    <nav id="nav" class="teal">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import { store } from '@/store';
import M from 'materialize-css';

export default {
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
</style>
