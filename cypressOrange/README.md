# Cypress Automation for OrangeHRM

100% workable, standalone Cypress conversion of the Java TestNG POM project.

## Directory Structure
This maintains one pure `cypressOrange` folder with only your Cypress automation content.

- `cypress/support/pageObjects`: Contains all Page Object files (`LoginPage.js`, `PIMPage.js`, etc.) mimicking your Java `src/main/java/pages`.
- `cypress/e2e/tests`: Contains all Cypress test specifications mimicking your Java `src/test/java/tests`.

## How to run

1. Open a terminal.
2. Navigate to this folder: `cd d:\M65\Cypress\OrangeHRM\cypressOrange`
3. If not already installed, install dependencies: `npm install`
4. Run Cypress in UI mode: `npm run cy:open`
5. Run Cypress in Headless mode (Terminal): `npm run cy:run`

Enjoy the fast and reliable execution of Cypress with the robust Page Object Model maintained!
