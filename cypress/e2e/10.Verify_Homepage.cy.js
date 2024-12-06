describe('UI Test', () => {
    it ('Test Case 10: Verify Subscription in home page', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

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