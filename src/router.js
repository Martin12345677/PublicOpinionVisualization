import { createRouter, createWebHistory } from 'vue-router';
import home from './view/home.vue';
import search from './view/search.vue';
import covid from './view/covid.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: home,
    },
    {
      path: '/search',
      component: search,
    },
    {
      path: '/covid',
      component: covid,
    },
  ],
});

export default router;
