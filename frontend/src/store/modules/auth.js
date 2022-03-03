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
      store.user = localStorage.getItem('user') || null;
    },
    setUser(store, value) {
      localStorage.setItem('user', value);
      store.user = value;
    },
    setToken(store, value) {
      localStorage.setItem('token', value);
      store.token = value;
    },
    logout(store) {
      this.setToken(store, null);
      this.setUser(store, null);
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
    async getUser(context) {
      const q = gql`
        query Me {
          me {
            id
            name
          }
        }
      `;
      useQuery(q).onResult(({ data: { me } }) => {
        context.commit('setUser', me);
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
};
