describe('Registration Functionality', () => {
    it('register a new user', () => {
        cy.visit('https://book-airpeace.crane.aero/ibe/search')
        cy.get('.form-validation-item > div > div > button[data-id="firstDepPort"]').click()
        cy.get('.dropdown-menu.show input').type('AB')
        cy.get('.form-validation-item div.os-content').should('have.length.greaterThan', 0)
        cy.get('.form-validation-item div.os-content').each(($el, index, $list) => {
            cy.log($el.text())
            if ($el.text().includes('ASABA')) {
                cy.wrap($el).click()
            }
        })
       // cy.get('button[data-id="firstDepPort"] .filter-option').should('contain.text', 'ASABA')
    })
})

