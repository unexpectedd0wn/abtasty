// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('SignIn', (email, password) => {
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type(password);
    cy.get('[type="submit"]').click();
})
