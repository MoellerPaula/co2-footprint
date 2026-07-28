<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const activeSection = ref(props.items[0]?.id || '');

let observer;

onMounted(() => {
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
});
</script>

<template>
  <nav class="local-navigation">
    <h5>Auf dieser Seite</h5>

    <a
      v-for="item in items"
      :key="item.id"
      :href="`#${item.id}`"
      :class="{ active: activeSection === item.id }"
    >
      {{ item.title }}
    </a>
  </nav>
</template>

<style scoped>
.local-navigation {
  position: sticky;
  top: 200px;
  flex-shrink: 0;
  width: 300px;
  padding: 1.5rem 2rem;
  background-color: rgb(0 107 14 / 25%);
  border-radius: 12px;
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
</style>