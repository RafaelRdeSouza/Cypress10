/// <reference types="cypress" />

describe('Scripts de teste', () => {
  it('Exemplo com comando customizado', () => {
    cy.visitarUrlBase()
    cy.get('.tamanhodiv1 > .center').should('contains.text','automação')
    cy.clicarNoElemento(':nth-child(2) > .collapsible-header')
    cy.clicarNoElemento('.active > .collapsible-body > ul > :nth-child(1) > a')
    cy.clicarNoElemento(':nth-child(4) > :nth-child(2) > a')
    cy.get('.red-text').should('have.text','Internal Server Error!!')
  })
})