describe('Navbar Open Test', () => {
  it('Gets, opens and asserts', () => {
    cy.visit('https://mrflesher.com')

    cy.scrollTo('center')
    cy.get('.navbar').contains('About').click({force: true})

    // Should be on a new URL which
    // includes '/#abt'
    cy.url().should('include', '/#abt')

    // Get an input, type into it
    cy.get('input[type=email]').type('test@email.com')

    //  Verify that the value has been updated
    cy.get('input[type=email]').should('have.value', 'test@email.com')
  })
})