import { Config } from "./config";
const config = new Config();

export function debug(message: any, type?: string) {
  if (config.debug) {
    switch (type) {
      case "debug":
        // tslint:disable-next-line: no-console
        console.log(`[DEBUG] ${message}`);
        break;
      case "error":
        // tslint:disable-next-line: no-console
        console.error(`[ERROR] ${message}`);
        break;
      case "json":
        // tslint:disable-next-line: no-console
        console.log(`[DEBUG]
${JSON.stringify(message, null, 2)}`);
        break;
      default:
        // tslint:disable-next-line: no-console
        console.log(`[DEBUG] ${message}`);
        break;
    }
  }
}