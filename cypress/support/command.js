// Example custom command
Cypress.Commands.add('login', (username, password) => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        username,
        password,
      },
    }).then((resp) => {
      window.localStorage.setItem('token', resp.body.token);
    });
  });
  