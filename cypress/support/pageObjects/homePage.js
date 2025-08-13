import ProductPage from "./productPage"
import './../../support/commands'

class HomePage {

    gotoUrl(url)
    {
        cy.visit(url)
    }

    login(userName, password){
        cy.get("#username").type(userName)
        cy.get("#password").type(password)
        cy.clickVisible('#signInBtn')

        return new ProductPage()
    }
}
export default HomePage