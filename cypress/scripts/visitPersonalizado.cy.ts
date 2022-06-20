/// <reference types="cypress" />

describe('Scripts de teste', () => {
  it('Exemplo com comando customizado', () => {
    cy.visitarUrlBase()
    cy.encontrarElemento('.tamanhodiv1 > .center').verificaContemTexto('Neste Site você irá testar variás funcionalidades para ficar fera em automação.')
    cy.clicarNoElemento(':nth-child(2) > .collapsible-header')
    cy.clicarNoElemento('.active > .collapsible-body > ul > :nth-child(1) > a')
    cy.clicarNoElemento(':nth-child(4) > :nth-child(2) > a')
    cy.encontrarElemento('.red-text').verificaContemTexto('Internal Server Error!!')
  })
})