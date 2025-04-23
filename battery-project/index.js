import { PowerStation } from "./models/PowerStation.js";
import { ReportGenerator } from "./services/ReportGenerator.js";

const station = new PowerStation(1000, 300, 250);

station.connectOutput("outlet1");
station.updateInput(220, 1.2);
station.updateOutput("outlet1", 12, 5);
station.updateBatteryLevel(900);

const reporter = new ReportGenerator(station);
reporter.generate();

console.log("Battery %:", station.batteryPercentage);
console.log("Remaining time:", station.timeRemaining);
  