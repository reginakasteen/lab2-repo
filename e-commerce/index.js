import Shop from './Shop.js'
const shop = new Shop();
shop.addProduct(1, "Телевізор", 10000, 5);
shop.addProduct(2, "Ноутбук", 25000, 10);
shop.addProduct(3, "Мобільний телефон", 15000, 7);

shop.addDiscount("PROMO123", 10);

shop.addToCart(1, 1);
shop.addToCart(2, 2);
shop.viewCart();

shop.removeFromCart(1);
shop.viewCart();

shop.checkout();
