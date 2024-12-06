describe('UI Test', () => {
    it ('Test Case 9: Search Product', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Products'
        cy.contains('Products').click();

        // Enter Product Name
        cy.get('#search_product').type('Blue Top');

        // Click 'Search'
        cy.get('#submit_search').click();
    })
})