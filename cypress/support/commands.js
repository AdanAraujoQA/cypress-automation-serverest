const {faker} = require('@faker-js/faker')

Cypress.Commands.add('homeScreen', ()=>{
   cy.visit('/login')
})

Cypress.Commands.add('registerNewUserAPI',  (userAdmin) => {
    return cy.randomUser().then((user) => {
      const requestBody = {
        nome: user.fullName,
        email: user.email,
        password: user.password,
        administrador: userAdmin,
      };
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios', 
        body: requestBody,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201)
        return requestBody;
      });
      //registrar novo usuário via api com a constante request body que é passado na forma da request e exportado como responseBody

// -    let nameFake = user.fullName;
// -    let emailfake = user.email;
// -    let passwordFake = user.password;
// -    cy.request({
// -      method: 'POST',
// -      url: 'https://serverest.dev/usuarios', 
// -      body: {
// -        "nome": nameFake,
// -        "email": emailfake,
// -        "password": passwordFake,
// -        "administrador": userAdmin,
// -      }
// -    })
// -    
// -    .then((response) => {
// -    cy.log(response.body);   
// -    });
  });
});
  // Cypress.Commands.add('deleteAPI', () => {
  //   cy.request({
  //       method: 'GET',
  //       url: 'https://serverest.dev/usuarios?email=adanaraujo.souza@gmail.com', // substitua com a URL real da sua API de login
  //     }).then((response) => {
  //       const userId = response.body._id;
  //       console.log(userId); // imprime o ID do usuário
  //     });
  
  Cypress.Commands.add('randomUser', () =>{ 
        let fakerSeed = faker.seed(faker.number.int({ max: 999 }));
        let email = faker.internet.email();
        let fullName = faker.name.fullName()
        let password = faker.internet.password()

        console.log("Commands do faker randomuser", email, fullName, password, fakerSeed);

        return {email, fullName, password, fakerSeed}; 
  })  
  //Criar um usuário randomico e alocar em variaveis
  
  Cypress.Commands.add('createRandomUser', (userAdmin) => {
    cy.randomUser().then((user) => {
    cy.visit('/')
    cy.get('input[data-testid="email"]').type(user.email);
    cy.get('input[data-testid="senha"]').type(user.password); 
    cy.log(user.seedNumber, user.fullName, user.password, user.email)
    if (userAdmin === 'true') {
      cy.get('[data-testid="checkbox"]').click();  
       
    }
    cy.intercept(`${Cypress.config("baseUrl")}/login`).as('apiCheck');  
    cy.get ('[data-testid="cadastrar"]').click();
    cy.wait('@apiCheck').its('response.statusCode').should('eq', 200); 
  });
  });