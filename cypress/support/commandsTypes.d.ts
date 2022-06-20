declare namespace Cypress {
    interface Chainable<Subject> {
        /**
        * Visita a url base configurada em cypress.config.ts 
        * @example visitarUrlBase()
        */
        visitarUrlBase(): Chainable<any>
        /**
        * Clica no item da tela baseada no elemento enviado 
        * @example clicarNoElemento(elementoAqui)
        */
        clicarNoElemento(elemento: any): Chainable<any>
        /**
         * Verifica no elemento por contains.text
         * @example verificaContemTexto('texto que deve ser comparado aqui')
         */
        verificaContemTexto(texto: any): Chainable<any>
        /**
         * Mesma função que cy.get, apenas encontra o  elemento
         * @example encontrarElemento('elementoAqui')
         */
        encontrarElemento(elemento: any): Chainable<any>
  }
}