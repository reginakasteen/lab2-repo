class Shop {
    constructor() {
        this.products = [];
        this.cart = new Cart();
        this.discounts = [];
    }

    addProduct(id, name, price, quantity) {
        const product = new Product(id, name, price, quantity);
        this.products.push(product);
    }

    addDiscount(code, percent) {
        const discount = new Discount(code, percent);
        this.discounts.push(discount);
    }

    findProduct(id) {
        return this.products.find(product => product.id === id);
    }

    addToCart(productId, quantity) {
        const product = this.findProduct(productId);
        if (product) {
            const cartProduct = new Product(product.id, product.name, product.price, quantity);
            this.cart.addProduct(cartProduct);
        }
    }

    removeFromCart(productId) {
        this.cart.removeProduct(productId);
    }

    checkout() {
        let total = this.cart.calculateTotal();
        this.discounts.forEach(discount => {
            total = discount.applyDiscount(total);
        });
        console.log(`Ваша сума до оплати: ${total} грн`);
    }

    viewCart() {
        this.cart.viewCart();
    }
}

