describe('UI Test',() => {
    it ('Test Case 4: Logout User', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // 'Signup / Login' 
        cy.contains("Signup / Login").click()
        
        // Enter Email Address and Password
        cy.get('[data-qa="login-email"]').type('test@exampletest.com')
        cy.get('[data-qa="login-password"]').type('password123')

        // Click 'Login' 
        cy.get('button[data-qa="login-button"]').click();

        // Click 'Logout' 
        cy.contains("Logout").click()
    })
})