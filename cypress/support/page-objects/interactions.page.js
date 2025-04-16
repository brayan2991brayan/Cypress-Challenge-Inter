class InteractionsPage {
  elements = {
    dragAndDropLink: () => cy.get('.element-group').contains('Interactions').parent().find('.menu-list').contains('Drag and Drop'),
    draggable: () => cy.get('#draggable'),
    droppable: () => cy.get('#droppable'),
    resizableLink: () => cy.get('.element-group').contains('Interactions').parent().find('.menu-list').contains('Resizable'),
    resizable: () => cy.get('#resizable'),
    selectableLink: () => cy.get('.element-group').contains('Interactions').parent().find('.menu-list').contains('Selectable'),
    selectableItems: () => cy.get('#selectable li')
  }
  navigateToDragAndDrop() {
    this.elements.dragAndDropLink().click()
  }

  performDragAndDrop() {
    this.elements.draggable().trigger('mousedown', { which: 1 })
    this.elements.droppable().trigger('mousemove').trigger('mouseup', { force: true })
  }

  verifyDragAndDropSuccess() {
    this.elements.droppable().should('have.class', 'ui-state-highlight')
  }

  navigateToResizable() {
    this.elements.resizableLink().click()
  }

  performResize() {
    this.elements.resizable()
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 400, clientY: 400 })
      .trigger('mouseup', { force: true })
  }

  verifyResizeSuccess() {
    this.elements.resizable().should('have.css', 'width', '200px')
  }

  navigateToSelectable() {
    this.elements.selectableLink().click()
  }

  selectFirstItem() {
    this.elements.selectableItems().first().click({force: true})
  }

  verifyItemSelected() {
    this.elements.selectableItems().first().should('have.class', 'ui-selected')
  }
}

export default new InteractionsPage() 