describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Should inspect the forms page', () => {
    cy.get('input').then($inputs => {
      cy.log('Input fields found:')
      $inputs.each((index, input) => {
        cy.log(`Field ${index + 1}: ${input.id || 'no id'} - ${input.type || 'no type'}`)
      })
    })
  })

  it('Should complete and submit the practice form', () => {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#userEmail').type('john.doe@example.com')
    cy.get('[value="Male"]').check({force: true})
    cy.get('#userNumber').type('1234567890')
    

    cy.selectDateRobust('001', 'January', '1990')
    

    cy.get('#subjectsInput').type('Math{enter}')
    cy.get('#hobbies-checkbox-1').check({force: true})
    

    cy.get('#currentAddress').type('123 Main Street')
    

    cy.get('#submit').click({force: true})
    

    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  })
}) 