describe("Cart Functionality", () => {

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it("TC09 - Add to cart", () => {
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it("TC10 - Remove from cart", () => {
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

})
