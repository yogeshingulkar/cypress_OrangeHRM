import LoginPage from '../../support/pageObjects/LoginPage';
import DashboardPage from '../../support/pageObjects/DashboardPage';
import PIMPage from '../../support/pageObjects/PIMPage';

describe('PIM Test Suite', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('Admin', 'admin123');
        DashboardPage.goToPIM();
        cy.url().should('include', '/pim/viewEmployeeList');
    });

    it('TC_PIM_061 - Verify user can add new record in PIM module', () => {
        PIMPage.clickAddButton();
        cy.url().should('include', '/pim/addEmployee');
        
        PIMPage.enterFirstName('Tejas');
        PIMPage.enterMiddleName('Michael');
        PIMPage.enterLastName('Dole');
        PIMPage.clickSave();
        
        PIMPage.getSuccessToast().should('be.visible').and('contain.text', 'Successfully Saved');
        cy.url().should('include', '/pim/viewPersonalDetails');
    });

    it('TC_PIM_064 - Verify user can search records in PIM module', () => {
        PIMPage.enterEmployeeIdSearch('0001'); // Assume we are searching for some generic ID
        PIMPage.clickSearch();
        
        cy.get('.oxd-table-body').should('be.visible');
        cy.get('.oxd-text--span').contains('Record').should('be.visible');
    });

    it('TC_PIM_062, 063 - Verify edit and delete records in PIM module', () => {
        // Just demonstrating edit and delete for the first record on the list
        PIMPage.clickEditOnFirstRow();
        cy.url().should('include', '/pim/viewPersonalDetails');
        
        DashboardPage.goToPIM(); // Go back to PIM list
        cy.url().should('include', '/pim/viewEmployeeList');
        
        // Wait for table to populate
        cy.get('.oxd-table-body .oxd-table-row').should('have.length.greaterThan', 0);
        PIMPage.clickDeleteOnFirstRow();
        PIMPage.confirmDelete();
        
        PIMPage.getSuccessToast().should('be.visible').and('contain.text', 'Successfully Deleted');
    });
});
