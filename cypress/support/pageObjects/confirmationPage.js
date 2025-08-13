class ConfirmationPage{

    submitFromDetails(){
        cy.selectAutosuggestOption('#country','India')
       //cy.get('#country').type("India")
        //cy.wait(2000)
        //cy.get('.suggestions ul li a').click()
        cy.clickVisible('.btn-success');
        //cy.get('.btn-success').click()
    }

    getAlertMessage(){
        return cy.get('.alert-success')
    }

}
export default ConfirmationPage