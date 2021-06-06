// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

// cypress/support/index.ts
Cypress.Commands.add('dataCy', value => {
  return cy.get(`[data-cy=${value}]`);
});

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>;
  }
}

// Ignores XHR request check
Cypress.Server.defaults({
  delay: 500,
  force404: false,
  ignore: xhr => {
    // handle custom logic for whitelisting
    return true;
  },
});
