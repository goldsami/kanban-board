<script setup>
import { store } from '@/store';
// @ is an alias to /src
import 'materialize-css';
import HelloWorld from '@/components/HelloWorld.vue';
</script>
<template>
  <div class="home">
    <a class="waves-effect waves-light btn">button</a>
    <hr />
    Hello
    {{ store.user.name }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="message!" />
  </div>
</template>
