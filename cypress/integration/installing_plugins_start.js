/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('/board/69174697755');

  cy
    .get('[data-cy=task]')
    .eq(0)
    .as('task2')

    cy
    .get('[data-cy=task]')
    .eq(1)
    .as('task1')

  cy
    .get('@task2')
    .drag('@task1')

});

it('Upload file', () => {

  cy
    .visit('/board/69174697755');

  cy
    .get('[data-cy=task]')
    .eq(0)
    .click()
  
  cy
    .get('.dropzone')
    .attachFile('logo.png', {subjectType: 'drag-n-drop'})
});

it.only('Hover', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .realHover()
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')
    
});