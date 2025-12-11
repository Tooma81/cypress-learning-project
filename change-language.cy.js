describe('change-language', () => {

    // Muuda leht inglise keelseks
    it(`giftcard-to-cart`, () => {
        cy.visit('https://arvutitark.ee/')
        cy.viewport(1280, 720)
        cy.get('[aria-label="Close locale switcher"]').click()
        cy.contains('span', 'English').click()
        cy.url().should('include', 'en')
    })
})