describe('UI Test',() => {
    it ('Test Case 2: Login User with correct email and password', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // 'Signup / Login' 
        cy.contains("Signup / Login").click();
        
        // Enter Email Address and Password
        cy.get('[data-qa="login-email"]').type('test@exampletest.com');
        cy.get('[data-qa="login-password"]').type('password123');

        // Click 'Login' 
        cy.get('button[data-qa="login-button"]').click();

        // Click 'Delete Account' 
        cy.get('a[href="/delete_account"]').click();
        cy.get('[data-qa="continue-button"]').click();
    })
})