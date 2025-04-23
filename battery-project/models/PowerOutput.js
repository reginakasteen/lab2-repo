export class PowerOutput {
    constructor(id) {
      this.id = id;
      this.power = 0;
    }
  
    updatePower(voltage, current) {
      this.power = calculatePower(voltage, current);
    }
  
    getPower() {
      return this.power;
    }
}