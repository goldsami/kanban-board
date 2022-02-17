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
  // add the authorization to the headers
  // console.log('middle', store);
  const { token } = store;
  // console.log('bear');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });

  return forward(operation);
});

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://obscure-forest-51635.herokuapp.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
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
      // here I check that click was outside the el and his children
      console.log('click outside', { vnode, binding, event });
      binding.value();
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // Focus the element
    console.log('instedted', el);
  },
});

app.use(router);

app.mount('#app');
