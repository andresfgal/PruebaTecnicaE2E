class CheckoutPage {
  randomText(length = 6) {
    return Math.random().toString(36).replace(/[^a-z]/g, '').substring(0, length);
  }

  randomCardNumber() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  randomMonth() {
    return (Math.floor(Math.random() * 12) + 1).toString();
  }

  randomYear() {
    return (Math.floor(2026 + Math.random() * 8)).toString(); 
  }

  typeWithPause(selector, value) {
    cy.get(selector).type(value);
    cy.wait(500);
  }

  PaymentForm() {
    cy.get('#name').type(this.randomText());
    cy.get('#country').type(this.randomText());
    cy.get('#city').type(this.randomText());
    cy.get('#card').type(this.randomCardNumber());
    cy.get('#month').type(this.randomMonth());
    cy.get('#year').type(this.randomYear());
  }

  confirmPurchase() {
    cy.contains('Purchase').click();
    cy.wait(500);
  }
  confirmOk(){
    cy.contains('OK').click();
  }
}

export default CheckoutPage;