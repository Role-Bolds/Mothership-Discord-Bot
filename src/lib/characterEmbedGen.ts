import { MothershipCharacter } from "./mothershipCharacterGenerator";
import { green } from "color-name";
import { User } from "discord.js";

/**
 * Generates embed message
 * @param {mschar} Mothership character to embed
 * @param {user} User to make character author
 */
export function characterEmbedGen(mschar: MothershipCharacter, user: User) {
  return {
    color: green,
    title: `${mschar.mothershipClass} | ${mschar.firstName} ${mschar.lastName}`,
    author: {
      name: `${user.username}`,
      icon_url: `${user.avatarURL()}`,
    },
    description: `**Starting Loadout**
${mschar.gear}`,
    fields: [
      {
        name: "Stats",
        value: `Str: ${mschar.strength} | Spe: ${mschar.speed} | Int: ${mschar.intelligence} | Com: ${mschar.combat}`,
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
      {
        name: `Skill Set | ${mschar.skillProfile.name}`,
        value: `${mschar.skillProfile.value}`,
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
