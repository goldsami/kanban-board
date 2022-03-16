import axios from 'axios';
import { BACKEND_URL } from '@/config';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import jwtDecode from 'jwt-decode';

export const authModule = {
  state() {
    return {
      user: null,
      token: null,
    };
  },
  mutations: {
    initializeStore(store) {
      store.token = localStorage.getItem('token') || '';
      store.user = JSON.parse(localStorage.getItem('user')) || null;
    },
    setUser(store, value) {
      localStorage.setItem('user', JSON.stringify(value));
      store.user = value;
    },
    setToken(store, value) {
      console.log('set tok', value);
      localStorage.setItem('token', value || '');
      store.token = value || '';
    },
  },
  actions: {
    async initializeStore(context) {
      await context.commit('initializeStore');
      return context.dispatch('checkToken');
    },
    async login(context, { email, password }) {
      const { data } = await axios
        .post(`${BACKEND_URL}/login`, {
          email,
          password,
        });
      await context.commit('setToken', data);
      return context.dispatch('getUser');
    },
    async signUp(context, { email, password, name }) {
      const { data } = await axios
        .post(`${BACKEND_URL}/sign-up`, {
          email,
          password,
          name,
        });
      await context.commit('setToken', data);
      return context.dispatch('getUser');
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
    checkToken(context) {
      try {
        const decodedToken = jwtDecode(context.state.token);
        if (decodedToken.exp < Date.now() / 1000) {
          context.dispatch('logout');
        }
      } catch (e) {
        context.dispatch('logout');
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};
