<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const activeSection = ref(props.items[0]?.id || '');
const scrollingUp = ref(false);

let lastScrollPosition = 0;
let isScrollingToAnchor = false;
let isTogglingMenu = false;

const toggleMenu = () => {
  if (!isMobile.value) return;

  isTogglingMenu = true;
  isOpen.value = !isOpen.value;
  scrollingUp.value = true;
  lastScrollPosition = window.scrollY;

  window.dispatchEvent(new CustomEvent('menu-toggle'));

  setTimeout(() => {
    isTogglingMenu = false;
    lastScrollPosition = window.scrollY;
  }, 100);
};

const handleScroll = () => {
  if (window.innerWidth > 768) return;
  if (isScrollingToAnchor) return;
  if (isTogglingMenu) return;

  const current = window.scrollY;
  scrollingUp.value = current < lastScrollPosition;
  lastScrollPosition = current;
};

const handleLinkClick = async (event, id) => {
  event.preventDefault();

  const target = document.getElementById(id);

  if (!target) return;

  const currentPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + currentPosition;

  if (targetPosition > currentPosition) {
    window.dispatchEvent(new CustomEvent('anchor-scroll-down'));
  }

  scrollingUp.value = true;
  isScrollingToAnchor = true;

  await nextTick();

  target.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    isScrollingToAnchor = false;
  }, 800);
};

const isOpen = ref(false);
const isMobile = ref(false);

const updateViewport = () => {
  isMobile.value = window.innerWidth <= 768;

  if (!isMobile.value) {
    isOpen.value = true;
  }
};

let observer;

onMounted(() => {
  updateViewport();
  window.addEventListener('resize', updateViewport);
  window.addEventListener('scroll', handleScroll);
  const headings = document.querySelectorAll('.page-content section h2');

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.closest('section').id;
        }
      });
    },
    {
      rootMargin: '-190px 0px -60% 0px',
      threshold: 0,
    },
  );

  headings.forEach((heading) => observer.observe(heading));
});

onBeforeUnmount(() => {
  observer?.disconnect();
  window.removeEventListener('resize', updateViewport);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="local-navigation" :class="{ 'scrolling-up': scrollingUp }">
    <h5 class="navigation-title" @click="toggleMenu">
      Auf dieser Seite
      <span v-if="isMobile">
        {{ isOpen ? '▲' : '▼' }}
      </span>
    </h5>

    <div class="navigation-links" :class="{ open: isOpen || !isMobile }">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: activeSection === item.id }"
        @click="handleLinkClick($event, item.id)"
      >
        {{ item.title }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.local-navigation {
  position: sticky;
  top: 200px;
  flex-shrink: 0;
  width: 300px;
  padding: 1.5rem 2rem;
  background-color: rgb(191 218 195);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.navigation-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.local-navigation h5 {
  margin-top: 0;
  font-weight: bold;
}

.local-navigation a {
  position: relative;
  display: block;
  padding-left: 1rem;
  color: black;
  text-decoration: none;
}

.local-navigation a.active {
  font-weight: bold;
}

.local-navigation a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: rgb(0 107 14 / 25%);
  border-radius: 2px;
}

.local-navigation a.active::before {
  background-color: #006b0e;
}

.navigation-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (width <= 768px) {
  .homepage-content,
  .emission-data-content {
    flex-direction: column;
    margin: 1rem;
  }

  .local-navigation {
    position: relative;
    top: auto;
    width: 100%;
    box-sizing: border-box;
  }

  .local-navigation.scrolling-up {
    position: sticky;
    top: 125px;
    animation: slide-down 0.3s ease;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-15px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .local-navigation h5 {
    font-size: 0.95rem;
  }

  .local-navigation a {
    font-size: 0.85rem;
  }

  .filters {
    flex-direction: column;
    gap: 1rem;
  }

  .navigation-title {
    cursor: pointer;
  }

  .navigation-links {
    display: none;
  }

  .navigation-links.open {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
