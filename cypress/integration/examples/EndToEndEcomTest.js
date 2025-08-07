import cypress = require("cypress");

describe("Ecommerce End to End Test", function(){
    //runs the code inside the code before the test execution
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it("Submit Order", function(){
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        const productName = this.data.productName
        cy.get("#username").type(this.data.userName)
        cy.get("#password").type(this.data.password)
        cy.get("#signInBtn").click()

        //assert the "Shop Name" is visible or not
        cy.contains("Shop Name").should('be.visible')

        //assert that 4 cards for Phone is displaying or not
        cy.get("app-card").should("have.length", 4)

        //select as per provided input dynamically select the card and click on add to card
        cy.get("app-card").filter(`:contains("${productName}")`).then($element =>{
            cy.wrap($element).should('have.length', 1)
            //this is called as the Scoped Search as we are providing the search criteria
            cy.wrap($element).contains('button', 'Add').click()
        });

        cy.get('app-card').eq(0).contains('button', 'Add').click();

        //click on Checkout 
        cy.contains('a', 'Checkout').click() // partial link text match
        let sum = 0;
        //now you landed on order page and verify the sum of the product is not more than 200,000
        cy.get('tr td:nth-child(4) strong').each($e1 => {
            const amount = Number($e1.text().split(" ")[1].trim())
            cy.log(amount)
            sum = sum + amount
        }).then(function() {
            expect(sum).to.be.lessThan(200000)
        })

        cy.contains('button', 'Checkout').click()

        cy.get('#country').type(this.data.country)
        cy.wait(2000)
        cy.get('.suggestions ul li a').click()
        
        cy.get('.btn-success').click()

        cy.get('.alert-success').should('contain', 'Success')
    });
})