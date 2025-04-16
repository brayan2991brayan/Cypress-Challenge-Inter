class ElementsPage {
  elements = {
    checkBoxLink: () => cy.get('.header-wrapper').contains('Elements').click().parent().contains('Check Box'),
    radioButtonLink: () => cy.get('.header-wrapper').contains('Elements').click().parent().contains('Radio Button'),
    webTablesLink: () => cy.get('.header-wrapper').contains('Elements').click().parent().contains('Web Tables'),
    homeCheckbox: () => cy.get('#tree-node-home'),
    yesRadio: () => cy.get('#yesRadio'),
    impressiveRadio: () => cy.get('#impressiveRadio'),
    noRadio: () => cy.get('#noRadio'),
    addButton: () => cy.get('#addNewRecordButton'),
    firstNameInput: () => cy.get('#firstName'),
    lastNameInput: () => cy.get('#lastName'),
    emailInput: () => cy.get('#userEmail'),
    ageInput: () => cy.get('#age'),
    salaryInput: () => cy.get('#salary'),
    departmentInput: () => cy.get('#department'),
    submitButton: () => cy.get('#submit'),
    searchBox: () => cy.get('#searchBox'),
    tableRows: () => cy.get('.rt-tr-group')
  }

  navigateToCheckBox() {
    this.elements.checkBoxLink().click()
  }

  checkHomeCheckbox() {
    this.elements.homeCheckbox().check({ force: true })
  }

  verifyHomeCheckboxChecked() {
    this.elements.homeCheckbox().should('be.checked')
  }

  navigateToRadioButton() {
    this.elements.radioButtonLink().click()
  }

  selectYesRadio() {
    this.elements.yesRadio().check({ force: true })
  }

  selectImpressiveRadio() {
    this.elements.impressiveRadio().check({ force: true })
  }

  verifyYesRadioSelected() {
    this.elements.yesRadio().should('be.checked')
  }

  verifyImpressiveRadioSelected() {
    this.elements.impressiveRadio().should('be.checked')
  }

  navigateToWebTables() {
    this.elements.webTablesLink().click()
  }

  clickAddButton() {
    this.elements.addButton().click()
  }

  fillRegistrationForm(firstName, lastName, email, age, salary, department) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.emailInput().type(email)
    this.elements.ageInput().type(age)
    this.elements.salaryInput().type(salary)
    this.elements.departmentInput().type(department)
  }

  submitForm() {
    this.elements.submitButton().click()
  }

  searchRecord(searchText) {
    this.elements.searchBox().clear().type(searchText)
  }

  verifyRecordExists(searchText) {
    this.elements.tableRows().should('contain', searchText)
  }
}

export default new ElementsPage() 