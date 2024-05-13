/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, {
      fixture: 'threeBoards'
    }).as('boardList')

  cy
    .visit('/')

});

it('Testing error message', () => {

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }, {
      forceNetworkError: true
    }).as('createBoard')

    cy
      .visit('/')
    
    cy
      .get('[data-cy=create-board]')
      .click()

    cy
      .get('[data-cy=new-board-input]')
      .type('new board{enter}')
    
    cy
      .get('#errorMessage')
      .should('be.visible')

})

it.only('Stubbing response function', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      req.reply( (res) => {
        res.body[0].starred = true

        return res
      })
    }).as('boardList')

  cy
    .visit('/')

});
