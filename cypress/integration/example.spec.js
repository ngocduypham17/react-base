describe('My First Test', () => {
    it('Visits the app', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Welcome to the Home Page');
    });
  });
  