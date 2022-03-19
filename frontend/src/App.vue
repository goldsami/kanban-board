<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Navbar></Navbar>
    <div class="content">
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
    this.$store.dispatch('initializeStore');
  },
};
</script>

<style>
html {
  background-color: #fafafa;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#app .modal {
  z-index: 1;
  display: block;
  top: 25%;
  transition: display 2s;
  visibility: hidden;
  opacity: 0;
  transition: opacity 200ms;
}

#app .content {
  flex-grow: 1;
  height: calc(100% - 64px);
}

#app .modal.active {
  visibility: visible;
  opacity: 1;
}

i {
  cursor: pointer;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
