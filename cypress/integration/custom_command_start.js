/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

Cypress.Commands.add('take', (input) => {
  cy
    .get(`[data-cy=${input}]`)
})

it('Custom commands', () => {

  cy
    .visit('/board/41560212268');

  cy
    .take('task')  
});