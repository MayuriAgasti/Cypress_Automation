//cypress - spec file
// cypress/e2e/sampleTest.cy.js

describe("Sample Test", function(){
  it("First Test", function() {
    console.log("Inside the first test case")
    //open url in the browser cy is like driver of webdriverio API
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //identify the elements on the page
    cy.get("input.search-keyword").type("ca")
    //verify 4 results are displaying on the page
    //should is assertion which is checking the lenght
    cy.wait(2000)
    cy.get('.product:visible ').should('have.length', 4)

    
  });
});
