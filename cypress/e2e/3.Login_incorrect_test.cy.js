describe('UI Test', () => {
    it ('Test Case 3: Login User with incorrect email and password', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // 'Signup / Login' 
        cy.contains("Signup / Login").click();

        // Enter Email Address and Password
        cy.get('[data-qa="login-email"]').type('test123@example.com');
        cy.get('[data-qa="login-password"]').type('654321');

         // Click 'Login' 
         cy.get('button[data-qa="login-button"]').click();
    })
})