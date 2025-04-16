class FormsPage {
  elements = {
    practiceFormLink: () => cy.get('.header-wrapper').contains('Forms').click().parent().contains('Practice Form'),
    firstNameInput: () => cy.get('#firstName'),
    lastNameInput: () => cy.get('#lastName'),
    emailInput: () => cy.get('#userEmail'),
    genderRadio: () => cy.get('#gender-radio-1'),
    mobileInput: () => cy.get('#userNumber'),
    dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
    subjectsInput: () => cy.get('#subjectsInput'),
    hobbiesCheckbox: () => cy.get('#hobbies-checkbox-1'),
    currentAddressInput: () => cy.get('#currentAddress'),
    stateSelect: () => cy.get('#state'),
    citySelect: () => cy.get('#city'),
    submitButton: () => cy.get('#submit'),
    successMessage: () => cy.get('.modal-content')
  }

  navigateToPracticeForm() {
    this.elements.practiceFormLink().click()
  }

  fillPersonalInfo(firstName, lastName, email, gender, mobile) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.emailInput().type(email)
    this.elements.genderRadio().check({ force: true })
    this.elements.mobileInput().type(mobile)
  }

  selectDateOfBirth(date) {
    this.elements.dateOfBirthInput().clear().type(date)
  }

  selectSubjects(subjects) {
    subjects.forEach(subject => {
      this.elements.subjectsInput().type(subject + '{enter}')
    })
  }

  selectHobbies() {
    this.elements.hobbiesCheckbox().check({ force: true })
  }

  fillAddress(address, state, city) {
    this.elements.currentAddressInput().type(address)
    this.elements.stateSelect().click().type(state + '{enter}')
    this.elements.citySelect().click().type(city + '{enter}')
  }

  submitForm() {
    this.elements.submitButton().click()
  }

  verifySuccessMessage() {
    this.elements.successMessage().should('be.visible')
  }
}

export default new FormsPage() 