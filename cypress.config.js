const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'DemoQA Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    env: {
      allure: true,
      allureReuseExistingTestFiles: true
    }
  },
});
