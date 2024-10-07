
class LoginPage {
    enterEmail(email) {
        cy.get('input[id="email"]').clear().type(email);
    }
    enterPassword(password) {
        cy.get('input[id="password"]').clear().type(password);
    }
}
export default LoginPage;