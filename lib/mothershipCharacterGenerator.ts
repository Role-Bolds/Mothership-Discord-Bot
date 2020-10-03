import { classes, teamsterSkills, scientistSkills, androidSkills, marineSkills } from './lists/classes';
import { firstNames, lastNames, androidNames, androidVersion } from './lists/names';
import { randomNumberGenerator, batchRandomNumberGenerator } from './randomNumberGenerator';
import { loadouts } from './lists/loadouts';
import { nightmares } from './lists/nightmares';
import { patches } from './lists/patches';

 export class MothershipChar {
    msClass: string;
    firstName: string;
    lastName: string;
    int: number;
    str: number;
    speed: number;
    combat: number | string;
    sanity: number;
    fear: number;
    body: number;
    armor: number;
    gear: string;
    health: number;
    stress: number;
    resolve: number;
    skillProfile: {name:string, value:string};
    dealing: string;
    bonusXP: string;
    nightmare: string;
    patch: string;
    credits: number;

    constructor() {
        this.msClass = classes[randomNumberGenerator(classes.length)];
        // set name based on if Android
        switch (this.msClass) {
           case 'Android':
            this.firstName = androidNames[randomNumberGenerator(androidNames.length)];
            this.lastName = androidVersion[randomNumberGenerator(androidVersion.length)];
               break;
           default:
            this.firstName = firstNames[randomNumberGenerator(firstNames.length)];
            this.lastName = lastNames[randomNumberGenerator(firstNames.length)];
                break;
        }
        // generate stats
        this.int = batchRandomNumberGenerator(6, 10);
        this.str = batchRandomNumberGenerator(6, 10);
        this.speed = batchRandomNumberGenerator(6,10);
        this.combat = batchRandomNumberGenerator(6, 10);
        // set Class specific values
        switch (this.msClass) {
            case 'Teamster':
                this.speed = this.speed + 5;
                this.str = this.str + 5;
                this.sanity = 30;
                this.fear = 35;
                this.body = 30;
                this.armor = 35;
                this.skillProfile = teamsterSkills[randomNumberGenerator(teamsterSkills.length)];
                this.bonusXP = `Gain 1XP whenever you first set foot on an undiscovered planet.`;
                this.dealing = `Once per session, a Teamster may re-roll a roll on the Panic Effect Table.`;
                    break;
            case 'Android':
                this.speed = this.speed + 5;
                this.int = this.int + 5;
                this.sanity = 20;
                this.fear = 85;
                this.body = 40;
                this.armor = 25;
                this.skillProfile = androidSkills[randomNumberGenerator(androidSkills.length)];
                this.bonusXP = `Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence.`;
                this.dealing = `Fear Saves made in the presence of Androids have Disadvantage.`;
                    break;
            case 'Scientist':
                this.int = this.int + 10;
                this. sanity = 40;
                this.fear = 25;
                this.body = 25;
                this.armor = 30
                this.skillProfile = scientistSkills[randomNumberGenerator(scientistSkills.length)];
                this.bonusXP = `Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study.`;
                this.dealing = `Whenever a Scientist fails a Sanity Save, every friendly player nearby gains 1 Stress.`;
                    break;
            case 'Marine':
                this.combat = this.combat + 5 + " (+5 when a friendly Marine is nearby)"
                this.sanity = 25;
                this.fear = 30;
                this.body = 35;
                this.armor = 40;
                this.skillProfile = marineSkills[randomNumberGenerator(marineSkills.length)];
                this.bonusXP = `Gain 1 XP for killing an enemy.`;
                this.dealing = `Whenever a Marine Panics, every friendly player nearby must make a Fear Save`;
                    break;
            default:

                    break;
        }
        this.gear = loadouts[randomNumberGenerator(loadouts.length)];
        this.nightmare = nightmares[randomNumberGenerator(nightmares.length)];
        this.patch = patches[randomNumberGenerator(patches.length)];
        this.credits = batchRandomNumberGenerator(5,10)*10;
        this.health = this.str*2;
        this.stress = 2;
        this.resolve = 0;
   }

}

// let test = new mothershipChar;
// console.log(JSON.stringify(test));
