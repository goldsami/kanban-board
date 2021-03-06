import { createApp, h } from 'vue';
import {
  ApolloClient, createHttpLink, InMemoryCache, ApolloLink,
} from '@apollo/client/core';
import {
  provideApolloClient,
} from '@vue/apollo-composable';
import { VueDraggableNext } from 'vue-draggable-next';
import router from './router';
import { store } from './store';
import 'materialize-css/dist/css/materialize.min.css';
import { BACKEND_URL } from '@/config';
import App from './App.vue';

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = store.state.authModule;
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });

  return forward(operation);
});

const httpLink = createHttpLink({
  uri: `${BACKEND_URL}/graphql`,
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache,
});

const app = createApp({
  setup() {
    provideApolloClient(apolloClient);
  },

  render: () => h(App),
});

app.directive('click-outside', {
  mounted(el, binding) {
    el.clickOutsideEvent = () => {
      binding.value();
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

app.component('draggable', VueDraggableNext);

app.use(store);
app.use(router);

app.mount('#app');
