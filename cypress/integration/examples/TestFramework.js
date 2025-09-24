import HomePage from '../../support/pageObjects/HomePage'

describe('End to End Ecommerce Test', function() {
    before(function() {
        // Runs once before all tests in this block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })

    it('Submit Order', function() {
        let sum = 0
        const homepage = new HomePage()
        
        homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')
        homepage.login(this.data.username, this.data.password)
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        cy.get('app-card').filter(`:contains("${this.data.productName}")`).then($element => {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()
        })
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()
        cy.get('tr td:nth-child(4) strong').each($element => {
            const amount = Number($element.text().split(' ')[1].trim())
            sum = sum + amount
        }).then(() => {
            expect(sum).to.be.lessThan(200000)
        })

        cy.contains('button', 'Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions ul li a', { timeout: 10000 }).should('be.visible').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain', 'Success')
    })
})