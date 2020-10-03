import { MothershipChar } from './mothershipCharacterGenerator';
import { green } from 'color-name';
import { User } from 'discord.js';

export function characterEmbedGen(mschar: MothershipChar, user: User) {
    return {
        color: green,
        title: `${mschar.msClass} | ${mschar.firstName} ${mschar.lastName}`,
        author: {
            name: `${user.username}`,
            icon_url: `${user.avatarURL()}`
        },
        description: `**Starting Loadout**
${mschar.gear}`,
        fields: [
            {
                name: 'Stats',
                value: `Str: ${mschar.str} | Spe: ${mschar.speed} | Int: ${mschar.int} | Com: ${mschar.combat}`,
                inline: true
            },
            {
                name: 'Fortitudes',
                value: `Sanity: ${mschar.sanity} | Fear: ${mschar.fear} | Body: ${mschar.body} | Armor: ${mschar.armor}`,
                inline: true
            },
            {
                name: 'Health',
                value: `${mschar.health}`,
                inline: true,
            },
            {
                name: 'Stress',
                value: `${mschar.stress}`,
                inline: true,
            },
            {
                name: 'Resolve',
                value: `${mschar.resolve}`,
                inline: true,
            },
            {
                name: `Credits`,
                value: `${mschar.credits}`,
                inline: true
            },
            {
                name: `Skill Set | ${mschar.skillProfile.name}`,
                value: `${mschar.skillProfile.value}`
            },
            {
                name: 'XP',
                value: `${mschar.bonusXP}`
            },
            {
                name: `Fear Save`,
                value: `${mschar.dealing}`
            },
            {
                name: 'Nightmare',
                value: `${mschar.nightmare}`
            },
            {
                name: `Patch`,
                value: `${mschar.patch}`
            }
        ],
        timestamp: new Date(),
        footer: {
            text: `MoThErShIp`
        },
    };
}
