<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img
          src="../assets/LogoCO2Fußabdruck.negativ.svg"
          alt="Logo"
        />

        <h2>CO₂ Fußabdruck</h2>
      </div>

      <nav class="footer-navigation" aria-label="Rechtliche Informationen">
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
        <RouterLink to="/rechtliche-hinweise">Rechtliche Hinweise</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #006b0eff;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-brand img {
  width: 45px;
  height: auto;
}

.footer-brand h2 {
  margin: 0;
  font-size: 1.5rem;
}

.footer-navigation {
  display: flex;
  gap: 2rem;
}

.footer-navigation a {
  color: white;
  text-decoration: none;
}
</style>