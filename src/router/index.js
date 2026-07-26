import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EmissionData from '../views/EmissionData.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/emissionen',
      name: 'emissionen',
      component: EmissionData,
    }

  ],
});

export default router;
