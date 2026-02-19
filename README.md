# SauceDemo Cypress Automation Framework

##  Project Description

This project contains end-to-end automation test cases for https://www.saucedemo.com/ using Cypress.

The following functionalities are automated:
- Login functionality
- Invalid login validation
- Add to cart
- Remove from cart
- Checkout process
- Logout functionality
- Session validation
   
---

##  Tech Stack Used

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---
##  Prerequisites

Make sure the following software is installed:

- Node.js (v16 or above)
- npm
- Git
- VS Code (optional)

---
##  Setup Instructions

Follow the below steps to run the project:

### Step 1: Clone the Repository

Open terminal and run:

git clone https://github.com/aatishwankhede30/saucedemo-cypress-automation.git

### Step 2: Go to Project Folder

cd saucedemo-cypress-automation

### Step 3: Install Dependencies

npm install

This will install Cypress and all required packages.

### Step 4: Open Cypress Test Runner

npx cypress open

### Step 5: Run Tests in Headless Mode

npx cypress run

---
##  Test Scenarios Covered

1. Login with valid users
2. Login with invalid credentials
3. Login with blank fields
4. Add product to cart
5. Remove product from cart
6. Successful checkout process
7. Checkout with missing information
8. Logout functionality
9. Session validation

---

##  Project Structure

cypress
 ┣ e2e
 ┃ ┣ login.cy.js
 ┃ ┣ cart.cy.js
 ┃ ┣ checkout.cy.js
 ┃ ┗ session.cy.js
 ┣ fixtures
 ┃ ┗ users.json
 ┣ support
 ┃ ┗ commands.js
cypress.config.js
package.json
README.md

---
##  Run Specific Test File

npx cypress run --spec "cypress/e2e/login.cy.js"




