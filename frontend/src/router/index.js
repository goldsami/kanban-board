import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';
import Home from '../views/Home.vue';

const authGuard = (to, from, next) => {
  if (store.isAuthenticated) {
    next();
  } else next({ name: 'Login' });
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter() {
      store.logout();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
