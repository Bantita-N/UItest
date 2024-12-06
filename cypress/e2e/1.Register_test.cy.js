describe('UI Test', () => {
    it('Test Case 1: Register User', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Signup / Login' 
        cy.contains('Signup / Login').click();

        // Enter Name and Email Address
        cy.get('[data-qa="signup-name"]').type('Test User');
        cy.get('[data-qa="signup-email"]').type('test@exampletest.com');

        // Click 'Signup' 
        cy.get('button[data-qa="signup-button"]').click();

        // Fill details
        cy.get('input[name="title"]').check('Mr');
        cy.get('input[name="password"]').type('password123');
        cy.get('select[name="days"]').select('1');
        cy.get('select[name="months"]').select('January');
        cy.get('select[name="years"]').select('1999');

        cy.get('#newsletter').check();
        cy.get('#optin').check();

        cy.get('input[name="first_name"]').type('Test');
        cy.get('input[name="last_name"]').type('User');
        cy.get('input[name="company"]').type('Test Company');
        cy.get('input[name="address1"]').type('123 Test St.');
        cy.get('input[name="address2"]').type('Apt 4B');
        cy.get('select[name="country"]').select('Canada');
        cy.get('input[name="state"]').type('Ontario');
        cy.get('input[name="city"]').type('Toronto');
        cy.get('input[name="zipcode"]').type('M5A 1A1');
        cy.get('input[name="mobile_number"]').type('1234567890');

        // Click 'Create Account' 
        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();

        // Click 'Delete Account' 
        cy.get('a[href="/delete_account"]').click();
        cy.get('[data-qa="continue-button"]').click();
    });
});
