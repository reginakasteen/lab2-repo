class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
  
    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
  
    calculateTotal() {
        return this.price * this.quantity;
    }
}
