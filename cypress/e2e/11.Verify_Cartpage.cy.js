describe('UI Test', () => {
    it ('Test Case 11: Verify Subscription in Cart page', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Cart'
        cy.contains('Cart').click();

        // Scroll down to footer
        cy.get('#footer').scrollIntoView();
        cy.get('#footer').within(() => {
            cy.contains('Subscription')
        });

        // Enter email address
        cy.get('#susbscribe_email').type('test@exampletest.com');
        
        // Click arrow button
        cy.get('#subscribe').click();
    })
})