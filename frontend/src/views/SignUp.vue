<script setup>
import { ref } from 'vue';
import { store1 } from '@/store1';
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
const name = ref('');
// const url = 'http://localhost:3000';
const url = 'https://obscure-forest-51635.herokuapp.com';
function signup() {
  axios
    .post(`${url}/sign-up`, {
      email: email.value,
      password: password.value,
      name: name.value,
    })
    .then((x) => {
      console.log('token: ', x);
      store1.token = x.data;
      store1.isAuthenticated = true;
      const result = useQuery(q);
      // result((d) => console.log('lol', d));

      result.onResult((res) => {
        store1.user = res.data.me;
        localStorage.setItem('token', x.data);
        localStorage.setItem('user', JSON.stringify(res.data.me));
        router.replace({ path: '/' });
      });
    });
}
</script>

<template>
  <div>
    sign up page

    <input placeholder="email" v-model="email" />
    <input placeholder="password" v-model="password" />
    <input placeholder="name" v-model="name" />
    <button @click="signup">Sign up</button>
  </div>
</template>
