<script setup>
import { ref } from 'vue';
import { store1 } from '@/store1';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const email = ref('');
const password = ref('');

const store = useStore();
function login() {
  console.log('login', {
    email: email.value,
    password: password.value,
    isAuth: store1.isAuthenticated,
  });
  store.dispatch('login', { email: email.value, password: password.value });
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
