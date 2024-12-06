describe('UI Test', () => {
    it ('Test Case 12: Add Products in Cart', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Products'
        cy.contains('Products').click();

        // Add Product(1)
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

        // Click 'Continue Shopping'
        cy.contains('Continue Shopping').click();

        // Add Product(2)
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

        // Click 'View Cart'
        cy.contains('View Cart').click();
    })
})