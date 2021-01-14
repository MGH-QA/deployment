// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://qa1.alsid.app/')
  })

  describe('Authentication', () => {
    it('Login with Alsid for AD', () => {
      cy.wait(1000)
      // Username
      cy.get('input[name="alsidEmail"]')
        .type('hello@alsid.com')
        .should('have.value', 'hello@alsid.com')
      // Password
      cy.get('input[name="alsidPassword"]')
        .type('verySecure1')
        .should('have.value', 'verySecure1')
      cy.get('.ant-btn-primary')
        .click()
      cy.wait(10000)
      // License upload
      cy.get('[attr-name="navigationmenuentry-system"] > a')
        .click()
        .wait(1000)
      cy.get('[href="/profile/alsid/management/system/about"]')
        .contains('About')
        .click()
        .wait(1000)



 
const filePath = 'alsid_license_QA.lic';

cy.get('.ant-upload-select-text').attachFile(filePath);
        
        
        







        
    })
  })


})
