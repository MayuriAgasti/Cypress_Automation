import HomePage from "../../support/pageObjects/homePage"

describe("Ecommerce End to End Test", function(){
    //runs the code inside the code before the test execution
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
            this.homePage = new HomePage()
        })
    })

    it("Submit Order", function(){
        const productName = this.data.productName
        const url = Cypress.env('url')
        this.homePage.gotoUrl(url+"/loginpagePractise/")
        const productPage = this.homePage.login(this.data.userName, this.data.password)    

        productPage.productPageValidations()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.gotoCart() 
        cartPage.sumOfProducts().then(function(sum){
            expect(sum).to.be.lessThan(200000)
        })
        const confirmationPage = cartPage.proceedToCheckout()
        confirmationPage.submitFromDetails()
        confirmationPage.getAlertMessage().should('contain', "Success")
        
    });
    
})