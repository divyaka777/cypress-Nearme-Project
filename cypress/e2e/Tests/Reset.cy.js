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