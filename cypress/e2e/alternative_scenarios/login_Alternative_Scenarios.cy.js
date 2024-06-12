describe("Cypress Exception Handling", () => {
  Cypress.on("fail", (err, runnable) => {
    cy.log(err.message);
    return false;
  });


context('Login page with non registered user alternative scenarios', function () {
  it('Cenary 1 - login with non registred user with invalid email', function () {
    cy.visit('/');  
    cy.randomUser().then((user) => {
    cy.get('input[data-testid="email"]').type(user.fullName,{force: true});
    cy.get('input[data-testid="senha"]').type('senha');
    });
    cy.get('[data-testid="entrar"]').click();
    cy.log('Asserção para garantir que usuário não registrado não é redirecionado para a tela incial de usuário logado');
    cy.url().should('not.include', 'https://front.serverest.dev/admin/home');
    cy.compareSnapshot('compare-After-Click');   
    cy.get(".error-message").should("be.visible");
       
  }); 
  it('Cenary 2 - login with non registred user', function () {
    cy.visit('/');
    cy.randomUser().then((user) => {
    cy.get('input[data-testid="email"]').type(user.email);
    cy.get('input[data-testid="senha"]').type(user.password)
    cy.intercept('https://serverest.dev/login').as('apiCheck');
    cy.get('[data-testid="entrar"]').click();
    cy.wait('@apiCheck').its('response.statusCode').should('eq', 401);    
    });
  });
  it('Cenary 3 - login with email and password field blank', function () {
    cy.visit('/');      
    cy.intercept('https://serverest.dev/login').as('apiCheck');
    cy.get('[data-testid="entrar"]').click();
    cy.wait('@apiCheck').its('response.statusCode').should('eq', 400);
  }) 
})
context('Login page with registred user alternative scenarios', function () {
  let user;
  before(() => {
  
   return cy.registerNewUserAPI('true')
    .then((response) => {
      console.log("it dentro da spec", response);
      user = response;
    });
  });
  
  it('Cenary 1 - login with registred user with wrong password', function () {
     cy.visit('/');    
     cy.get('input[data-testid="email"]').type(user.email);
     cy.get('input[data-testid="senha"]').type('senha');
     cy.intercept('https://serverest.dev/login').as('apiCheck');
     cy.get('[data-testid="entrar"]').click();
     cy.wait('@apiCheck').its('response.statusCode').should('eq', 401);
  }), 
     it('Cenary 2 -login with registred user with blank password', function () {
      cy.visit('/');      
      cy.get('input[data-testid="email"]').type(user.email);
      cy.intercept('https://serverest.dev/login').as('apiCheck');
      cy.get('[data-testid="entrar"]').click();
      cy.wait('@apiCheck').its('response.statusCode').should('eq', 400);
    }) 
  });
});