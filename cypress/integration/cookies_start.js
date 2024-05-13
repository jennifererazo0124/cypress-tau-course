/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('trello_token') //preserves cookies only in the tests of this file
    cy
      .visit('/')

  })

  it('test #1', () => {

    /*cy
      .get('[data-cy="login-menu"]')
      .click();

    cy
      .get('[data-cy="login-email"]')
      .type('filip@example.com');

    cy
      .get('[data-cy="login-password"]')
      .type('Asdf.1234#');

    cy
      .get('[data-cy="login"]')
      .click();*/
    
    cy
      .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNzEwMTA2NjI0LCJleHAiOjE3MTAxMTAyMjQsInN1YiI6IjEifQ.0-92sw5lGHMJpgkimx04mGwR6K4GLH9vuk0PPQRP83E')
    
    cy
      .reload()

    });

  it('test #2', () => {

  });

  it('test #3', () => {

  });

});