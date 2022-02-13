<script setup>
import { ref } from 'vue';
import { store } from '@/store';
import axios from 'axios';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRouter } from 'vue-router';

const q = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

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
      store.token = x.data;
      store.isAuthenticated = true;
      const result = useQuery(q);
      // result((d) => console.log('lol', d));

      result.onResult((res) => {
        store.user = res.data.me;
        localStorage.setItem('token', x.data);
        localStorage.setItem('user', res.data.me);
        router.replace({ path: '/' });
      });
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
