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
    <div class="homepage-content d-flex align-items-start gap-5">
      <LocalNavigation :items="navigationItems" />

      <div class="page-content">
        <section id="co2-footprint">
          <h2>Was ist ein CO₂-Fußabdruck?</h2>
          <p>
            Der CO₂-Fußabdruck beschreibt die Menge an Treibhausemissionen, die durch eine Person,
            ein Unternehmen, ein Produkt oder eine bestimmte Tätigkeit verursacht wird. Dabei werden
            neben Kohlendioxid (CO₂) auch andere Treibhausgase wie Methan (CH₄) und
            Distickstoffmonoxid (N₂O) berücksichtigt, die in CO₂-Äquivalente umgerechnet werden. Bei
            Unternehmen entstehen Emissionen beispielsweise durch die Nutzung von Energie,
            Produktionsprozesse, Transporte oder die Herstellung und Verwendung von Materialien. Der
            CO₂-Fußabdruck hilft dabei, die verschiedenen Emissionsquellen sichtbar zu machen und
            ihre Auswirkungen auf das Klima besser einzuschätzen.
          </p>
        </section>

        <section id="importance">
          <h2>Warum ist das wichtig?</h2>
          <p>
            Treibhausgasemissionen tragen wesentlich zur Erwärmung der Erde und damit zum
            fortschreitenden Klimawandel bei. Durch den zunehmenden Ausstoß von Treibhausgasen
            verstärkt sich der natürliche Treibhauseffekt, wodurch sich die globale
            Durchschnittstemperatur erhöht. Die Folgen sind bereits heute sichtbar und umfassen
            unter anderem häufigere und intensivere Hitzewellen, veränderte Niederschlagsmuster, das
            Abschmelzen von Gletschern sowie einen steigenden Meeresspiegel. Auch Ökosysteme,
            Landwirtschaft und die Lebensbedingungen vieler Menschen können dadurch beeinträchtigt
            werden. Gleichzeitig können sich langfristige Veränderungen nur begrenzt rückgängig
            machen lassen. Deshalb ist es wichtig, die Entstehung von Treibhausgasemissionen zu
            reduzieren und Maßnahmen zum Klimaschutz frühzeitig umzusetzen.
          </p>
        </section>

        <section id="transparency">
          <h2>Transparenz</h2>
          <p>
            Transparenz über CO₂-Emissionen schafft eine Grundlage dafür, die Klimawirkung von
            Unternehmen nachvollziehbar darzustellen. Durch die übersichtliche Aufbereitung von
            Emissionsdaten können Unterschiede zwischen Unternehmen und Ländern leichter erkannt und
            miteinander verglichen werden. Gleichzeitig ermöglicht eine transparente Darstellung,
            Entwicklungen über einen bestimmten Zeitraum zu beobachten und Veränderungen sichtbar zu
            machen. Auf dieser Website werden Emissionsdaten beispielhaft dargestellt und können
            nach verschiedenen Kriterien betrachtet und gefiltert werden. Dadurch soll
            veranschaulicht werden, wie umfangreiche Daten verständlich aufbereitet und miteinander
            verglichen werden können. Die auf dieser Website verwendeten Werte sind dabei
            ausschließlich fiktiv und stellen keine tatsächlichen Emissionswerte der dargestellten
            Unternehmen oder Länder dar. Eine transparente Darstellung von Emissionsdaten kann
            grundsätzlich dazu beitragen, Informationen zugänglicher zu machen und ein besseres
            Verständnis für die Größenordnung von Treibhausgasemissionen zu schaffen. Gleichzeitig
            ermöglicht sie es, Zusammenhänge und Unterschiede zwischen verschiedenen Datensätzen
            leichter zu erkennen.
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

@media (width <= 768px) {
  .hero {
    margin: 1rem;
  }

  .hero img {
    height: 220px;
  }

  .hero-text {
    width: 85%;
  }

  .hero-text h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .hero-text p {
    font-size: 1rem;
  }
}
</style>
