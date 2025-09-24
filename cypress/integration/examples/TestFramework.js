import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('End to End Ecommerce Test', function() {
    before(function() {
        // Runs once before all tests in this block
        cy.fixture('example').then(function(data) {
            this.data = data
            this.homepage = new HomePage()
        })
    })

    it('Submit Order', function() {
        let sum = 0
        
        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')
        const productPage = this.homepage.login(this.data.username, this.data.password)
        
        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(this.data.productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        
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