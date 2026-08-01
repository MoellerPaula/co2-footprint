import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EmissionData from '../views/EmissionData.vue';
import ImprintPage from '../views/ImprintPage.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import LegalNotice from '../views/LegalNotice.vue';

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
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: ImprintPage,
    },
    {
      path: '/datenschutz',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
    {
      path: '/rechtliche-hinweise',
      name: 'legal-notice',
      component: LegalNotice,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
