/// <reference types='cypress-iframe' />
import 'cypress-iframe'

describe('Handling with Frames', function() {
    it('Frames Test', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Loaded frame into object
        cy.frameLoaded('#courses-iframe')

        // Switch to iframe mode
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})
