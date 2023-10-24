export class Login {
  elements = {
    title: () => cy.get(".FormHeader-module__title___pvb2N"),
    signInBtn: () => cy.get(".FormButtonRow-module__buttonRow___GE1td > ._button_1qj29_184"),
    ssoSignInBtn: () => cy.get(".LoginForm-module__ssoSection___EysRZ > ._button_1qj29_184"),
    privacyPolicyLink: () => cy.get(".LoginPage-module__privacyPolicy___pf9XV"),
    emailTxt: () => cy.get("#email"),
    passwordTxt: () => cy.get("#password"),
    captcha: () => cy.get('[style="width: 304px; height: 78px;"] > div > iframe'),
    showPassIcon: () => cy.get('[data-testid="showIcon"]'),
    hidePassIcon: () => cy.get('[data-testid="hideIcon"]'),
    ssoTitle: () => cy.get(".SSOLoginPage-module__header___hH5nT"),
  };

  getSignInBtn() {
    return this.elements.signInBtn();
  }

  getSsoTitle() {
    return this.elements.ssoTitle();
  }
  clickOnLogin() {
    this.elements.signInBtn().click();
  }

  clickOnSsoLogin() {
    this.elements.ssoSignInBtn().click();
  }

  clickPrivacyLink() {
    this.elements.privacyPolicyLink().click();
  }

  getValidationError() {
    return cy.get(".LoginForm-module__commonError___i23iO");
  }

  typeEmail(email: string) {
    this.elements.emailTxt().clear().type(email);
  }

  getPasswordElement() {
    return this.elements.passwordTxt();
  }

  getEmailElement() {
    return this.elements.emailTxt();
  }

  typePassword(password: string) {
    this.elements.passwordTxt().clear().type(password);
  }

  getCaptcha(timeout: any) {
    return cy.get('[style="width: 304px; height: 78px;"] > div > iframe', {
      timeout: timeout,
    });
  }

  showPassword() {
    this.elements.showPassIcon().click();
  }

  hidePassword() {
    this.elements.hidePassIcon().click();
  }
}

export const LoginPage = new Login();
