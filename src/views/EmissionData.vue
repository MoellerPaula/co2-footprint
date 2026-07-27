<script setup>
import { ref, computed } from 'vue';
import emissions from '../data/emissions.json';

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
      selectedCountry.value === '' ||
      emission.country === selectedCountry.value;

    const matchesCompany =
      selectedCompany.value === '' ||
      emission.company === selectedCompany.value;

    return matchesCountry && matchesCompany;
  });
});
</script>

<template>
  <div class="emission-data">
    <h1>CO₂-Emissionen von Unternehmen</h1>

    <p class="introduction">
      Die folgende Übersicht zeigt die CO₂-Emissionen verschiedener
      Unternehmen und Länder. Nutzen Sie die Filter, um gezielt nach
      einem Unternehmen oder einem Land zu suchen und die Daten
      miteinander zu vergleichen.
    </p>

    <div class="filters">
      <div class="filter">
        <label for="country-filter">Land:</label>

        <select id="country-filter" v-model="selectedCountry">
          <option value="">Alle Länder</option>

          <option
            v-for="country in countries"
            :key="country"
            :value="country"
          >
            {{ country }}
          </option>
        </select>
      </div>

      <div class="filter">
        <label for="company-filter">Unternehmen:</label>

        <select id="company-filter" v-model="selectedCompany">
          <option value="">Alle Unternehmen</option>

          <option
            v-for="company in companies"
            :key="company"
            :value="company"
          >
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
        <tr
          v-for="emission in filteredEmissions"
          :key="emission.company"
        >
          <td>{{ emission.company }}</td>
          <td>{{ emission.country }}</td>
          <td>{{ emission.emissions.toLocaleString('de-DE') }} t</td>
        </tr>
      </tbody>
    </table>

    <section class="data-context">
      <h2>Einordnung der Daten</h2>

      <p>
        Die dargestellten Werte dienen der Übersicht und dem Vergleich
        der CO₂-Emissionen. Die Höhe der Emissionen kann von verschiedenen
        Faktoren beeinflusst werden, beispielsweise von der Größe eines
        Unternehmens, seiner Branche und seinen Produktionsstandorten.
        Ein direkter Vergleich zwischen Unternehmen sollte daher immer
        unter Berücksichtigung dieser Faktoren erfolgen.
      </p>
    </section>

  </div>
</template>

<style scoped>
.emission-data {
  margin: 2rem;
}

.emission-data h1 {
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
  background-color: rgb(0 107 14 / 80%);
  color: white;
}

.emission-data tr:hover {
  background-color: #f5f5f5;
}

.emission-data tbody tr:last-child td {
  border-bottom: none;
}

.emission-data tbody tr:nth-child(even) {
  background-color: rgb(0 107 14 / 15%);
}

.introduction {
  margin-bottom: 3rem;
}

.data-context {
  margin-top: 4rem;
}

.data-context h2 {
  margin-bottom: 1rem;
}
</style>