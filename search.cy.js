describe('search', () => {
    const terms = ['monitor', 'geforce', 'akupank']

    terms.forEach(term => {
        it(`check search: ${term}`, () => {
            cy.visit('https://arvutitark.ee/')
            cy.get('[aria-label="Ava otsing"]').click()
            cy.get('.absolute.inset-0.enter-done').type(`${term}{enter}`)
            cy.url().should('include', term)
        })
    })
})