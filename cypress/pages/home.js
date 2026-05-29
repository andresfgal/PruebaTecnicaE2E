class Home {
  clickWithPause(selectorOrText, isContains = false, waitTime = 1000) {
    if (isContains) {
      cy.contains(selectorOrText).click();
    } else {
      cy.get(selectorOrText).click();
    }
    cy.wait(waitTime);
  }

  visit() {
    cy.visit('https://www.demoblaze.com/');
    cy.wait(3000);
  }

  selectProduct(productName) {
    cy.contains('.card-title a', productName).click();
    cy.wait(1000);
  }

  addToCart() {
    this.clickWithPause('.btn-success', false, 1000);
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
  }

  goHome() {
    this.clickWithPause('Home', true, 1000);
  }
}

export default Home;