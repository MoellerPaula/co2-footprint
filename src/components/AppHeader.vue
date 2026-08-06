<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrollingUp = ref(false);
let lastScrollPosition = 0;

const handleScroll = () => {
  if (window.innerWidth > 768) return;
  const current = window.scrollY;
  scrollingUp.value = current < lastScrollPosition;
  lastScrollPosition = current;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <header class="ps-5 pt-5" :class="{ 'scrolling-up': scrollingUp }">
    <div class="d-flex align-items-center gap-5">
      <img src="../assets/LogoCO2Fußabdruck3.svg" alt="Logo" />
      <h1>CO₂ Fußabdruck</h1>
    </div>

    <nav class="d-flex justify-content-end gap-5">
      <RouterLink to="/">Startseite</RouterLink>
      <RouterLink to="/emissionen">Emissionen</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid #c0c0c0ff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}

img {
  width: 4rem;
  height: auto;
}

h1 {
  color: #006b0eff;
  font-weight: bold;
}

nav {
  padding-right: 6rem;
  padding-bottom: 1.5rem;
}

a {
  color: #006b0eff;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

nav a.router-link-active {
  border-bottom: 2px solid #006b0eff;
}

@media (width <= 768px) {
  header {
    padding-left: 1rem !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    position: relative;
    top: auto;
  }

  header.scrolling-up {
    position: sticky;
    top: 0;
    animation: slideDown 0.3s ease;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }

  header > div {
    gap: 1rem !important;
  }

  img {
    width: 2.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  nav {
    padding-right: 1rem;
    padding-bottom: 0;
    margin-top: 1rem;
    gap: 1rem;
  }

  a {
    font-size: 1rem;
  }
}
</style>
