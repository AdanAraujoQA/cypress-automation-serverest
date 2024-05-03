// const {faker} = require('@faker-js/faker')
// import('../support/commands')
let userData;

describe('Pré-requirements definitions', function () {

 
  
  before(function () {
      cy.visit("/");
      
    })
  beforeEach(() => {
    cy.fixture('login.json').then((data) => {
    userData = data;
  });
});
    after(function(){
      //cy.deleteAPI(); deletar uma listagem de todos os usuários criados
    
    })

context('Login page with user registered', function () {
  
        it('Must render correctly', function () {
          cy.get(userData.imageHomeLogin).should('be.visible');
          cy.contains("Login").should('be.visible');
          cy.get(userData.emailField).should('be.enabled').and('be.visible');
          cy.get(userData.passwordField).should('be.enabled').and('be.visible')  
          cy.get(userData.bottonLogin).should('be.enabled').and('be.visible').and('have.text','Entrar')
          //validar texto placeholder                 

        });
      
        it('Must allow the user to login with admin role', function () {
          const fakerRandomNumber = faker.number.int();
          faker.seed(fakerRandomNumber);
          cy.homeScreen();
          const email = faker.internet.email();
          const fullName = faker.name.fullName()
          const password = faker.internet.password()
          cy.registerNewUser(fullName,email,password, 'true').then((responseDados)=>{
          console.log(responseDados);

          cy.get(userData.emailField).type(email);
          cy.get(userData.passwordField).type(password);
          cy.get(userData.bottonLogin).click();

        });
          
       });
       
      });
})



