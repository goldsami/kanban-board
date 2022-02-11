<script setup>
import { store } from '@/store';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
</script>
<template>
  <div class="home">
    Hello {{ store.user.name }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="message!" />
  </div>
</template>
