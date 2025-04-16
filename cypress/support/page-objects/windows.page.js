class WindowsPage {
  elements = {
    browserWindowsLink: () => cy.get('.header-wrapper').contains('Alerts, Frame & Windows').click().parent().contains('Browser Windows'),
    newTabButton: () => cy.get('#tabButton'),
    newWindowButton: () => cy.get('#windowButton'),
    newWindowMessageButton: () => cy.get('#messageWindowButton'),
    sampleHeading: () => cy.get('#sampleHeading')
  }

  navigateToBrowserWindows() {
    this.elements.browserWindowsLink().click()
  }

  clickNewTabButton() {
    this.elements.newTabButton().click()
  }

  clickNewWindowButton() {
    this.elements.newWindowButton().click()
  }

  clickNewWindowMessageButton() {
    this.elements.newWindowMessageButton().click()
  }

  verifyNewTabContent() {
    this.elements.sampleHeading().should('be.visible')
  }
}

export default new WindowsPage() 