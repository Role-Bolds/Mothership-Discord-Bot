// tslint:disable-next-line: no-var-requires
const config = require(`../../secrets/config.json`);
// tslint:disable-next-line: no-var-requires
const pkg = require("../../package.json");
export class Config {
  public readonly token = config.DISCORD_BOT_USER_TOKEN;
  public readonly prefix = config.DISCORD_BOT_PREFIX;
  public readonly debug = config.DISCORD_BOT_DEBUG;
  public readonly version = pkg.version;
}