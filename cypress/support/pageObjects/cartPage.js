import ConfirmationPage from "./confirmationPage";

class CartPage
{
    sumOfProducts(){
        let sum = 0;
        //now you landed on order page and verify the sum of the product is not more than 200,000
        return cy.get('tr td:nth-child(4) strong').each($e1 => {
            const amount = Number($e1.text().split(" ")[1].trim())
            cy.log(amount)
            sum = sum + amount
        }).then(function() {
           return sum
        })
    }
    proceedToCheckout(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }


}
export default CartPage