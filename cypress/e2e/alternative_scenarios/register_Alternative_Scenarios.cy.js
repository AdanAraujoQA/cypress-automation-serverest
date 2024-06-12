context('Register page with non registered user alternative scenarios', function () {
    it('Cenary 1 - register with invalid email', function () {cy.visit('/');  
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.randomUser().then((user) => {
      cy.get('input[data-testid="email"]').type(user.fullName)
      cy.get('[data-testid="password"]').type(user.password)
      cy.get('[data-testid="nome"]').type(user.fullName);
      cy.get ('[data-testid="cadastrar"]').click()
      cy.log(user.seedNumber, user.fullName, user.password, user.email)
      cy.wait(4000)
  });
    cy.get('[data-testid="cadastrar"]').click();    
    cy.log('Asserção para garantir que usuário não registrado não é redirecionado para a tela incial de usuário logado')
    cy.url().should('not.include', 'https://front.serverest.dev/admin/home');
    })
    it('Cenary 2 - register with email, username and password field blank', function () {
  
      cy.visit('/');      
      cy.intercept('https://serverest.dev/login').as('apiCheck');
      cy.get('[data-testid="cadastrar"]').click({force: true});
      cy.log('Asserção para garantir que usuário não registrado não é redirecionado para a tela incial de usuário logado')
      cy.url().should('not.include', 'https://front.serverest.dev/admin/home');
  
    })
    it('Cenary 3  - register without password', function () {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
      cy.randomUser().then((user) => {
        cy.get('input[data-testid="email"]').type(user.fullName)
        cy.get('[data-testid="nome"]').type(user.fullName);
        cy.get ('[data-testid="cadastrar"]').click()
        cy.log(user.seedNumber, user.fullName, user.password, user.email)
        cy.wait(4000)
        cy.log('Asserção para garantir que usuário não registrado não é redirecionado para a tela incial de usuário logado')
        cy.url().should('not.include', 'https://front.serverest.dev/admin/home');
    })
  });
})