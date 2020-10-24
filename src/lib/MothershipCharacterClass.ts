import { MOTHERSHIP_CLASSES } from "./lists/classes";
import {
  FIRST_NAMES,
  LAST_NAMES,
  ANDROID_NAMES,
  ANDROID_VERSION,
} from "./lists/names";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator, reducer
} from "./randomNumberGenerator";
import { LOADOUTS_LIST } from "./lists/loadouts";
import { NIGHTMARES } from "./lists/nightmares";
import { PATCHES } from "./lists/patches";
import { classType, skillType } from "./types";
import { randomStartingSkills } from "./SkillsClass";

export class MothershipCharacter {
  mothershipClass: classType;
  firstName: string;
  lastName: string;
  intelligence: number;
  strength: number;
  speed: number;
  combat: number;
  sanity: number;
  fear: number;
  body: number;
  armor: number;
  gear: string;
  health: number;
  stress: number;
  resolve: number;
  skills: skillType[];
  skillProfile: { name: string; value: string };
  dealing: string;
  experienceGain: string;
  nightmare: string;
  patch: string;
  credits: number;

  constructor(classSelector?:string) {
    const generateItems = false;
    switch (classSelector) {
      case 'teamster':
        this.mothershipClass = MOTHERSHIP_CLASSES[0];
        break;
      case 'android':
        this.mothershipClass = MOTHERSHIP_CLASSES[1];
        break;
      case 'scientist':
        this.mothershipClass = MOTHERSHIP_CLASSES[2];
        break;
      case 'marine':
        this.mothershipClass = MOTHERSHIP_CLASSES[3];
        break;
      default:
        this.mothershipClass = MOTHERSHIP_CLASSES[randomNumberGenerator(MOTHERSHIP_CLASSES.length)];
        break;
      }
    // set name based on if Android
    switch (this.mothershipClass.name) {
      case "Android":
        this.firstName =
          ANDROID_NAMES[randomNumberGenerator(ANDROID_NAMES.length)];
        this.lastName =
          ANDROID_VERSION[randomNumberGenerator(ANDROID_VERSION.length)];
        break;
      default:
        this.firstName = FIRST_NAMES[randomNumberGenerator(FIRST_NAMES.length)];
        this.lastName = LAST_NAMES[randomNumberGenerator(FIRST_NAMES.length)];
        break;
    }
    // generate stats
    this.intelligence = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.strength = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.speed = batchRandomNumberGenerator(6, 10).reduce(reducer);
    this.combat = batchRandomNumberGenerator(6, 10).reduce(reducer);
    // set Class specific values
    this.intelligence =
      this.intelligence + this.mothershipClass.starting.intelligence;
    this.strength = this.strength + this.mothershipClass.starting.strength;
    this.speed = this.speed + this.mothershipClass.starting.speed;
    this.combat = this.combat + this.mothershipClass.starting.combat;
    this.sanity = this.mothershipClass.starting.sanity;
    this.fear = this.mothershipClass.starting.fear;
    this.body = this.mothershipClass.starting.body;
    this.armor = this.mothershipClass.starting.armor;
    this.skills = randomStartingSkills(this.mothershipClass);
    this.experienceGain = this.mothershipClass.experienceGain;
    this.dealing = this.mothershipClass.dealing;
    //
    this.gear = LOADOUTS_LIST[randomNumberGenerator(LOADOUTS_LIST.length)];
    this.nightmare = NIGHTMARES[randomNumberGenerator(NIGHTMARES.length)];
    this.patch = PATCHES[randomNumberGenerator(PATCHES.length)];
    this.credits = this._generateItems({ generateItems });
    this.health = this.strength * 2;
    this.stress = 2;
    this.resolve = 0;
  }

  _generateItems({ generateItems, type }: { generateItems: boolean; type?: string; }) {
    if(generateItems){return batchRandomNumberGenerator(5, 10).reduce(reducer) * 10}
    else{return batchRandomNumberGenerator(5,10).reduce(reducer)};
  }
}
