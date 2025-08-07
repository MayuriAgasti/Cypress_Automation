
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/homePage"

const homePage = new HomePage()
Given('I am on Ecommerce login page', function(){
    homePage.gotoUrl("https://rahulshettyacademy.com/loginpagePractise/")
});

When('I logged in to the application', function(){
    this.productPage = homePage.login(this.data.userName, this.data.password)    
    this.productPage.productPageValidations()
    this.productPage.getCardCount().should('have.length', 4)
});

When('I add items to cart and checkout', function(){
    this.productPage.selectProduct(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.gotoCart() 
});

When('I validate total price limit', function(){
    this.cartPage.sumOfProducts().then(function(sum){
        expect(sum).to.be.lessThan(200000)
    })
});

Then('I select the country submit and verify ThankYou', function(){
    const confirmationPage = this.cartPage.proceedToCheckout()
    confirmationPage.submitFromDetails()
    confirmationPage.getAlertMessage().should('contain', "Success")
})

When('I logged in to the portal', function(dataTable){
    this.productPage = homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])    
    this.productPage.productPageValidations()
    this.productPage.getCardCount().should('have.length', 4)
});