describe('Elements Tests', () => {
  beforeEach(() => {
    // Direct URL to the elements page
    cy.visit('https://demoqa.com/elements')
  })

  it('Should inspect the elements page', () => {
    // Print all list items on the page
    cy.get('li').then($items => {
      cy.log('List items found:')
      $items.each((index, item) => {
        cy.log(`Item ${index + 1}: ${item.id || 'no id'} - ${item.textContent.trim()}`)
      })
    })
  })

  it('Should handle checkboxes correctly', () => {
    cy.get('#item-1').click({force: true})
    cy.get('.rct-checkbox').first().click({force: true})
    cy.get('#result').should('contain', 'You have selected')
  })

  it('Should handle radio buttons correctly', () => {
    cy.get('#item-2').click({force: true})
    cy.get('[type="radio"]').first().check({force: true})
    cy.get('.text-success').should('exist')
  })
}) 