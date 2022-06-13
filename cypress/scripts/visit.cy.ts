describe('Scripts de teste', () => {
  it('Exemplo com visit', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
    cy.get('h1').should('not.contain.text','não é pra ter esse texto')
  })
})