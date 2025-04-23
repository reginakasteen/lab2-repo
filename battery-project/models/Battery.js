export class Battery {
    constructor(capacity) {
      this.capacity = capacity;
      this.currentCharge = capacity;
    }
  
    updateCharge(amount) {
      this.currentCharge = Math.max(0, Math.min(this.capacity, amount));
    }
  
    get percentage() {
      return parseFloat(((this.currentCharge / this.capacity) * 100).toFixed(1));
    }
  
    get hoursRemaining() {
      return this.currentCharge;
    }
}