class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        const existingProduct = this.items.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.updateQuantity(existingProduct.quantity + product.quantity);
        } else {
            this.items.push(product);
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    updateQuantity(productId, newQuantity) {
        const product = this.items.find(item => item.id === productId);
        if (product) {
            product.updateQuantity(newQuantity);
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }

    viewCart() {
        this.items.forEach(item => {
            console.log(`Товар: ${item.name}, Ціна: ${item.price}, Кількість: ${item.quantity}`);
        });
        console.log(`Загальна сума: ${this.calculateTotal()} грн`);
    }
}