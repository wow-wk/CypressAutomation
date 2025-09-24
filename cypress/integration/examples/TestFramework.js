describe('End to End Ecommerce Test', function() {
    it('Submit Order', function() {
        const username = 'rahulshettyacademy'
        const password = 'learning'
        const productName = 'Nokia Edge'
        let sum = 0

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        cy.get('app-card').filter(`:contains("${productName}")`).then($element => {
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