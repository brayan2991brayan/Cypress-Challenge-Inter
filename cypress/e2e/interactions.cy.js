import { generateUserData } from '../support/utils/data-generator'
import InteractionsPage from '../support/page-objects/interactions.page'

describe('Interactions Tests', () => {
  beforeEach(() => {
    cy.visit('/interaction')
    cy.wait(2000)
  })

  it('Should handle drag and drop', () => {
    InteractionsPage.navigateToDragAndDrop()
    InteractionsPage.performDragAndDrop()
    InteractionsPage.verifyDragAndDropSuccess()
  })

  it('Should handle resizable elements', () => {
    InteractionsPage.navigateToResizable()
    InteractionsPage.performResize()
    InteractionsPage.verifyResizeSuccess()
  })

  it('Should handle selectable elements', () => {
    InteractionsPage.navigateToSelectable()
    InteractionsPage.selectFirstItem()
    InteractionsPage.verifyItemSelected()
  })
}) 