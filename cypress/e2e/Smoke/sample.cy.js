describe("This is superset of all tests",()=>{
    it.only("This is the first test of the lot",()=>{
        cy.visit('')
        cy.get('a').contains('get').click()
        cy.url().should('include','/commands/querying')
    })
});