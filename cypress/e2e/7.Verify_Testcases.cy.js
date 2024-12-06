describe('UI Test', () => {
    it ('Test Case 7: Verify Test Cases Page', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Test Cases'
        cy.contains('Test Cases').click();
    })
})