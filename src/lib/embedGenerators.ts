import { MothershipCharacter } from "./MothershipCharacterClass";
import { green, white, blue, red } from "color-name";
import { User } from "discord.js";
import { skillType } from "./types";

/**
 * Generates embed message
 * @param {mschar} Mothership character to embed
 * @param {user} User to make character author
 */
export function characterEmbedGen(mschar: MothershipCharacter, user: User) {
  const marineCombatBonus = () => {
    switch (mschar.mothershipClass.name) {
      case "Marine":
        return '\n+5 Combat bonus whenever a near fellow Marine is nearby';
      default:
        return '';
    }
  };
  const classColor = () => {
    switch (mschar.mothershipClass.name){
      case "Teamster":
        return blue;
      case "Scientist":
        return white;
      case "Android":
        return red;
      case "Marine":
        return green;
      default:
        return green;
    }
  }
  return {
    color: classColor(),
    title: `${mschar.mothershipClass.name} | ${mschar.firstName} ${mschar.lastName}`,
    author: {
      name: `${user.username}`,
      icon_url: `${user.avatarURL()}`,
    },
    description: `**Starting Loadout**
${mschar.gear}`,
    fields: [
      {
        name: "Stats",
        value: `Str: ${mschar.strength} | Spe: ${mschar.speed} | Int: ${mschar.intelligence} | Com: ${mschar.combat}${marineCombatBonus()}`,
        inline: true,
      },
      {
        name: "Fortitudes",
        value: `Sanity: ${mschar.sanity} | Fear: ${mschar.fear} | Body: ${mschar.body} | Armor: ${mschar.armor}`,
        inline: true,
      },
      {
        name: "Health",
        value: `${mschar.health}`,
        inline: true,
      },
      {
        name: "Stress",
        value: `${mschar.stress}`,
        inline: true,
      },
      {
        name: "Resolve",
        value: `${mschar.resolve}`,
        inline: true,
      },
      {
        name: `Credits`,
        value: `${mschar.credits}`,
        inline: true,
      },
      /* { // Skill Profile
        name: `Skill Set | ${mschar.skillProfile.name}`,
        value: `${mschar.skillProfile.value}`,
      }, */
      {
        name: "Skills",
        value: skillTextBlock(mschar.skills),
      },
      {
        name: "XP",
        value: `${mschar.experienceGain}`,
      },
      {
        name: `Fear Save`,
        value: `${mschar.dealing}`,
      },
      {
        name: "Nightmare",
        value: `${mschar.nightmare}`,
      },
      {
        name: `Patch`,
        value: `${mschar.patch}`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: `MoThErShIp`,
    },
  };
}

function skillTextBlock(input: skillType[]) {
  let returnString = "";
  // tslint:disable-next-line: prefer-for-of
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    returnString =
      returnString +
      `**${element.name}** | ${element.type.name} \`${element.type.bonus}%\` | ${element.description}
`;
  }
  return returnString;
}
