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
/**
 * Verifica no elemento por contains.text
 * @example verificaContemTexto('texto que deve ser comparado aqui')
 */
  Cypress.Commands.add('verificaContemTexto', {prevSubject: true}, (comandoPai,texto) => {
    //Comando filho/child aqui
    cy.wrap(comandoPai).should('contains.text',texto)
  })
/**
 * Mesma função que cy.get, apenas encontra o  elemento
 * @example encontrarElemento('elementoAqui')
 */
 Cypress.Commands.add('encontrarElemento',(elemento) => {  
    cy.get(elemento)
})