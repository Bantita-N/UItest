describe('UI Test', () => {
    it('Test Case 5: Register User with existing email', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // 'Signup / Login' 
        cy.contains('Signup / Login').click()

        // Enter Name and Email Address already exist!
        cy.get('input[name="name"]').type('Test User');
        cy.get('[data-qa="signup-email"]').type('test@exampletest.com'); 

        // Click 'Signup' 
        cy.get('button[data-qa="signup-button"]').click();
    })
})