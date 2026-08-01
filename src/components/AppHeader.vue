<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(true);

let lastScrollPosition = 0;

const isMobile = () => window.innerWidth <= 768;

const handleScroll = () => {
  if (!isMobile()) {
    isVisible.value = true;
    return;
  }

  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition <= 0) {
    isVisible.value = true;
  } else if (currentScrollPosition > lastScrollPosition) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="ps-5 pt-5" :class="{ hidden: !isVisible }">
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
    transition: transform 0.3s ease-in-out;
  }

  header.hidden {
    transform: translateY(-100%);
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
