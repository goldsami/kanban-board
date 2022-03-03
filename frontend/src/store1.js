import { reactive } from 'vue';

export const store1 = reactive({
  isAuthenticated: !!localStorage.getItem('token') || false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') || null,
  logout() {
    localStorage.removeItem(('token'));
    localStorage.removeItem(('user'));
    this.isAuthenticated = null;
    this.user = null;
    this.token = null;
  },
});
