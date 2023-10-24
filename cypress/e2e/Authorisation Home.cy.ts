import { LoginPage } from "../page-objects/login-page";
import { passwordGenerator, emailGenerator } from "../support/utils";

describe("Set 01", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it("TC01.01| Successful authorisation", () => {
    cy.intercept("api/oauth/login").as("signIn");

    cy.fixture("example").then((data) => {
      cy.SignIn(data.validEmail, data.validPassword);
    });

    cy.wait("@signIn").then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it("TC01.02| User not authorised: Please enter a valid email or password", () => {
    cy.intercept("https://api.abtasty.com/api/oauth/login").as("signIn");

    let email = emailGenerator();
    let pass = passwordGenerator();
    cy.SignIn(`${email}`, `${pass}`);

    cy.wait("@signIn").then(({ response }) => {
      expect(response.statusCode).to.equal(400);
      LoginPage.getValidationError().should(
        "have.text",
        "Please enter a valid email or password"
      );
      cy.title().should("eq", "AB Tasty - Experience Optimization Platform");
    });
  });

  it("TC01.03| Captcha is shows after 3 attemps", () => {
    let email = emailGenerator();
    let pass = passwordGenerator();

    LoginPage.typeEmail(email);
    LoginPage.typePassword(pass);

    for (let i = 0; i < 3; i++) {
      LoginPage.clickOnLogin();

      LoginPage.getCaptcha(0).should("not.exist");
    }

    LoginPage.getCaptcha(20000)
    .should("be.visible");
  });

  it("TC01.04| Show/hide the password input", () => {
    let pass = passwordGenerator();
    LoginPage.typePassword(pass);

    LoginPage.getPasswordElement().should("have.attr", "type", "password");

    LoginPage.showPassword();
    LoginPage.getPasswordElement().should("have.attr", "type", "text");

    LoginPage.hidePassword();
    LoginPage.getPasswordElement().should("have.attr", "type", "password");
  });

  it('TC01.05| Click "Forgot your password?"', () => {
    cy.contains("Forgot your password?").click();
    cy.url().should("include", "/reset-password");
    cy.get("h1").should("have.text", "Reset your password");
  });

  it('TC01.06| Click "Sign in with SSO"', () => {
    LoginPage.clickOnSsoLogin();

    cy.url().should("include", "/ssologin");
    LoginPage.getSsoTitle().should("have.text", "Sign in with SSO");
  });
});
