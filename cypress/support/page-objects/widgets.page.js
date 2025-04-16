class WidgetsPage {
  elements = {
    accordionLink: () => cy.get('.element-group').contains('Widgets').parent().find('.menu-list').contains('Accordion'),
    accordionSection: () => cy.get('#section1Heading'),
    autoCompleteLink: () => cy.get('.element-group').contains('Widgets').parent().find('.menu-list').contains('Auto Complete'),
    autoCompleteInput: () => cy.get('.auto-complete__input'),
    datePickerLink: () => cy.get('.element-group').contains('Widgets').parent().find('.menu-list').contains('Date Picker'),
    datePickerInput: () => cy.get('#datePickerMonthYearInput'),
    progressBarLink: () => cy.get('.element-group').contains('Widgets').parent().find('.menu-list').contains('Progress Bar'),
    progressBar: () => cy.get('.progress-bar'),
    tabsLink: () => cy.get('.element-group').contains('Widgets').parent().find('.menu-list').contains('Tabs'),
    tabsContent: () => cy.get('#demo-tab-content')
  }


  navigateToAccordion() {
    this.elements.accordionLink().click()
  }

  expandAccordionSection() {
    this.elements.accordionSection().click()
  }

  verifyAccordionExpanded() {
    this.elements.accordionSection().should('have.attr', 'aria-expanded', 'true')
  }

  navigateToAutoComplete() {
    this.elements.autoCompleteLink().click()
  }

  enterAutoCompleteText(text) {
    this.elements.autoCompleteInput().type(text)
  }

  verifyAutoCompleteSuggestions() {
    cy.get('.auto-complete__menu').should('be.visible')
  }

  navigateToDatePicker() {
    this.elements.datePickerLink().click()
  }

  selectDate(month, year) {
    this.elements.datePickerInput().click()
    cy.get('.react-datepicker__month-select').select(month)
    cy.get('.react-datepicker__year-select').select(year)
    cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').first().click()
  }

  verifyDateSelected() {
    this.elements.datePickerInput().should('have.value')
  }

  navigateToProgressBar() {
    this.elements.progressBarLink().click()
  }

  startProgressBar() {
    cy.get('#startStopButton').click()
    cy.wait(5000) // Esperar a que la barra de progreso se complete
  }

  verifyProgressComplete() {
    this.elements.progressBar().should('have.attr', 'aria-valuenow', '100')
  }

  navigateToTabs() {
    this.elements.tabsLink().click()
  }

  switchToTab(tabName) {
    cy.contains(tabName).click()
  }

  verifyTabContent() {
    this.elements.tabsContent().should('be.visible')
  }
}

export default new WidgetsPage() 