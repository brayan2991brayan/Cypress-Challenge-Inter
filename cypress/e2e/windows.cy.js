describe('Window Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/browser-windows')
  })

  it('Should inspect the windows page', () => {
    cy.get('button').then($buttons => {
      cy.log('Buttons found:')
      $buttons.each((index, button) => {
        cy.log(`Button ${index + 1}: ${button.id || 'no id'} - ${button.textContent.trim()}`)
      })
    })
  })

  it('Should open a new tab', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    cy.get('#tabButton').click({force: true})
    cy.get('@windowOpen').should('be.called')
  })
}) 