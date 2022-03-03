import { createStore } from 'vuex';
import { authModule } from '@/store/modules/auth';

export const store = createStore({
  modules: {
    authModule,
  },
});
