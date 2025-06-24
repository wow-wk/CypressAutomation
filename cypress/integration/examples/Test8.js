/// <reference types='Cypress'/>

describe('Handling Child Windows', function() {
    it('Handling child windows with grab url', function () {
        // Rahulshetty Domain
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            // Want to cross domain, change origin domain
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
})
