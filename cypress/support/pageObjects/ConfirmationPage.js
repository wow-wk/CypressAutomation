class ConfirmationPage {
    submitFormDetails() {
        // cy.get('#country').type('India')
        // cy.get('.suggestions ul li a', { timeout: 10000 }).should('be.visible').click()
        // cy.get('.btn-success').click()
        cy.submitFormDetails()
    }

    getAlertMessage() {
        return cy.get('.alert-success')
    }
}

export default ConfirmationPage