describe('My Fourth Test Suite', function() {
    it('My First Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Popup
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // Browser Event - window:alert
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})
