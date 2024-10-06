describe('Registration Functionality', () => {
    it('register a new user', () => {
        cy.visit('https://formstone.it/components/dropdown/demo/')
        cy.get('#example-6 > form > fieldset >div > button').click()
        cy.get('#example-6 > form > fieldset > label').scrollIntoView()
        cy.get('#demo_label-dropdown > div > div:nth-child(2) > button:nth-child(6)').click()
        cy.scrollTo('bottom')
      
        
    })
})

