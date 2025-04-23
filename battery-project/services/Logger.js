export class Logger {
    static log(message) {
      console.log(`[${new Date().toISOString()}] ${message}`);
    }
}