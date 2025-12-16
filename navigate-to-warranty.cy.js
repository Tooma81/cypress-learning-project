describe('navigate-to-warranty', () => {
    it(`navigate-to-warranty`, () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://arvutitark.ee/')
        cy.get('[href="/garantii-tingimused"]').click()
        cy.get('h1').first().should('contain', 'Garantii tingimused')
    })
})