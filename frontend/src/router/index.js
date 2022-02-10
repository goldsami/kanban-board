import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { store } from '../store';

const authGuard = (to, from, next) => {
  if (store.isAuthenticated) {
    next();
  }
  next({ name: 'Login' });
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
