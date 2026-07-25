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
</style>
