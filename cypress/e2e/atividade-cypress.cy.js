describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')


    cy.get('a[href="cadastrar.html"]').click()

    cy.get('input[type="text"]').type('Higor Darone')

    cy.get('input[type="email"]').type('cypress@teste.com')

    cy.get('input[placeholder="senha"]').type('cypress')

    cy.get('input[placeholder="Confirme a senha"]').type('cypress')


    cy.contains('Criar conta').click()

    cy.contains('Você está logado!').should('be.visible')

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.get('input[type="text"]').type('cypress@teste.com')

    cy.get('input[type="password"]').type('cypress')

    cy.get('button').click()

    cy.contains('Você está logado!').should('be.visible')
    
  })
})