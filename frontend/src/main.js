import { createApp, h } from 'vue';
import {
  ApolloClient, createHttpLink, InMemoryCache, ApolloLink,
} from '@apollo/client/core';
import {
  provideApolloClient,
} from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import { store } from './store';
import 'materialize-css/dist/css/materialize.min.css';

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = store;
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });

  return forward(operation);
});

const httpLink = createHttpLink({
  uri: 'https://obscure-forest-51635.herokuapp.com/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache,
});

const app = createApp({
  setup() {
    provideApolloClient(apolloClient);
  },

  render: () => h(App),
});

app.directive('cl-out', {
  beforeMount() {
    console.log(1);
  },
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      binding.value();
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

app.use(router);

app.mount('#app');
