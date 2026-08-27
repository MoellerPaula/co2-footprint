# CO2-Fußabdruck

Webanwendung zur übersichtlichen Darstellung und zum Vergleich von CO₂-Emissionen verschiedener Unternehmen und Länder.

Die Webseite wurde im Rahmen eines Hochschulprojekts entwickelt. Die dargestellten Emissionswerte sind fiktiv und dienen ausschließlich der Veranschaulichung.

## Funktionen

- Filterung und Sortierung der Emissionsdaten nach Unternehmen, Land und Emissionshöhe
- Globale Navigation zwischen den Seiten
- Lokale Navigation innerhalb der Seiten
- Anpassung der lokalen Navigation an die Schreibrichtung (LTR/RTL)
- Responsive Darstellung
- Footer mit rechtlichen Hinweisen

## Technologien

- Vue 3
- Vite
- JavaScript
- HTML5
- CSS3
- ESLint
- Prettier

## Installation und Ausführung

Voraussetzung für die Ausführung des Projekts ist eine installierte Node.js-Version.

1. Repository klonen:

   ```bash
   git clone <repository-url>
   cd co2-footprint
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

3. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

## Projektstruktur

```text
src/
├── assets/
├── components/
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   └── LocalNavigation.vue
├── data/
│   └── emissions.json
├── router/
│   └── index.js
├── views/
│   ├── HomePage.vue
│   └── EmissionData.vue
├── App.vue
├── main.js
└── style.css
```
