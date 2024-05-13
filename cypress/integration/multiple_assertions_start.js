/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/32458494224')
})

it('Multiple assertions', () => {

  /*cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')*/

  cy 
    .get('[data-cy=task]')
    .should(item => { //.then() doesn't retry, that's why it was changed to should
      if(item.length !== 3) {
        throw new Error('Not enough elements')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    } )

})