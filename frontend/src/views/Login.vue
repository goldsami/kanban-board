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
  <div class="signup">
    <h4>Login</h4>

    <input placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
    <a class="waves-effect waves-light btn-large" @click="login">Login</a>
  </div>
</template>

<style scoped>
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 5rem auto;
}

.signup a {
  width: 100%;
  margin-top: 2rem;
}
</style>
