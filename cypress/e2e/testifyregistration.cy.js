describe('Checkbox functionality', () => {
    it('Checks the checkbox', () => {
        //#Registration
        cy.visit('https://testify.com.ng/auth/', {headers: {"Accept-Encoding" : "gzip, deflate"}})
        cy.get('.login-screen a.btn.btn-dark').click()
        cy.get('.login-screen button.btn.btn-primary').click()
        cy.get('#email').type('myswipefileinfo@gmail.com')
        cy.get('.input-group > input[placeholder="Password"]').type('Oracle@1')
        cy.get('.input-group > input[placeholder="Confirm Password"]').type('Oracle@1')
        cy.get('[type="checkbox"]').check()
        cy.get('.login-screen button.btn.btn-primary').click()

        //#Login
        cy.get('.form-group > input[placeholder="Email Address"]').type('myswipefileinfo@gmail.com')
        cy.get('.login-screen input.form-control.password').type('Oracle@1')

    })
})