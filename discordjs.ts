import Discord = require("discord.js");
import { MothershipChar } from "./lib/mothershipCharacterGenerator";
import { Config } from "./lib/config";
import { characterEmbedGen } from "./lib/characterEmbedGen";
const client = new Discord.Client();
const config = new Config();

const DEBUG = true;
function debug(m) {
  if (DEBUG) {
    // tslint:disable-next-line: no-console
    console.log(`[DEBUG] ${m}`);
  }
}

client.once("ready", () => {
  debug("Ready!");
  debug(`Node V: ${process.version}`);
});

client.on("message", async (message) => {
  if (message.content === `${config.Prefix} gen`) {
    try {
      const mschar = new MothershipChar();
      const mothershipCharEmbed = characterEmbedGen(mschar, message.author);
      debug(JSON.stringify(mschar, null, 2));
      await message.channel.send({ embed: mothershipCharEmbed });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error(error);
    }
  }
});

client.login(config.Token);
