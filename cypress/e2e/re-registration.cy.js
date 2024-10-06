describe('Registration Functionality', () => {
    it('register a new user', () => {
        cy.visit('https://parabank.parasoft.com/')
        
        cy.get('a[href="register.htm"]').click();
        cy.get('#customer\\.firstName').type('Paul');
        cy.get('#customer\\.lastName').type('Scholes');
        cy.get('#customer\\.address\\.street').type('33 Landmark');
        cy.get('#customer\\.address\\.city').type('LA');
        cy.get('#customer\\.address\\.state').type('LA');
        cy.get('#customer\\.address\\.state').type('LA');
        cy.get('#customer\\.address\\.zipCode').type('1036573');
        cy.get('#customer\\.phoneNumber').type('234746583646');
        cy.get('#customer\\.ssn').type('374345757567725364625');
        cy.get('#customer\\.username').type('asgard0');
        cy.get('#customer\\.password').type('Oracle@1');
        cy.get('#repeatedPassword').type('Oracle@1');
        cy.get('input.button[value="Register"]').click();
        cy.get('#customer\\.username\\.errors').should('have.text', 'This username already exists.');

    })
})

