describe('My First Test Suite', function() {
    it('My First Test Case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // Selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        // Parent child chaining
        cy.get('.products').as('productsLocator')
        //// The number of products should have only 4
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        //// Click add the third product to cart
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
            // console.log() is javascript method not cypress.
            // So if you want to use it, you will must handle it with then() function manually instead of nature asyncronous in cypress
            console.log('Test sequence in console browser')
        })

        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // If you want to get variable you must to handle with then() function (Resovled promised manually)
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text())
        })
    })
})