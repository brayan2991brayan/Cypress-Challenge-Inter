describe('Alert Tests', () => {
  beforeEach(() => {
    cy.visit('/alerts')
  })

  it('Should inspect the alerts page', () => {
    cy.get('h1').should('contain', 'Alerts')
    cy.get('button[id="alertButton"]').should('be.visible')
    cy.get('button[id="timerAlertButton"]').should('be.visible')
    cy.get('button[id="confirmButton"]').should('be.visible')
  })

  it('Should handle simple alerts', () => {
    cy.handleAlert('alert', 'accept', 'You clicked a button')
    cy.get('button[id="alertButton"]').click()
  })

  it('Should handle confirmation alerts', () => {
    cy.handleAlert('confirm', 'accept')
    cy.get('button[id="confirmButton"]').click()
    cy.get('span[id="confirmResult"]').should('contain', 'You selected Ok')
  })
}) 