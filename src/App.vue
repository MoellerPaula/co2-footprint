<script setup>
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

onMounted(() => {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  const lang = navigator.language.split('-')[0];
  document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
});
</script>

<template>
  <AppHeader />

  <main>
    <router-view />
  </main>

  <AppFooter />
</template>
