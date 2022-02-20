<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
// import { store } from '@/store';
import M from 'materialize-css';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
</style>
