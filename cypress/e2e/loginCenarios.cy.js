const {faker} = require('@faker-js/faker')
let email, fullName, password, seedNumber;

// import('../support/commands')
//import seletores from '../support/locators/login';
describe('Pré-requirements definitions', function () {
  beforeEach(function () {
    seedNumber = faker.number.int({ max: 999999 });
    faker.seed(seedNumber);
    email = faker.internet.email();
    fullName = faker.name.fullName();
    password = faker.internet.password();
    cy.registerNewUser(fullName,email,password, 'true').then((responseDados)=>{
        console.log(responseDados)
    })
})

  // beforeEach(function () {
  //         seedNumber = faker.number.int({ max: 999999 });
  //         faker.seed(seedNumber);
  //         email = faker.internet.email();
  //         fullName = faker.name.fullName();
  //         password = faker.internet.password();
  //         cy.registerNewUser(fullName,email,password, 'true').then((responseDados)=>{
  //         console.log(responseDados)
               
          
  //         })
  //     })
       
context('Login page with user registered', function () {
  
  it('Must render correctly', function () {
    cy.visit('/');
    cy.log('Cenary 1 - initial state of visible screen');

    cy.get('div>div>div>form').should('be.visible');
    cy.contains("Login").should('be.visible');

    cy.log('Cenary 1.1 - initial state of visible screen email, password and baseboard');

    cy.get('input[data-testid="email"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu email');
    cy.get('input[data-testid="senha"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite sua senha'); 
    cy.get('[data-testid="entrar"]').should('be.enabled').and('be.visible').and('have.text','Entrar');

    cy.log('Cenary 2 - Redirect button validation');

    cy.get('div>div>div>form>small>a').click();
    cy.url().should('be.equal','https://front.serverest.dev/cadastrarusuarios')
              
});
    
        it('Must allow the user to login with admin role', function () {
          cy.visit('/');
          cy.get('input[data-testid="email"]').type(email);
          cy.get('input[data-testid="senha"]').type(password); 
          cy.get('[data-testid="entrar"]').click();
          cy.log(seedNumber)
        });
          
       });

});      
      export default function () {
        return { email, fullName, password ,seedNumber };

      };