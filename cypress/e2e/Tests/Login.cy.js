import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

describe('Near Me Application', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/'); // Visits the homepage
  });
  it('User should check if the login link exists', () => {
    homePage.clickLoginLink();
  });

  it('User should be able to register', () => {
    homePage.clickSignUpLink();
  });

  it('User should be able to navigate back to the home screen', () => {
    homePage.clickLoginLink();
    homePage.back();
    cy.url().should('eq', 'https://nearme-aa587.web.app/');
  });

  it('User should be able to attempt login with valid credentials', () => {
    homePage.clickLoginLink();
    cy.get('input[id="email"]').clear().type('divyaka77@gmail.com');
    homePage.submit();
  });
});
