import CartPage from "./cartPage";

class ProductPage {

    productPageValidations(){
        cy.contains("Shop Name").should('be.visible')
    }

    getCardCount(){
        return cy.get("app-card")
    }
 
    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }

    selectProduct(productName){
        //select as per provided input dynamically select the card and click on add to card
        cy.get("app-card").filter(`:contains("${productName}")`).then($element =>{
            cy.wrap($element).should('have.length', 1)
            //this is called as the Scoped Search as we are providing the search criteria
            cy.wrap($element).contains('button', 'Add').click()
        });
    }
    gotoCart()
    {
        cy.contains('a', 'Checkout').click() // partial link text match
        return new CartPage()
    }
}

export default ProductPage