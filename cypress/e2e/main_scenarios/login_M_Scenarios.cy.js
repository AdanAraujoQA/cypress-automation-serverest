//SUBSTITUIR TUDO PELO COMMANDS DO FAKER IGUAL DO LOGIN_ALTERNATIVE
describe('Components validation and Login page functions with user register', () => {
beforeEach(() => {
  cy.visit('/');
})
context('initial state of visible screen', function () {
  //Conversar com marina para implementação do teste visual 
  it('Cenary 1 - Must render correctly', function () {
 //melhorar seletor da linha 23 e 24 doc do cypress
    cy.get('input[data-testid="email"]').should('be.visible');
    cy.get ('form').contains('Login').should('be.visible');
    cy.get('div.container img.imagem').should('exist');
// o comando acima verifica se existe uma imagem com a classe “imagem” dentro da <div> com a classe “container”. Se a imagem existir, o teste passa, se a imagem não existir, o teste falha.
//analisar outros comandos além do contains
  });
  it('Cenary 2 - initial state of visible screen email, password and baseboard', function () {
    cy.get('input[data-testid="email"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu email');
    cy.get('input[data-testid="senha"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite sua senha'); 
    cy.get('[data-testid="entrar"]').should('be.enabled').and('be.visible').and('have.text','Entrar');
  });
  it('Cenary 3 - Redirect to register page button validation', function (){
    cy.get('small[class="message form-text"]').should((elemento) => {     
     expect(elemento).to.have.text('Não é cadastrado?Cadastre-se');
    });
    cy.get('small[class="message form-text"]').click();
    cy.url().should('be.equal','https://front.serverest.dev/cadastrarusuarios');

  });      
}); 
context('Login page with user registered', function () {
  it('Cenary 1 - Must allow the user to login with admin role', function () {
    cy.randomUser().then((user) => {
      cy.registerNewUser(user.fullName, user.email, user.password, 'true');  
    cy.get('input[data-testid="email"]').type(user.email);
    cy.get('input[data-testid="senha"]').type(user.password); 
    cy.log(user.seedNumber, user.fullName, user.password, user.email)
   });
   cy.intercept('https://serverest.dev/login').as('apiCheck');
   cy.get('[data-testid="entrar"]').click();
   cy.wait('@apiCheck').its('response.statusCode').should('eq', 200);    
   cy.url().should('be.equal','https://front.serverest.dev/admin/home')
  });
});  
})