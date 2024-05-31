const {faker} = require('@faker-js/faker')

Cypress.Commands.add('homeScreen', ()=>{
   cy.visit('/login')
})

Cypress.Commands.add('registerNewUser',  (username, email, userPassword, role) => {
  //instalar faker, instanciar ele aqui
  //retirar as variáveis e parâmetros e substituir pelo faker
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', // substitua com a URL da sua API de login
      body: {
        "nome": username,
        "email": email,
        "password": userPassword,
        "administrador": role,
      }
    }).then((response) => {
      const responseBody = response.body;
      console.log(responseBody)
      window.localStorage.setItem('token', response.body.token); // armazena o token de autenticação no localStorage
      return responseBody;
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
        let fakerRandomNumber = faker.number.int({ max: 999 });
        let fakerSeed = faker.seed(fakerRandomNumber);
        const email = faker.internet.email();
        const fullName = faker.name.fullName()
        const password = faker.internet.password()
        console.log(email, fullName, password);

        return {
          email: email,
          fullName: fullName,
          password: password,
          fakerSeed: fakerSeed
      };
  
          // cy.registerNewUser(fullName,email,password, 'true').then((responseDados)=>{
          // console.log(responseDados);
          // })
         
  })  
  
