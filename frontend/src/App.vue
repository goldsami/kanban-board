<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Navbar></Navbar>
    <router-view />
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
html {
  background-color: #fafafa;
}
</style>
