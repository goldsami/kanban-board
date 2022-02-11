<script setup>
import { ref } from 'vue';
import { store } from '@/store';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
function login() {
  console.log('login', {
    email: email.value,
    password: password.value,
    isAuth: store.isAuthenticated,
  });
  axios
    .post('http://localhost:3000/login', {
      email: email.value,
      password: password.value,
    })
    .then((x) => {
      console.log('token: ', x);
      store.isAuthenticated = true;
      router.replace({ path: '/' });
    });
}
</script>

<template>
  <div>
    login page

    <input v-model="email" />
    <input v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>
