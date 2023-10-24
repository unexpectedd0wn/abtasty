// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login to the  website.
     * @example cy.SignIn("username", "password")
     */
    SignIn(username: string, password: string): Chainable<void>;
  }
}
