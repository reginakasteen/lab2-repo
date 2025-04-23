class Discount {
    constructor(code, percent) {
        this.code = code;
        this.percent = percent;
    }

    applyDiscount(total) {
        return total * (1 - this.percent / 100);
    }
}