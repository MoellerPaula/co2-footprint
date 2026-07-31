<script setup>
import LocalNavigation from '../components/LocalNavigation.vue';

const navigationItems = [
  {
    id: 'co2-footprint',
    title: 'Was ist ein CO₂-Fußabdruck?',
  },
  {
    id: 'importance',
    title: 'Warum ist das wichtig?',
  },
  {
    id: 'transparency',
    title: 'Transparenz',
  },
];
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
      <LocalNavigation :items="navigationItems" />

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

        <section id="transparency">
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

@media (width <= 768px) {
  .homepage-content {
    flex-direction: column;
    margin: 1rem;
  }
}

.page-content section {
  scroll-margin-top: 190px;
}
</style>
