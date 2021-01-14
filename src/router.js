import { createRouter, createWebHistory } from 'vue-router';
import home from './view/home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: home,
    },
  ],
});

export default router;
