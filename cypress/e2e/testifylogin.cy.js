describe('Checkbox functionality', () => {
    it('Checks the checkbox', () => {
        //#Registration
        cy.visit('https://testify.com.ng/auth/', {headers: {"Accept-Encoding" : "gzip, deflate"}})
       
        cy.get('.form-group > input[placeholder="Email Address"]').type('myswipefileinfo@gmail.com')
        cy.get('.login-screen input.form-control.password').type('Oracle@1')
        cy.get('.login-screen button.btn.btn-primary').click()

    })
})