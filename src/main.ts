import Discord = require("discord.js");
import { MothershipCharacter } from "./lib/MothershipCharacterClass";
import { Config } from "./lib/config";
import { characterEmbedGen } from './lib/embedGenerators';
import { debug } from "./lib/debug";
const client = new Discord.Client();
const config = new Config();

client.once("ready", () => {
  debug("Ready!");
  debug(`Code base: ${config.version}`);
  debug(`Node V: ${process.version}`);
});

client.on("message", async (message) => {
if (!message.author.bot) {
  /**
   * Generate Character
   */
  if (message.content === `${config.prefix} gen`) {
    try {
      const mschar = new MothershipCharacter();
      const mothershipCharEmbed = characterEmbedGen(mschar, message.author);
      debug(mschar,'json');
      await message.channel.send({ embed: mothershipCharEmbed });
    } catch (error) {
      debug(error, 'error');
    }
  };
  /**
   * Help message.
   */
  if (message.content === `${config.prefix} h`||message.content === `${config.prefix} help`|| message.mentions.has(client.user.id)) {
    try {
      await message.channel.send(`I can only do the following:
\`${config.prefix} h\`,\`${config.prefix} help\`, <@${client.user.id}> to display this help message.
\`${config.prefix} gen\` to generate a random character.`)
    } catch(error) {
      debug(error, 'error');
    }
  };
}
});

client.login(config.token);
