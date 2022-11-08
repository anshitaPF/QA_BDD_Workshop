const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8wkb3r",
  CYPRESS_RECORD_KEY: '0df979c1-fec2-4d90-a70e-2512386723a4',

  e2e: {
    baseUrl: "https://pfflex.mycrm.com/auth/sign-in",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },


    specPattern: 'cypress/e2e/features/*/*.feature',
    excludeSpecPattern: "**/cypress/pages/*,cypress/integration/step-definition/*",
    experimentalSessionAndOrigin: false,
    failOnStatusCode: false,
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 8000,
    watchForFileChanges: false,


    "retries": {

      "runMode": 1,

      "openMode": 1
    },
  }
});
