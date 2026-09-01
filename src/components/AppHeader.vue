<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrollingUp = ref(false);
let lastScrollPosition = 0;
let anchorScrolling = false;
let menuToggling = false;

const handleScroll = () => {
  if (window.innerWidth > 768) return;
  if (anchorScrolling) return;
  if (menuToggling) return;

  const current = window.scrollY;
  scrollingUp.value = current < lastScrollPosition;
  lastScrollPosition = current;
};

const showHeader = () => {
  anchorScrolling = true;
  scrollingUp.value = true;

  setTimeout(() => {
    anchorScrolling = false;
    lastScrollPosition = window.scrollY;
  }, 800);
};

const handleMenuToggle = () => {
  menuToggling = true;
  scrollingUp.value = true;

  setTimeout(() => {
    menuToggling = false;
    lastScrollPosition = window.scrollY;
  }, 100);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('anchor-scroll-down', showHeader);
  window.addEventListener('menu-toggle', handleMenuToggle);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('anchor-scroll-down', showHeader);
  window.removeEventListener('menu-toggle', handleMenuToggle);
});
</script>

<template>
  <header :class="{ 'scrolling-up': scrollingUp }">
    <div class="header-brand">
      <img src="../assets/LogoCO2Fußabdruck3.svg" alt="Logo" />
      <h1>CO₂ Fußabdruck</h1>
    </div>

    <nav>
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
  padding-left: 3rem;
  padding-top: 3rem;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 3rem;
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
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
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
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: relative;
    top: auto;
  }

  header.scrolling-up {
    position: sticky;
    top: 0;
    animation: slide-down 0.3s ease;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }

  .header-brand {
    gap: 1rem;
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
