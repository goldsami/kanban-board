<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import M from 'materialize-css';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  mounted() {
    M.AutoInit();
    this.$store.commit('initializeStore');
  },
};
</script>

<style>
</style>
