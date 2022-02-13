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
  console.log('middle', store);
  const { token } = store;
  console.log('bear');
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
  uri: 'http://localhost:3000/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache,
});

createApp({
  setup() {
    provideApolloClient(apolloClient);
  },

  render: () => h(App),
}).use(router).mount('#app');
