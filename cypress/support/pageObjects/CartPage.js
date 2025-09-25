import ConfirmationPage from './ConfirmationPage'

class CartPage {
    sumOfProducts() {
        let sum = 0

        return cy.get('tr td:nth-child(4) strong').each($element => {
                const amount = Number($element.text().split(' ')[1].trim())
                sum = sum + amount
            }).then(() => {
                return sum
            })
    }

    checkoutItems() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }
}

export default CartPage