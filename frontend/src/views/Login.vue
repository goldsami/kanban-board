<script setup>
import {
  computed, ref, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');

const isAuthenticated = computed(() => store.getters.isAuthenticated);

watch(isAuthenticated, (isAuth) => {
  if (isAuth) {
    router.replace({ path: '/' });
  }
});

function login() {
  store.dispatch('login', { email: email.value, password: password.value });
}
</script>

<template>
  <div class="signup">
    <h4>Login</h4>

    <input placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
    <a class="waves-effect waves-light btn-large" @click="login">Login</a>
  </div>
</template>
