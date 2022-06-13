Cypress.Commands.add('visitarUrlBase',() => {  
    cy.visit('/')
})
Cypress.Commands.add('clicar',(elemento) => {  
    cy.get(elemento).click()
})