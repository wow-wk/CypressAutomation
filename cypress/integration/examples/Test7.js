/// <reference types='Cypress'/>

describe('Handling Mouse Hover Event', function() {
    it('Should handle mouse hover', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        // cy.contains('Top').click({ force: true }) // If you don't want to invoke, you can force it too.
        cy.url().should('include', 'top')
    })
})
