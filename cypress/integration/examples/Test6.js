/// <reference types='Cypress'/>

describe('Handling Web Tables', function() {
    it('Should handle web tables', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const textCourse = $el.text()
            if (textCourse.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})
