import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';

const authGuard = (to, from, next) => {
  if (store.isAuthenticated) {
    next();
  } else next({ name: 'Home' });
};

const routes = [
  {
    path: '/',
    name: 'Base',
    beforeEnter: (to, from, next) => {
      next({ name: 'Home' });
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.isAuthenticated) {
        next({ name: 'Projects' });
      } else next();
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    beforeEnter: authGuard,
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: Project,
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
  history: createWebHistory(),
  routes,
});

export default router;
