describe('Handling Child Windows', function() {
    it('Should handle child window', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Remove open new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    
        // Change origin to another domain
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})
