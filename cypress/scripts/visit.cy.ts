describe('Scripts de teste', () => {
  it('Exemplo com visit', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
    cy.contains('div','Examples of uses').should('contain.text','Cypress API')
    //cy.contains dentro div procura o texto Examples of uses e se no elemento daquele texto tem as palavras Cypress API
  })
})