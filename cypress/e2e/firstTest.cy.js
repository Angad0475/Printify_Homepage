describe('Navbar Component Test', () => {
  beforeEach(() => {
    // Replace this URL with the URL of the page where your Navbar is rendered
    cy.visit('http://localhost:3000'); 
  });

  it('should display the logo image', () => {
    cy.get('.nav_logo img').should('be.visible'); // Check if the logo image is visible
  });

  it('should display the correct logo name', () => {
    cy.contains('.logo_name', 'Printify').should('be.visible'); // Check if the logo name is displayed
  });

  it('should display all navigation menu items', () => {
    const menuItems = ['Catalog', 'How it works', 'Pricing', 'Blog', 'Services', 'Use-Cases', 'Need help?'];

    menuItems.forEach(item => {
      cy.contains('li', item).should('be.visible'); // Check if each menu item is visible
    });
  });

  it('should display Log in and Sign up buttons', () => {
    cy.contains('.log', 'Log in').should('be.visible'); // Check if the "Log in" button is displayed
    cy.contains('.sign', 'Sign up').should('be.visible'); // Check if the "Sign up" button is displayed
  });
});