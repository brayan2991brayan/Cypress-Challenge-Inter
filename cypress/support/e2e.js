// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import page objects
import './page-objects/forms.page'

// Import utilities
import './utils/data-generator'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
  app.console.log = () => {};
}

// Global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the error
  console.error('Uncaught exception:', err.message);
  
  // Take a screenshot
  cy.screenshot(`error-${Date.now()}`);
  
  // Return false to prevent the test from failing
  return false;
});

// Global configuration
Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('pageLoadTimeout', 30000);

// Custom error messages
Cypress.on('fail', (error, runnable) => {
  // Log the error
  console.error('Test failed:', error.message);
  
  // Take a screenshot
  cy.screenshot(`failure-${Date.now()}`);
  
  // Throw the error to fail the test
  throw error;
});

// Before each test
beforeEach(() => {
  // Clear cookies and local storage
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Set viewport
  cy.viewport(1280, 720);
});