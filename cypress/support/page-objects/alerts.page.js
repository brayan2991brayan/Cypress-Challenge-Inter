class AlertsPage {
  elements = {
    alertButton: () => cy.get('#alertButton'),
    timerAlertButton: () => cy.get('#timerAlertButton'),
    confirmButton: () => cy.get('#confirmButton'),
    promptButton: () => cy.get('#promptButton'),
    confirmResult: () => cy.get('#confirmResult'),
    promptResult: () => cy.get('#promptResult')
  }


  clickAlertButton() {
    this.elements.alertButton().click()
  }

  clickTimerAlertButton() {
    this.elements.timerAlertButton().click()
  }

  clickConfirmButton() {
    this.elements.confirmButton().click()
  }

  clickPromptButton() {
    this.elements.promptButton().click()
  }

  verifyConfirmResult() {
    this.elements.confirmResult().should('contain', 'You selected Ok')
  }

  verifyPromptResult(expectedText) {
    this.elements.promptResult().should('contain', expectedText)
  }
}

export default new AlertsPage() 