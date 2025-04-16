import WidgetsPage from '../support/page-objects/widgets.page'

describe('Widgets Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000) 
  })

  it('Should test accordion functionality', () => {
    WidgetsPage.navigateToAccordion()
    WidgetsPage.clickSection1()
    WidgetsPage.verifySection1Content()
  })

  it('Should test auto complete functionality', () => {
    WidgetsPage.navigateToAutoComplete()
    WidgetsPage.typeInAutoComplete('Re')
    WidgetsPage.selectAutoCompleteOption()
    cy.get('.auto-complete__multi-value').should('exist')
  })

  it('Should test date picker functionality', () => {
    WidgetsPage.navigateToDatePicker()
    WidgetsPage.selectDate('015', 'January', '2024')
    cy.get('#datePickerMonthYearInput').should('have.value', '01/15/2024')
  })

  it('Should test progress bar functionality', () => {
    WidgetsPage.navigateToProgressBar()
    WidgetsPage.startProgressBar()
    WidgetsPage.verifyProgressBarComplete()
  })

  it('Should test tabs functionality', () => {
    WidgetsPage.navigateToTabs()
    WidgetsPage.clickWhatTab()
    WidgetsPage.verifyWhatContent()
  })
}) 