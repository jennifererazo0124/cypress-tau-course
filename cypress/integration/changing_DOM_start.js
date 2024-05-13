/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');
  /*cy
    .visit('/board/32458494224')*/

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="star"]')
    .invoke('show')
    .click()

})

it('Change color of a task', () => {
  cy
    .get('[data-cy=task]')
    .eq(0)
    .invoke('addClass', 'overDue')
})

it.only('Verify star', () => {

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy=star]')
    .should('be.visible')

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseout')

  cy
    .get('[data-cy=star]')
    .should('not.be.visible')

})