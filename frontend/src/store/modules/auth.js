import axios from 'axios';
import { BACKEND_URL } from '@/config';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

export const authModule = {
  state() {
    return {
      user: null,
      token: null,
    };
  },
  mutations: {
    initializeStore(store) {
      store.token = localStorage.getItem('token') || null;
      store.user = JSON.parse(localStorage.getItem('user')) || null;
    },
    setUser(store, value) {
      localStorage.setItem('user', JSON.stringify(value));
      store.user = value;
    },
    setToken(store, value) {
      localStorage.setItem('token', value);
      store.token = value;
    },
  },
  actions: {
    async login(context, { email, password }) {
      const { data } = await axios
        .post(`${BACKEND_URL}/login`, {
          email,
          password,
        });
      context.commit('setToken', data);
      context.dispatch('getUser');
    },
    logout(context) {
      context.commit('setUser', null);
      context.commit('setToken', null);
    },
    async getUser(context) {
      const q = gql`
        query Me {
          me {
            id
            name
          }
        }
      `;
      useQuery(q).onResult(({ data }) => {
        context.commit('setUser', data?.me);
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
};
