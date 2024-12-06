describe('UI Test', () => {
    it ('Test Case 6: Contact Us Form', () => {
        // Launch browser
        cy.visit('http://automationexercise.com');

        // Click 'Contact Us'
        cy.contains('Contact us').click();

        // Enter Detail
        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('test@exampletest.com');
        cy.get('[data-qa="subject"]').type('I would like to be in contact!');
        cy.get('[data-qa="message"]').type('Would be great we could correspond!');
        cy.get(':nth-child(6) > .form-control').selectFile("package.json");
        
        // Click 'Submit'
        cy.get('[data-qa="submit-button"]').click();

        // Click 'Home'
        cy.contains('Home').click();
    })
})