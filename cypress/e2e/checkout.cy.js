describe("Checkout Process", () => {

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it("TC11 - Successful checkout", () => {
    cy.get('[data-test="firstName"]').type("Atish")
    cy.get('[data-test="lastName"]').type("Wankhede")
    cy.get('[data-test="postalCode"]').type("400001")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.contains("Thank you for your order").should('be.visible')
  })

  it("TC12 - Checkout with missing info", () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

})
