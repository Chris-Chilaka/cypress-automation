describe('Launch Application', () => {
    it('Launches the test application', () => {
        cy.visit('https://parabank.parasoft.com/')
        cy.get("input[name='username']").type('asgard');
        cy.get("input[name='password']").type('Izuchukwu1$');
       // cy.get("input[value='Log in']").click();
    })
})

