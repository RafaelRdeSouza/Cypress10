describe('Scripts de teste', () => {
    it('Tabelas1', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/table')
        cy.get('.s6').should('contains.text','Arroz')
      //trabalhando com seletor encontrado pelo cypress
    })

    it('Tabelas2', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/table')
        cy.get('table').should('contains.text','Quantidade') 
        //table = Tabela inteira, contando nomes das colunas e seus itens
    })

    it('Tabelas3', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/table')
        cy.get('table td').should('contains.text','Carne')
        //'table td' = total de itens na tabela, colunas x linhas
    })

    it('Tabelas4', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/table')
        cy.get('tbody tr').should('have.length',6) //erro esperado resposta certa é 8
        //'tbody tr' = total de linhas na tabela
    })
})