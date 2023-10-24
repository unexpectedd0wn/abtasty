import { LoginPage } from "../page-objects/login-page";
import { passwordGenerator, emailGenerator } from "../support/utils";

describe("Set 03", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  beforeEach(() => {
    cy.clearAllCookies();
  });

  it("TC03.01| SignIn button style", () => {
    LoginPage.getSignInBtn()
      .should("have.css", "background-color", "rgb(87, 184, 199)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "height", "48px");
  });

  it("TC03.02| SignIn button condition", () => {
    LoginPage.getSignInBtn().should("be.disabled");
    let email = emailGenerator();
    LoginPage.typeEmail(email);
    LoginPage.getSignInBtn().should("be.disabled");
    let pass = passwordGenerator();
    LoginPage.typePassword(pass);
    LoginPage.getSignInBtn().should("be.enabled");
  });

  it("TC03.03| Password text filed style", () => {
    LoginPage.getPasswordElement()
      .should("have.css", "height", "38px")
      .and("have.attr", "placeholder", "At least 12 characters");
  });

  it("TC03.04| Email text filed style", () => {
    LoginPage.getEmailElement()
      .should("have.css", "height", "38px")
      .and("have.attr", "placeholder", "name@abtasty.com");
  });
});
