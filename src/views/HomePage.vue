<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeSection = ref('co2-footprint');

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
      rootMargin: '-190px 0px -50% 0px',
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
  <main class="homepage">
    <section class="hero">
      <img src="/images/wald.jpg" alt="Dichter grüner Tannenwald aus der Vogelperspektive" />

      <div class="hero-text">
        <h1>CO₂ Fußabdruck</h1>
        <p>
          Erfahre mehr über die CO₂-Emissionen von Unternehmen und ihren Einfluss auf unsere Umwelt.
        </p>
      </div>
    </section>
    <div class="homepage-content">
      <nav class="local-navigation" aria-label="Seitennavigation">
        <h5>Auf dieser Seite</h5>
        <a href="#co2-footprint" :class="{ active: activeSection === 'co2-footprint' }"
          >Was ist ein CO₂-Fußabdruck?</a
        >
        <a href="#importance" :class="{ active: activeSection === 'importance' }"
          >Warum ist das wichtig?</a
        >
        <a href="#data" :class="{ active: activeSection === 'data' }">Transparenz</a>
      </nav>

      <div class="page-content">
        <section id="co2-footprint">
          <h2>Was ist ein CO₂-Fußabdruck?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            consectetuer.
          </p>
        </section>

        <section id="importance">
          <h2>Warum ist das wichtig?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            consectetuer.
          </p>
        </section>

        <section id="data">
          <h2>Transparenz</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            consectetuer.
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.homepage {
  width: 100%;
}

.hero {
  position: relative;
  margin: 2rem 2rem 0;
  border-radius: 12px;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-weight: bold;
}

.hero-text h1 {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.hero-text p {
  margin: 0;
  font-size: 1.5rem;
}

.homepage-content {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  margin: 2rem;
}

.page-content section {
  scroll-margin-top: 190px;
}

.local-navigation {
  position: sticky;
  top: 200px;
  flex-shrink: 0;
  width: fit-content;
  padding: 1.5rem 2rem;
  background-color: rgb(0 107 14 / 25%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.local-navigation a.active {
  font-weight: bold;
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
  background-color: #006b0eff;
}
</style>
