describe('Test React-G', function() {
  it('Visit main page', () => {
    cy.visit('/')
  })

  it('Contain greeting', () => {
    cy.get('[data-test=greeting]').contains('Welcome to React-G!')
  })
})
