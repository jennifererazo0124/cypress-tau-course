/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/32458494224')
})

it('Chaining commands', () => {

  /*cy
    .get('[data-cy="task"]')
    .eq(1)
    .should('have.text', 'milk')*/
  
  cy
    .contains('milk') //selects milk in the first list

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('milk') //selects milt in the second list

});