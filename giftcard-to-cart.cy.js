describe('giftcard-to-cart', () => {

    // Lisa 50 € kinkekaart ostukorvi
    it(`giftcard-to-cart`, () => {
        cy.visit('https://arvutitark.ee/')
        cy.viewport(1280, 720)
        cy.contains('span', 'Kinkekaart').click()
        cy.url().should('include', 'osta-kinkekaart')
        cy.contains('span', '50 €').click()
        cy.get('button[type="submit"]').click()
        cy.get('[aria-label="Vaata ostukorvi"]').should('contain', '1')
    })
})