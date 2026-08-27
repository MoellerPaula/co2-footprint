<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img src="../assets/LogoCO2Fußabdruck.negativ.svg" alt="Logo" />

        <h2>CO₂ Fußabdruck</h2>
      </div>

      <nav class="footer-navigation" aria-label="Rechtliche Informationen">
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
        <RouterLink to="/rechtliche-hinweise">Rechtliche Hinweise</RouterLink>
      </nav>
    </div>

    <div class="image-credit">
      Hero-Bild:
      <a
        href="https://www.pexels.com/de-de/foto/vogelperspektive-wald-baume-luftaufnahme-3923724/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pok Rie / Pexels
      </a>
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

.image-credit {
  padding-bottom: 1rem;
  text-align: center;
  font-size: 0.8rem;
}

.image-credit a {
  color: white;
  text-decoration: none;
}

.image-credit a:hover {
  text-decoration: underline;
}

@media (width <= 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .footer-brand {
    gap: 0.75rem;
  }

  .footer-brand img {
    width: 2.5rem;
    height: auto;
  }

  .footer-brand h2 {
    font-size: 1.3rem;
  }

  .footer-navigation {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .footer-navigation a {
    font-size: 0.85rem;
  }
}
</style>
