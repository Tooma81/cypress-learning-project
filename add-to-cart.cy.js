describe('add-to-cart', () => {
    // Navigate to monitors section and add first product to cart
    it(`add-to-cart`, () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://arvutitark.ee/')
        cy.get('[href="/arvutid-ja-lisad/monitorid"]').click()
        cy.get('.catalogue-product-link').first().click()
        cy.contains('Lisa ostukorvi').first().click()
        cy.get('[aria-label="Vaata ostukorvi"]').should('contain', '1')
    })
})