describe('UI Test', () => {
    it('Test Case 16: Place Order: Login before Checkout', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Signup / Login' 
        cy.contains('Signup / Login').click();

        // Enter Email Address and Password
        cy.get('[data-qa="login-email"]').type('test@exampletest.com');
        cy.get('[data-qa="login-password"]').type('password123');

        // Click 'Login' 
        cy.get('[data-qa="login-button"]').click();
    
        // Click 'Add to cart'
        cy.contains('Add to cart').click();

        // Click 'Continue Shopping'
        cy.contains('Continue Shopping').click();

        // Click 'Cart'
        cy.contains('Cart').click();

        // Click 'Proceed To Checkout'
        cy.contains('Proceed To Checkout').click();

        // Enter description click 'Place Order'
        cy.get('.form-control').type('I want to buy this items!');
        cy.contains('Place Order').click();

        // Enter payment details
        cy.get('[data-qa="name-on-card"]').type('Test');
        cy.get('[data-qa="card-number"]').type('147852369');
        cy.get('[data-qa="cvc"]').type('111');
        cy.get('[data-qa="expiry-month"]').type('05');
        cy.get('[data-qa="expiry-year"]').type('2021');

        // Click 'Pay and Confirm Order' 
        cy.contains('Pay and Confirm Order').click();

        // Click 'Delete Account' 
        cy.get('a[href="/delete_account"]').click();
        cy.get('[data-qa="continue-button"]').click();
    })
})