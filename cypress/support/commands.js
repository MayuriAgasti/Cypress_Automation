// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('sumbitFormDetails', ()=>{
     cy.get('#country').type("India")
        cy.wait(2000)
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
})

Cypress.Commands.add('clickVisible', (selector) => { 
        cy.get(selector).should('be.visible').click({force:true}); 
});

Cypress.Commands.add('checkRadio', (selector) => { 
        cy.get(selector).should('be.visible').check(); 
});

Cypress.Commands.add('checkCheckboxes', (selectors) => { 
        selectors.forEach((selector) => { 
                cy.get(selector).should('be.visible').check(); 
        }); 
});

Cypress.Commands.add('selectDropdownOption', (selector, optionText) => { 
        cy.get(selector).should('be.visible').select(optionText); 
}); 

Cypress.Commands.add('selectAutosuggestOption', (inputSelector, optionText) => { 
        cy.get(inputSelector).should('be.visible').type(optionText); 
        cy.wait(2000)
        cy.contains(optionText).should('be.visible').click(); 
}); 

Cypress.Commands.add('selectMultiAutosuggestOption', (inputSelector, options) => { 
        options.forEach((optionText) => { 
                cy.get(inputSelector).should('be.visible').type(optionText); 
                cy.contains(optionText).should('be.visible').click(); 
        }); 
}); 

