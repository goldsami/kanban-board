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

#app .modal {
  display: block;
  top: 25%;
  transition: display 2s;
  visibility: hidden;
  opacity: 0;
  transition: opacity 200ms;
}

#app .modal.active {
  visibility: visible;
  opacity: 1;
}
</style>
