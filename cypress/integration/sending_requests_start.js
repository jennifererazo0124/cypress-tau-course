/// <reference types="cypress" />

it('Sending requests', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board created by .request() command'
      }
    })

});

it('Renaming a board', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'PATCH',
      url: '/api/boards/56169453353',
      body: {
        name: 'renamed from cypress'
      }
    })

});

it.only('Deleting a board', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'DELETE',
      url: '/api/boards/56169453353'
    })

});


