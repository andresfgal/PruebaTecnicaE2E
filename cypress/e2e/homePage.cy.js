import Home from '../pages/home';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('PruebaTecnicaE2E', () => {
  const home = new Home();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('Flujo de compra', () => {
    home.visit();
    home.selectProduct('Samsung galaxy s6');
    home.addToCart();
    home.goHome();
    home.selectProduct('Nexus 6');
    home.addToCart();
    cartPage.goToCart();
    cartPage.goToPlaceOrder();
    checkoutPage.PaymentForm();  
    checkoutPage.confirmPurchase(); 
    checkoutPage.confirmOk();
  });
});
