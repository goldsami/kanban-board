<script setup>
import {
  computed, onMounted, ref, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');

const isAuthenticated = computed(() => store.getters.isAuthenticated)

watch(isAuthenticated, (isAuth) => {
  if (isAuth) {
    router.replace({ path: '/' });
  }
})

function login() {
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
