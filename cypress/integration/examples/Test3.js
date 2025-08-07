
describe("Sample Test", function(){
  it("First Test", function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    
    //how to get the href attribute - 
    cy.get('#opentab').then(function(el){
        const url = el.prop('href')
        cy.visit(url)
        cy.origin(url, ()=> {
            cy.get("div.sub-menu-bar a[href*='about']").click()
        });
    });
});

});