<script setup>
import {computed, ref, watch} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');
const name = ref('');

// todo: refactor, move to some hook or smth
const isAuthenticated = computed(() => store.getters.isAuthenticated)

watch(isAuthenticated, (isAuth) => {
  if (isAuth) {
    router.replace({ path: '/' });
  }
})

function signup() {
  store.dispatch('signUp', { email: email.value, password: password.value, name: name.value });
}
</script>

<template>
<!--  todo: refactor (move form to separate component)-->
  <div class="signup">
    <h4>Create your account</h4>

    <input placeholder="name" v-model="name"/>
    <input placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
    <a class="waves-effect waves-light btn-large" @click="signup">Sign up</a>
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
