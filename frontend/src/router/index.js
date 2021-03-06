import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';

const authGuard = (to, from, next) => {
  if (store.getters.isAuthenticated) {
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
      if (store.getters.isAuthenticated) {
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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next({ name: 'Home' });
      } else next();
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    // todo: refactor (move to separate func)
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next({ name: 'Home' });
      } else next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
