// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://demoqa.com/login')
  cy.get('#userName').type(username)
  cy.get('#password').type(password)
  cy.get('#login').click()
})

-
Cypress.Commands.add('selectDate', { prevSubject: 'element' }, (subject, day, month, year) => {
  cy.wrap(subject).click()
  cy.get('.react-datepicker__month-select').select(month)
  cy.get('.react-datepicker__year-select').select(year)
  cy.get(`.react-datepicker__day--${day}`).first().click()
})

Cypress.Commands.add('handleAlert', (type, action, expectedText) => {
  if (type === 'alert') {
    cy.on('window:alert', (str) => {
      if (expectedText) {
        expect(str).to.equal(expectedText)
      }
    })
  } else if (type === 'confirm') {
    cy.on('window:confirm', () => action === 'accept')
  }
})

Cypress.Commands.add('selectDateRobust', (day, month, year) => {
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__month-select').select(month)
  cy.get('.react-datepicker__year-select').select(year)
  
   cy.get(`.react-datepicker__day--${day}`).then($elements => {
    if ($elements.length > 1) {
      cy.get(`.react-datepicker__day--${day}`).first().click()
    } else {
      
      cy.get(`.react-datepicker__day--${day}`).click()
    }
  })
})
