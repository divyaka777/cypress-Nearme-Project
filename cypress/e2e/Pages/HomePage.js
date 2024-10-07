// cypress/e2e/pages/HomePage.js

class HomePage {
    visit() {
      cy.visit('/'); // Visits the homepage
    }
    clickLoginLink() {
        cy.get('a[href="/login"]').click();
    }
    clickSignUpLink() {
        cy.get('a[href="/signup"]').click();
    }
    submit() {
        cy.get('button[type="submit"].btn').click();
    }
}
export default HomePage;