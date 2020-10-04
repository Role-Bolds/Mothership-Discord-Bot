import { MothershipCharacter } from "./mothershipCharacterGenerator";
import { green } from "color-name";
import { User } from "discord.js";

export function characterEmbedGen(mschar: MothershipCharacter, user: User) {
  return {
    color: green,
    title: `${mschar.MothershipClass} | ${mschar.FirstName} ${mschar.LastName}`,
    author: {
      name: `${user.username}`,
      icon_url: `${user.avatarURL()}`,
    },
    description: `**Starting Loadout**
${mschar.Gear}`,
    fields: [
      {
        name: "Stats",
        value: `Str: ${mschar.Strength} | Spe: ${mschar.Speed} | Int: ${mschar.Intelligence} | Com: ${mschar.Combat}`,
        inline: true,
      },
      {
        name: "Fortitudes",
        value: `Sanity: ${mschar.Sanity} | Fear: ${mschar.Fear} | Body: ${mschar.Body} | Armor: ${mschar.Armor}`,
        inline: true,
      },
      {
        name: "Health",
        value: `${mschar.Health}`,
        inline: true,
      },
      {
        name: "Stress",
        value: `${mschar.Stress}`,
        inline: true,
      },
      {
        name: "Resolve",
        value: `${mschar.Resolve}`,
        inline: true,
      },
      {
        name: `Credits`,
        value: `${mschar.Credits}`,
        inline: true,
      },
      {
        name: `Skill Set | ${mschar.SkillProfile.name}`,
        value: `${mschar.SkillProfile.value}`,
      },
      {
        name: "XP",
        value: `${mschar.ExperienceGain}`,
      },
      {
        name: `Fear Save`,
        value: `${mschar.Dealing}`,
      },
      {
        name: "Nightmare",
        value: `${mschar.Nightmare}`,
      },
      {
        name: `Patch`,
        value: `${mschar.Patch}`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: `MoThErShIp`,
    },
  };
}
