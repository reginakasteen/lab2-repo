class BatteryInfo {
    constructor(capacity, current) {
        this.capacity = capacity;
        this.current = current;
    }
}

class Logger {
    log(msg) {
        // буде реалізовано пізніше
    }

    format(msg) {
        return `[LOG]: ${msg}`;
    }
}

class AdvancedLogger extends Logger {
    logWithTimestamp(msg) {
        console.log(`[${new Date().toISOString()}] ${msg}`);
    }
}

class PowerStation {
    constructor(batteryCapacity, maxIn, maxOut) {
        this.batteryInfo = new BatteryInfo(batteryCapacity, batteryCapacity);
        this.inputPower = 0;
        this.outputs = new Map();
        this.maxIn = maxIn;
        this.maxOut = maxOut;
        this.logger = new AdvancedLogger();
    }

    calculatePower(v, c) {
        return v * c;
    }

    addOutputDevice(outputId) {
        this.outputs.set(outputId, 0);
        this.logger.logWithTimestamp("Output added: " + outputId);
    }

    changeInput(voltage, current) {
        this.inputPower = this.calculatePower(voltage, current);
        this.logger.logWithTimestamp("Input updated");
    }

    updateOutputPower(outputId, v, c) {
        const p = this.calculatePower(v, c);
        this.outputs.set(outputId, p);
        this.logger.logWithTimestamp("Updated power for: " + outputId);
    }

    removeOutputDevice(id) {
        this.outputs.delete(id);
        this.logger.logWithTimestamp("Removed: " + id);
    }

    changeBatteryLeft(left) {
        this.batteryInfo.current = left;
        this.logger.logWithTimestamp("Battery level updated");
    }

    getBatteryPercent() {
        let pct = ((this.batteryInfo.current / this.batteryInfo.capacity) * 100).toFixed(2);
        return parseFloat(pct);
    }

    outputPowerSum() {
        let sum = 0;
        for (let p of this.outputs.values()) {
            sum += p;
        }
        return Math.round(sum);
    }

    remainTimeCalc() {
        const diff = this.inputPower - this.outputPowerSum();
        if (diff === 0) return "99:59";
        const h = Math.abs(this.batteryInfo.current / diff);
        const m = Math.ceil((h % 1) * 60);
        return `${String(Math.floor(h)).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }

    getReportGenerator() {
        return new ReportGenerator(this);
    }

    state() {
        if (this.inputPower > this.maxIn || this.outputPowerSum() > this.maxOut) {
            return "overload";
        } else if (this.inputPower > this.outputPowerSum()) {
            return "charging";
        } else if (this.outputPowerSum() > this.inputPower) {
            return "discharging";
        } else {
            return "idle";
        }
    }

    unusedMethod() {
        console.log("Невикористаний метод");
    }
}

class ReportGenerator {
    constructor(station) {
        this.station = station;
    }

    generate() {
        const logger = new AdvancedLogger();
        logger.logWithTimestamp("Battery: " + this.station.batteryInfo.current);
        logger.logWithTimestamp("Status: " + this.station.state());
        logger.logWithTimestamp("Remain: " + this.station.remainTimeCalc());
    }
}

const ps = new PowerStation(1000, 300, 250);
ps.addOutputDevice("outlet1");
ps.changeInput(220, 1.2);
ps.updateOutputPower("outlet1", 12, 5);
ps.changeBatteryLeft(900);

const report = ps.getReportGenerator();
report.generate();

console.log(ps.getBatteryPercent());
console.log(ps.remainTimeCalc());
