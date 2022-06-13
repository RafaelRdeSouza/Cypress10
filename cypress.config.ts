import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automacaocombatista.herokuapp.com/treinamento/home',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: 'cypress/scripts/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});