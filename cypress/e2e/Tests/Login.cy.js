describe('Near Me Application', () => {
    const users = [
        { username: 'divyaka77@gmail.com', password: 'Newyear@2020' },
        { username: 'invalidUser@example.com', password: 'wrongPassword' }
    ];
    beforeEach(() => {
      cy.visit('/'); // Visits the homepage
    });
    it('Should check if the login link exists', () => {
        cy.get('a[href="/login"]').click();
    });

    it('Should be able to register', () => {
        cy.get('a[href="/signup"]').click();
    }); 
    users.forEach((user) => {
        it(`Should attempt login with username: ${user.username}`, () => {
            cy.get('a[href="/login"]').click();
            cy.get('input[id="email"]').clear().type(user.username);
            cy.get('input[id="password"]').clear().type(user.password);
            cy.get('button[type="submit"].btn').click();
            cy.url().should('include', '/home');
        //     if (user.username === 'invalidUser@example.com') {
        //     cy.contains('auth/user-not-found').should('be.visible');
        // } else {
        //     cy.url().should('not.include', '/login'); // For valid login
        //     }
        });
    });
});