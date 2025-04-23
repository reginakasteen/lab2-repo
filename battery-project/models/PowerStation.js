import { calculatePower } from "../utils/power.js";
import { Battery } from "./Battery.js";
import { PowerOutput } from "./PowerOutput.js";

export class PowerStation {
constructor(batteryCapacity, maxInput, maxOutput) {
    this.battery = new Battery(batteryCapacity);
    this.maximumInput = maxInput;
    this.maximumOutput = maxOutput;
    this.inputPower = 0;
    this.outputs = new Map();
}

updateInput(voltage, current) {
    this.inputPower = calculatePower(voltage, current);
}

connectOutput(id) {
    if (!this.outputs.has(id)) {
    this.outputs.set(id, new PowerOutput(id));
    }
}

updateOutput(id, voltage, current) {
    const output = this.outputs.get(id);
    if (output) {
    output.updatePower(voltage, current);
    }
}

disconnectOutput(id) {
    this.outputs.delete(id);
}

updateBatteryLevel(value) {
    this.battery.updateCharge(value);
}

get batteryPercentage() {
    return this.battery.percentage;
}

get totalOutputPower() {
    let total = 0;
    for (const output of this.outputs.values()) {
    total += output.getPower();
    }
    return Math.round(total);
}

get timeRemaining() {
    const netPower = this.inputPower - this.totalOutputPower;
    if (netPower === 0) return "99:59";
    const hours = Math.abs(this.battery.hoursRemaining / netPower);
    const minutes = Math.ceil((hours % 1) * 60);
    return `${String(Math.floor(hours)).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

get status() {
    if (this.inputPower > this.maximumInput || this.totalOutputPower > this.maximumOutput) {
    return "overload";
    } else if (this.inputPower > this.totalOutputPower) {
    return "charging";
    } else if (this.totalOutputPower > this.inputPower) {
    return "discharging";
    } else {
    return "idle";
    }
}
}