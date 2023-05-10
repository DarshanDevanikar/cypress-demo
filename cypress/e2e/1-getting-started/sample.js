describe("This is superset of all tests",()=>{
    it.only("This is the first test of the lot",()=>{
        cy.visit('')
        cy.get('get').as('getPageLocator')
        cy.get('@getPageLocator').click()
    })
});