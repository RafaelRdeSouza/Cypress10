/**
* Visita a url base configurada em cypress.config.ts 
* @example visitarUrlBase()
*/
Cypress.Commands.add('visitarUrlBase',() => {  
    cy.visit('/')
})
/**
* Clica no item da tela baseada no elemento enviado 
* @example clicarNoElemento(elementoAqui)
*/
Cypress.Commands.add('clicarNoElemento',(elemento) => {  
    cy.get(elemento).click()
})