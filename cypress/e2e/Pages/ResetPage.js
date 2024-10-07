
class ResetPage {
    getEmailInput() {
        return cy.get('input[id="email"]'); 
    }
    getSubmitButton() {
        return cy.get('button[type="submit"]');  
    }
    getConfirmationMessage() {
        return cy.contains('Password reset email sent');  
    }
    navigateToResetPage() {
        cy.visit('/login'); 
        cy.get('a[href="/reset"]').click();  
    }
    enterEmail(email) {
        
        this.getEmailInput().clear().type(email);
    }
    submitRequest() { this.getSubmitButton().click();
    }
    verifyConfirmationMessage() {
            this.getConfirmationMessage().should('be.visible');
    }
}export default ResetPage;