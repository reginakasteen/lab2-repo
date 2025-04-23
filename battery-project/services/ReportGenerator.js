export class ReportGenerator {
    constructor(station) {
      this.station = station;
    }
  
    generate() {
      const { batteryPercentage, status, timeRemaining, totalOutputPower } = this.station;
      Logger.log(`Battery: ${batteryPercentage}%`);
      Logger.log(`Status: ${status}`);
      Logger.log(`Remaining time: ${timeRemaining}`);
      Logger.log(`Output power: ${totalOutputPower}W`);
    }
  }