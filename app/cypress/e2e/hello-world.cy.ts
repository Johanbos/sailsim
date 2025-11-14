// cypress/e2e/hello-world.cy.ts

describe('Hello World Page', () => {
  it('should display Hello World', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello World').should('be.visible')
  })
})
