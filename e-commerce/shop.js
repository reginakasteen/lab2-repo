class Shop {
    constructor() {
        this.items = [];
        this.discounts = [];
        this.cart = [];
    }



    // Додати товар
    addProduct(id, name, price, quantity) {this.items.push({ id, name, price, quantity });}

    // Додати знижку
    addDiscount(code, percent) {this.discounts.push({ code, percent });}

    itemAdd(id, quantity) {
        let product = this.items.find(item => item.id === id);
        if(product) {
            let cartItem = this.cart.find(item => item.id === id);
            if(cartItem) {
                cartItem.quantity += quantity;
            } else {
                this.cart.push({ ...product, quantity });
            }
        }
    }
    removeFromCart(id) {this.cart = this.cart.filter(item => item.id !== id);}

    updateQ(id, quantity) {
        let cartItem = this.cart.find(item => item.id === id);
        if(cartItem) {
            cartItem.quantity = quantity;
        }
    }

    calculate_total() {
        let total = 0;
        for(let item of this.cart) {
            total += item.price * item.quantity;
        }
        return total;
    }

    apply_discount(total) {
        let discount = this.discounts.find(d => d.code === "PROMO123");
        if(discount) {
            total *= (1 - discount.percent / 100);
        }
        return total;
    }

    finalPrice() {
        let total = this.calculate_total();
        return this.apply_discount(total);
    }

    // Вивести корзину
    Cart() {
        for(let item of this.cart) console.log(`Товар: ${item.name}, Ціна: ${item.price}, Кількість: ${item.quantity}`);
        let total = this.calculate_total();
        let finalPrice = this.apply_discount(total);
        console.log(`Загальна сума: ${total} грн, зі знижкою: ${finalPrice} грн`);
    }



    hasItemsInCart() {return this.cart.length > 0;}



    // Оформити замовлення
    checkout() {
        if(!this.hasItemsInCart()) {
          console.log("Корзина порожня.");
        } else {
          let total = this.calculate_total();
            let finalPrice = this.finalPrice();
            console.log(`Ваше замовлення на суму ${finalPrice} грн. Дякуємо за покупку!`);
        }
    }

    applyDiscountToAll() { for (let product of this.items) product.price = product.price * 0.9; }

    //hasProduct(id) {return this.items.some(item => item.id === id);}
}

const shop = new Shop();
shop.addProduct(1, "Телевізор", 10000, 5);
shop.addProduct(2, "Ноутбук", 25000, 10);
//shop.addProduct(3, "Мобільний телефон", 15000, 7);
shop.addDiscount("PROMO123", 10);
shop.itemAdd(1, 1);
shop.itemAdd(2, 2);
shop.Cart();
shop.applyDiscountToAll();
shop.checkout();
