<template>
  <main class="legal-notice-page">
    <div class="page-content">
      <h1>Rechtliche Hinweise</h1>

      <section>
        <h2>Hinweis zu den bereitgestellten Informationen</h2>

        <p>
          Die auf dieser Website bereitgestellten Informationen dienen der allgemeinen Information
          über CO₂-Emissionen von Unternehmen und deren Bedeutung für den Klimaschutz.
        </p>

        <p>
          Die dargestellten Daten und Inhalte wurden im Rahmen eines Hochschulprojekts erstellt und
          dienen insbesondere der Veranschaulichung und dem Vergleich von CO₂-Emissionen. Sie
          stellen keine verbindliche wissenschaftliche, wirtschaftliche oder rechtliche Beratung
          dar.
        </p>
      </section>

      <section>
        <h2>Hinweis zu den Emissionsdaten</h2>

        <p>
          Die auf dieser Website dargestellten Emissionsdaten sind ausschließlich fiktiv und dienen
          zu Demonstrations- und Vergleichszwecken. Sie stellen keine offiziellen oder verifizierten
          Angaben zu den tatsächlichen CO₂-Emissionen der genannten Unternehmen dar.
        </p>

        <p>
          Die Daten dürfen daher nicht als Grundlage für wirtschaftliche, politische oder sonstige
          Entscheidungen verwendet werden.
        </p>
      </section>

      <section>
        <h2>Externe Links</h2>

        <p>
          Diese Website kann Verweise und Links auf externe Websites enthalten. Auf die Inhalte
          externer Websites haben wir keinen Einfluss und übernehmen daher keine Verantwortung für
          deren Inhalte.
        </p>

        <p>
          Für die Inhalte der verlinkten Seiten ist ausschließlich der jeweilige Betreiber
          verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>

        <p>
          Die auf dieser Website veröffentlichten Inhalte und Gestaltungselemente unterliegen,
          soweit nicht anders angegeben, dem geltenden Urheberrecht.
        </p>

        <p>
          Die Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung der Inhalte
          außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung der jeweiligen
          Rechteinhaber.
        </p>
      </section>

      <section>
        <h2>Keine Gewähr für Aktualität und Vollständigkeit</h2>

        <p>
          Wir bemühen uns, die auf dieser Website bereitgestellten Informationen aktuell und
          vollständig zu halten. Dennoch kann keine Gewähr für die Richtigkeit, Vollständigkeit oder
          Aktualität der Inhalte übernommen werden.
        </p>
      </section>

      <section>
        <h2>Änderungen der Inhalte</h2>

        <p>
          Wir behalten uns vor, Inhalte dieser Website jederzeit ohne vorherige Ankündigung zu
          ändern, zu ergänzen oder zu entfernen.
        </p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.legal-notice-page {
  width: 100%;
}

.page-content {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.page-content h1 {
  margin-bottom: 2rem;
}

.page-content section {
  margin-top: 3rem;
}

.page-content h2 {
  margin-bottom: 1rem;
}

.page-content p {
  line-height: 1.6;
}

@media (width <= 768px) {
  .page-content {
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
  }

  .page-content h1 {
    font-size: 1.7rem;
  }

  .page-content h2 {
    font-size: 1.3rem;
  }

  .page-content p {
    font-size: 1rem;
  }
}
</style>
