<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const activeSection = ref(props.items[0]?.id || '');
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
});
</script>

<template>
  <nav class="local-navigation">
    <h5 class="navigation-title" @click="isMobile && (isOpen = !isOpen)">
      Auf dieser Seite
      <span v-if="isMobile">
        {{ isOpen ? '▲' : '▼' }}
      </span>
    </h5>

    <div class="navigation-links" :class="{ open: isOpen || !isMobile }" >
    <a
      v-for="item in items"
      :key="item.id"
      :href="`#${item.id}`"
      :class="{ active: activeSection === item.id }"
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
    align-items: stretch;
  }

  .local-navigation {
    width: 100%;
    box-sizing: border-box;
  }

  .filters {
    flex-direction: column;
    gap: 1rem;
  }

  .navigation-title {
    position: sticky;
    cursor: pointer;
    z-index: 10;
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
