import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';
import {store} from "@/store";

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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
