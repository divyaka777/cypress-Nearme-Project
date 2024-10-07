import HomePage from "../Pages/HomePage";

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