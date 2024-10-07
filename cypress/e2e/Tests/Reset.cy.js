<<<<<<< HEAD
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

describe('Near Me Application', () => {
    const homePage = new HomePage();

    beforeEach(() => {
      cy.visit('/'); // Visits the homepage
    });
    it('Should check if the login link exists', () => {
        homePage.clickLoginLink();
    });

    it('Should be able to register', () => {
        homePage.clickSignUpLink();
    }); 
    it('Should attempt login with valid credentials', () => {
            homePage.clickLoginLink();
            cy.get('input[id="email"]').clear().type('divyaka77@gmail.com');
            cy.get('input[id="password"]').clear().type('Newyear@2020');
            homePage.submit();
        });
    });
=======
describe('Near Me Application', () => {
    beforeEach(() => {
      cy.visit('/'); // Visits the homepage
    });
    it('Should verify the reset functionality ', () => {
        cy.fixture('user').then((user)  =>  { 
            cy.get('a[href="/login"]').click();
            cy.get('a[href="/reset"]').click();
            cy.get('input[id="email"]').clear().type(user.email);
            cy.get('button[type="submit"].btn').click();
        });
    });
    it('Should display a confirmation message after requesting a password reset', () => {
        // Load user fixture
        cy.fixture('user').then((user) => {
            cy.get('a[href="/login"]').click();
            cy.get('a[href="/reset"]').click();
            cy.get('input[id="email"]').clear().type(user.email);
            cy.get('button[type="submit"]').click();
          // Assert that the confirmation message is visible
            cy.contains('Email with password reset request has been sent.').should('be.visible');
        });
    });
});
>>>>>>> origin/chore/include-logintest
