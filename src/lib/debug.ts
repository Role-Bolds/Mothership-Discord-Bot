import { Config } from "./config";
const config = new Config();

export function debug(message: string, type?: string) {
    if (config.Debug) {
        switch (type) {
            case 'debug':
                // tslint:disable-next-line: no-console
                console.log(`[DEBUG] ${message}`);
                break;
            case 'error':
                // tslint:disable-next-line: no-console
                console.error(`[ERROR] ${message}`);
                break;
            default:
                // tslint:disable-next-line: no-console
                console.log(`[DEBUG] ${message}`);
                break;
        }
    }
}
