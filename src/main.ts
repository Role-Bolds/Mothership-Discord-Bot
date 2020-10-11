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
  // Ignore messages from bot
  if (message.author.bot) return;
  // Help message
  if (
    message.content === `${config.prefix} h` ||
    message.content === `${config.prefix} help` ||
    message.mentions.has(client.user.id)
  ) {
    try {
      await message.channel.send(`I can only do the following:
\`${config.prefix} h\`,\`${config.prefix} help\`, <@${client.user.id}> to display this help message.
\`${config.prefix} gen [class]\` to generate a random character.
    Classes available: Teamster, Scientist, Android, Marine
My commands are not case sensitive.
V:${config.version}`);
    } catch (error) {
      debug(error, "error");
    }
  }
  // Ignore anything else without proper prefix
  if(!message.content.startsWith(config.prefix))return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  /**
   * Generate Character
   */
  if (command === `gen`) {
    // if no arg then generate random
    if (!args.length) {
      try {
          const mschar = new MothershipCharacter();
          const mothershipCharEmbed = characterEmbedGen(mschar, message.author);
          debug(mschar, "json");
          await message.channel.send({ embed: mothershipCharEmbed });
        } catch (error) {
          debug(error, "error");
        }
      }
      // else use arg to generate specific class
      // if invalid arg is given random character will generate
    else {
      try {
        const mschar = new MothershipCharacter(args[0].toLowerCase());
        const mothershipCharEmbed = characterEmbedGen(mschar, message.author);
        debug(mschar, "json");
        await message.channel.send({ embed: mothershipCharEmbed });
      } catch (error) {
        debug(error, "error");
      }
    };
  };
});

client.login(config.token);
