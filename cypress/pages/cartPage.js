class CartPage {
    goToCart() {
    cy.contains('Cart').click();
    cy.wait(2000);
}
    goToPlaceOrder(){
    cy.contains('Place Order').click();
    cy.wait(2000);
    }
}
export default CartPage;
