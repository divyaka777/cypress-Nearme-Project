import HomePage from "../Pages/HomePage";
import ResetPage from "../Pages/Resetpage";

describe('Near Me Application', () => {
    const homePage = new HomePage();
    const resetPage = new ResetPage();

    beforeEach(() => {
      cy.visit('/'); // Visits the homepage
    });
    it('Should be able to reset password', () => {
        homePage.clickLoginLink();
        resetPage.navigateToResetPage();
        cy.get('input[id="email"]').clear().type('divyaka77@gmail.com');
        homePage.submit();

        
    });

    it('Should be able to register', () => {
        homePage.clickSignUpLink();
    }); 
    it('Should attempt login with valid credentials', () => {
            homePage.clickLoginLink();
            cy.get('input[id="email"]').clear().type('divyaka77@gmail.com');
            homePage.submit();
        
        });
    });
