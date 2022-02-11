import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: false,
  user: null,
  token: null,
});
