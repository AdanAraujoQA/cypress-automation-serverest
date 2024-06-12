
describe('Components validation and Login page functions with user register', () => {
  Cypress.on("fail", (err, runnable) => {
    cy.log(err.message);
    return false;
  });
beforeEach(() => {
  cy.visit('/');
})
context.only('initial state of visible screen', function () {
  //Conversar com marina para implementação do teste visual no it da linha 8) 
  it.only('Cenary 1 - Visual Test implementation', function () {
   // cy.compareSnapshot('login-page'); 
    cy.get('img.imagem').compareSnapshot({
      name:'Home-page-Icon',
      testThreshold: 0.4});
    cy.get('input[data-testid="email"]').compareSnapshot({
      name:'Email-field',
      testThreshold: 0.4});
    cy.get('input[data-testid="senha"]').compareSnapshot({
      name:'Password-field',
      testThreshold: 0.4}); 
    cy.get('[data-testid="entrar"]').compareSnapshot({
     name:'Login-Button', 
     testThreshold: 0.5});
    cy.get('small[class="message form-text"]').compareSnapshot({
      name:'Baseboard-Text',
      testThreshold:0.4});

  });
  it.skip('Cenary 2 - initial state of visible screen email, password and baseboard', function () {
    cy.get('input[data-testid="email"]').should('be.enabled');//como no cenário 1 já vai estar sendo validado o visual nesse cenário só serão validados se estão enable
    cy.get('input[data-testid="senha"]').should('be.enabled');
    cy.get('[data-testid="entrar"]').should('be.enabled');
  });
  it('Cenary 3 - Redirect to register page button validation', function (){
    cy.get('[data-testid="cadastrar"]').click();
    //cy.url().should('be.equal','https://front.serverest.dev/cadastrarusuarios');
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/cadastrarusuarios`);
    //trocar cy.url nos outros testes 
  });      
}); 

context('Login in application', function () {
let user;
  before(() => {
   return cy.registerNewUserAPI('true')
    .then((response) => {
      console.log("it dentro da spec", response);
      user = response;
    });
    });  
  it('Cenary 1 - Must allow the user to login with admin role', function () {
  cy.get('input[data-testid="email"]').type(user.email);
  cy.get('input[data-testid="senha"]').type(user.password);
  cy.get('[data-testid="entrar"]').should('be.enabled').click();
  cy.wait(4000);
  cy.url().should('be.equal','https://front.serverest.dev/admin/home')
  });
});  
})