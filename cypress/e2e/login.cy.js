describe("Login Test Cases", () => {

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
  })

  it("TC01 - Verify login with standard user", () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory')
  })

  it("TC07 - Verify login with invalid credentials", () => {
    cy.get('#user-name').type('1234567')
    cy.get('#password').type('0000')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it("TC08 - Verify login with blank fields", () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

})
