import './commands'
//Comando para esconder XHR request do log do cypress
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

declare global {
  namespace Cypress {
    interface Chainable {
       visitarUrlBase(): Chainable<Element>
       clicar(elemento): Chainable<Element>
    }
  }
}