import { LoginPage } from "../page-objects/login-page";

interface TestCase {
  language: string;
  titleText: string;
  logInBtn: string;
  ssoLogInBtn: string;
  privacyPolicyLink: string;
}

const testCase: TestCase[] = [
  {
    language: "fr",
    titleText: "Connexion",
    logInBtn: "Se connecter",
    ssoLogInBtn: "Se connecter via le SSO",
    privacyPolicyLink: "En savoir plus sur notre Politique de confidentialité.",
  },
  {
    language: "es",
    titleText: "Iniciar sesión",
    logInBtn: "Iniciar sesión",
    ssoLogInBtn: "Login with SSO",
    privacyPolicyLink: "Más información sobre nuestra Política de privacidad.",
  },
  {
    language: "en",
    titleText: "Sign in to your account",
    logInBtn: "Sign in",
    ssoLogInBtn: "Sign in with SSO",
    privacyPolicyLink: "Learn more about our Privacy Policy.",
  },
];

describe("Set 02", () => {
  afterEach(() => {
    cy.clearAllCookies();
  });

  for (const {
    language,
    titleText,
    logInBtn,
    ssoLogInBtn,
    privacyPolicyLink,
  } of testCase) {
    it(`TC02| Localization loop for the ${language} language`, () => {
      cy.intercept("GET", "/pulsar/locale/*/translation.json", (req) => {
        req.url = req.url.replace(
          "/pulsar/locale/en/translation.json",
          `/pulsar/locale/${language}/translation.json`
        );
      });
      cy.visit(Cypress.env("baseURL"));

      LoginPage.elements.title().should("have.text", `${titleText}`);

      LoginPage.elements.signInBtn().should("have.text", `${logInBtn}`);

      LoginPage.elements.ssoSignInBtn().should("have.text", `${ssoLogInBtn}`);

      LoginPage.elements
        .privacyPolicyLink()
        .should("have.text", `${privacyPolicyLink}`);
    });
  }
});
