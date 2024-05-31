
context('Login page with user not registered', function () {
 
    it('Cenary 1 - Must render correctly', function () {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
      cy.log('Cenary 1 - initial state of visible screen');
      cy.get('[data-testid="email"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu email');
      cy.get('[data-testid="password"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite sua senha'); 
      cy.get('[data-testid="nome"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu nome');
      cy.log('Cenary 2 - Redirect button validation');
      cy.get('div>div>div>form>small>a').click();
      cy.url().should('be.equal','https://front.serverest.dev/login')
  
    });
    it('Cenary 2 - Must allow the user to register with and without admin role', function () {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
      cy.randomUser().then((user) => {
        cy.get('input[data-testid="email"]').type(user.email);
        cy.get('[data-testid="password"]').type(user.password)
        cy.get('[data-testid="nome"]').type(user.fullName);
        cy.get ('[data-testid="cadastrar"]').click()
        cy.log(user.seedNumber, user.fullName, user.password, user.email)
    });
});
});
