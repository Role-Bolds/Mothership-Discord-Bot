import Discord = require("discord.js");
import { MothershipCharacter } from "./lib/mothershipCharacterGenerator";
import { Config } from "./lib/config";
import { characterEmbedGen } from "./lib/characterEmbedGen";
import { debug } from "./lib/debug";
const client = new Discord.Client();
const config = new Config();

client.once("ready", () => {
  debug("Ready!");
  debug(`Node V: ${process.version}`);
});

client.on("message", async (message) => {
  if (message.content === `${config.Prefix} gen`) {
    try {
      const mschar = new MothershipCharacter();
      const mothershipCharEmbed = characterEmbedGen(mschar, message.author);
      debug(JSON.stringify(mschar, null, 2));
      await message.channel.send({ embed: mothershipCharEmbed });
    } catch (error) {
      debug(error, 'error');
    }
  }
});

client.login(config.Token);
