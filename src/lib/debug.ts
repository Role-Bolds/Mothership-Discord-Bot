import { Config } from "./config";
const config = new Config();

export function debug(message: string | object, type?: string) {
  if (config.debug) {
    switch (type) {
      case "debug":
        // tslint:disable-next-line: no-console
        return console.log(`[DEBUG] ${message}`);
      case "error":
        // tslint:disable-next-line: no-console
        return console.error(`[ERROR] ${message}`);
      case "json":
        // tslint:disable-next-line: no-console
        return console.log(`[DEBUG]
${JSON.stringify(message, null, 2)}`);
      default:
        // tslint:disable-next-line: no-console
        return console.log(`[DEBUG] ${message}`);
    }
  }
}