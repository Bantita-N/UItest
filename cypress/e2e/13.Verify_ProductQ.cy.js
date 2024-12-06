describe('UI Test', () => {
    it ('Test Case 13: Verify Product quantity in Cart', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Products'
        cy.contains('View Product').click();

        // Increase quantity
        cy.get('#quantity').clear().type('4');

        // Click 'Add to cart'
        cy.contains('Add to cart').click();

        // Click 'View Cart'
        cy.contains('View Cart').click();
    })
})