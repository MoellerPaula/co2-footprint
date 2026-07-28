<script setup>
import { ref, computed } from 'vue';
import emissions from '../data/emissions.json';
import LocalNavigation from '../components/LocalNavigation.vue';

const navigationItems = [
  {
    id: 'overview',
    title: 'Überblick',
  },
  {
    id: 'emission-data',
    title: 'Emissionsdaten',
  },
  {
    id: 'data-context',
    title: 'Einordnung der Daten',
  },
];

const selectedCountry = ref('');
const selectedCompany = ref('');

const countries = computed(() => {
  return [...new Set(emissions.map((emission) => emission.country))];
});

const companies = computed(() => {
  return [...new Set(emissions.map((emission) => emission.company))];
});

const filteredEmissions = computed(() => {
  return emissions.filter((emission) => {
    const matchesCountry =
      selectedCountry.value === '' || emission.country === selectedCountry.value;

    const matchesCompany =
      selectedCompany.value === '' || emission.company === selectedCompany.value;

    return matchesCountry && matchesCompany;
  });
});
</script>

<template>
  <div class="emission-data">
    <div class="emission-data-content">
      <LocalNavigation :items="navigationItems"/>

      <div class="page-content">
        <section id="overview">
          <h2>CO₂-Emissionen von Unternehmen</h2>

          <p class="introduction">
            Die folgende Übersicht zeigt die CO₂-Emissionen verschiedener Unternehmen und Länder.
            Nutzen Sie die Filter, um gezielt nach einem Unternehmen oder einem Land zu suchen und
            die Daten miteinander zu vergleichen.
          </p>
        </section>

        <section id="emission-data">
          <h2>Emissionsdaten</h2>
          <div class="filters">
            <div class="filter">
              <label for="country-filter">Land:</label>

              <select id="country-filter" v-model="selectedCountry">
                <option value="">Alle Länder</option>

                <option v-for="country in countries" :key="country" :value="country">
                  {{ country }}
                </option>
              </select>
            </div>

            <div class="filter">
              <label for="company-filter">Unternehmen:</label>

              <select id="company-filter" v-model="selectedCompany">
                <option value="">Alle Unternehmen</option>

                <option v-for="company in companies" :key="company" :value="company">
                  {{ company }}
                </option>
              </select>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Unternehmen</th>
                <th>Land</th>
                <th>CO₂-Emissionen</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="emission in filteredEmissions" :key="emission.company">
                <td>{{ emission.company }}</td>
                <td>{{ emission.country }}</td>
                <td>{{ emission.emissions.toLocaleString('de-DE') }} t</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="data-context">
          <h2>Einordnung der Daten</h2>

          <p>
            Die dargestellten Werte dienen der Übersicht und dem Vergleich der CO₂-Emissionen. Die
            Höhe der Emissionen kann von verschiedenen Faktoren beeinflusst werden, beispielsweise
            von der Größe eines Unternehmens, seiner Branche und seinen Produktionsstandorten. Ein
            direkter Vergleich zwischen Unternehmen sollte daher immer unter Berücksichtigung dieser
            Faktoren erfolgen.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emission-data {
  width: 100%;
}

.emission-data-content {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  margin: 2rem;
}

.page-content {
  flex: 1;
}

.page-content section {
  scroll-margin-top: 190px;
}

.introduction {
  margin-bottom: 3rem;
}

.filters {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.filter label {
  margin-right: 1rem;
  font-weight: bold;
}

.filter select {
  padding: 0.5rem;
  border-radius: 8px;
}

.emission-data table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
}

.emission-data th,
.emission-data td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.emission-data th {
  background-color: rgb(0 107 14 / 70%);
  color: white;
}

.emission-data tbody tr:nth-child(even) {
  background-color: rgb(0 107 14 / 5%);
}

.emission-data tbody tr:hover {
  background-color: rgb(0 107 14 / 10%);
}

.emission-data tbody tr:last-child td {
  border-bottom: none;
}

.data-context {
  margin-top: 4rem;
}

.data-context h2 {
  margin-bottom: 1rem;
}

#emission-data {
  margin-top: 2rem;
}

#emission-data h2 {
  margin-bottom: 2rem;
}

#data-context {
  margin-top: 3rem;
  padding-bottom: 6rem;
}
</style>
