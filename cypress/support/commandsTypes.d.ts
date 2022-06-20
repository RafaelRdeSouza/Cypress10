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
  }
}