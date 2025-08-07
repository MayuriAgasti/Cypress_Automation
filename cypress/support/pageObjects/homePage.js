import ProductPage from "./productPage"
class HomePage {

    gotoUrl(url)
    {
        cy.visit(url)
    }

    login(userName, password){
        cy.get("#username").type(userName)
        cy.get("#password").type(password)
        cy.get("#signInBtn").click()

        return new ProductPage()
    }
}
export default HomePage