describe('UI Test', () => {
    it ('Test Case 8: Verify All Products and product detail page', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Products'
        cy.contains('Products').click();

        // Click 'View Product'
        cy.contains('View Product').click();

        // visible: product name, category, price, availability, condition, brand
        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('be.visible');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
        cy.get('.product-information > :nth-child(8)').should('be.visible');
    })
})