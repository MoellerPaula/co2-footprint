<template>
  <header class="ps-5 pt-5">
    <div class="d-flex align-items-center gap-5">
      <img src="../assets/LogoCO2Fußabdruck3.svg" alt="Logo" />
      <h1>CO₂ Fußabdruck</h1>
    </div>

    <nav class="d-flex justify-content-end gap-5">
      <a href="#" class="active"> Startseite </a>
      <a href="#">Emissionsdaten</a>
    </nav>
  </header>
</template>

<style scoped>
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
}

a {
  color: #006b0eff;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

a.active {
  border-bottom: 2px solid #006b0eff;
}
</style>
