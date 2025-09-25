const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
