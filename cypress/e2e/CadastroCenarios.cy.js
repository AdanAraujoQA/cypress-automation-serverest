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
})

context('Login page with user not registered', function () {
 
    it('Must render correctly', function () {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
      cy.log('Cenary 1 - initial state of visible screen');
      cy.get('[data-testid="email"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu email');
      cy.get('[data-testid="password"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite sua senha'); 
      cy.get('[data-testid="nome"]').should('be.enabled').and('be.visible').and('have.attr','placeholder','Digite seu nome');
      cy.log('Cenary 2 - Redirect button validation');

    cy.get('div>div>div>form>small>a').click();
    cy.url().should('be.equal','https://front.serverest.dev/login')
  
    });
    it('Must allow the user to register with and without admin role', function () {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
      cy.get('input[data-testid="email"]').type(email);
      cy.get('input[data-testid="password"]').type(password); 
      cy.get('[data-testid="nome"]').type(fullName);
      cy.get ('[data-testid="cadastrar"]').click()
      cy.log(seedNumber)
    });
});
});
export default function () {
    return { email, fullName, password ,seedNumber };

  };