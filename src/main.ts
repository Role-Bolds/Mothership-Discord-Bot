import Discord = require("discord.js");
import { MothershipCharacter } from "./lib/mothershipCharacterGenerator";
import { Config } from "./lib/config";
import { characterEmbedGen } from './lib/characterEmbedGen';
import { debug } from "./lib/debug";
import { additionalSelectableSkills, checkSkillList } from "./lib/lists/skills";
import { SkillList } from './lib/types';
const client = new Discord.Client();
const config = new Config();

client.once("ready", () => {
  debug("Ready!");
  debug(`Node V: ${process.version}`);
});

client.on("message", async (message) => {
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
  if (message.content === `${config.prefix} skills`) {
    try {
      const skillTestList = ['Biology', 'Geology', 'Chemistry', 'Test', ''];
      debug(`Running skill check list: ${skillTestList}`)
      const skillCheck:SkillList = checkSkillList(skillTestList);
      debug(skillCheck, 'json');
      debug("Generating additional skills to select from");
      debug(additionalSelectableSkills(skillCheck), 'json');
    } catch(error) {
      debug(error, 'error');
    }
  }
});

client.login(config.token);
