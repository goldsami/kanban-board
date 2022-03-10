<script setup>
import {ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');
const name = ref('');

function signup() {
  store.dispatch('signUp', {email: email.value, password: password.value, name: name.value})
}
</script>

<template>
  <div>
    sign up page

    <input placeholder="email" v-model="email"/>
    <input placeholder="password" v-model="password"/>
    <input placeholder="name" v-model="name"/>
    <button @click="signup">Sign up</button>
  </div>
</template>
