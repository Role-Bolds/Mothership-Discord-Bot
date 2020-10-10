import Discord = require("discord.js");
import { MothershipCharacter } from "./lib/MothershipCharacterClass";
import { Config } from "./lib/config";
import { characterEmbedGen } from './lib/embedGenerators';
import { debug } from "./lib/debug";
import { additionalSelectableSkills, checkSkillList, randomStartingSkills } from './lib/SkillsClass';
import { skillType } from './lib/types';
import { randomNumberGenerator } from './lib/randomNumberGenerator';
import { MOTHERSHIP_CLASSES } from "./lib/lists/classes";
const client = new Discord.Client();
const config = new Config();

client.once("ready", () => {
  debug("Ready!");
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
  if (message.content === `${config.prefix} skills`) {
    try {
      /* const skillTestList = ['Biology', 'Geology', 'Chemistry', 'Test', ''];
      debug(`Running skill check list: ${skillTestList}`)
      const skillCheck:skillType[] = checkSkillList(skillTestList);
      debug(skillCheck, 'json');
      debug("Generating additional skills to select from");
      const newSkills = additionalSelectableSkills(skillCheck);
      debug(newSkills, 'json');
      const randomNewSkill = newSkills[randomNumberGenerator(newSkills.length)];
      debug(`Random skill chosen: ${randomNewSkill}
${JSON.stringify(checkSkillList([randomNewSkill]), null, 2)}`,'debug'); */
      try {
        debug("Testing Teamster Generation");
        const testSkills = randomStartingSkills(MOTHERSHIP_CLASSES[0]);
        debug(testSkills, 'json');
      } catch(error) {
        debug(error, 'error');
      };
      try {
      debug("testing Android Generation");
      const testSkills = randomStartingSkills(MOTHERSHIP_CLASSES[1]);
      debug(testSkills, 'json');
    } catch(error) {
      debug(error, 'error');
    }
    try {
      debug("testing Scientist Generation");
      const testSkills = randomStartingSkills(MOTHERSHIP_CLASSES[2]);
      debug(testSkills, 'json');
    } catch(error) {
      debug(error, 'error');
    }
    try {
      debug("testing Marine Generation");
      const testSkills = randomStartingSkills(MOTHERSHIP_CLASSES[3]);
      debug(testSkills, 'json');
    } catch(error) {
      debug(error, 'error');
    }
    } catch(error) {
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
