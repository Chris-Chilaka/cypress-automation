describe('Jumia login automation', () => {
    it('Tests the login functionality of Jumia', () => {
        cy.visit('https://www.jumia.com')
        cy.get('body > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(7) > span:nth-child(2)').trigger('mouseover')
        //cy.get('#fi-q').click().clear().type('Samsung', {delay : 200})
     

    })
})