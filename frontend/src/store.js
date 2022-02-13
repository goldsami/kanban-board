import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: localStorage.getItem('token') || false,
  user: localStorage.getItem('user') || null,
  token: localStorage.getItem('token') || null,
});
