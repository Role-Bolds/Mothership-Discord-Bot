// tslint:disable-next-line: no-var-requires
const config = require('../../secrets/config.json')
export class Config {
  public readonly Token = config.DISCORD_BOT_USER_TOKEN;
  public readonly Prefix = config.DISCORD_BOT_PREFIX;
  public readonly Debug = config.DISCORD_BOT_DEBUG;
}
