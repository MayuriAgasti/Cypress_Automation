
describe("Sample Test", function(){
  it("First Test", function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    //select options from static dropdown
    cy.get('select').select('option2').should('have.value', 'option2')
    //handling dynamic dropdowns
    cy.get('#autocomplete').type('ind').should('have.text', 'India ')

    cy.get('li.ui-menu-item  div').each(($e1, index, $list) => {
        if($e1.text()=='India')
            $e1.click() 
    })

});

});