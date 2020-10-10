import {
  MOTHERSHIP_CLASSES,
  TEAMSTER_SKILLS,
  SCIENTIST_SKILLS,
  ANDROID_SKILLS,
  MARINE_SKILLS,
} from "./lists/classes";
import {
  FIRST_NAMES,
  LAST_NAMES,
  ANDROID_NAMES,
  ANDROID_VERSION,
} from "./lists/names";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator,
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
  combat: number | string;
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

  constructor() {
    this.mothershipClass =
      MOTHERSHIP_CLASSES[randomNumberGenerator(MOTHERSHIP_CLASSES.length)];
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
    this.intelligence = batchRandomNumberGenerator(6, 10);
    this.strength = batchRandomNumberGenerator(6, 10);
    this.speed = batchRandomNumberGenerator(6, 10);
    this.combat = batchRandomNumberGenerator(6, 10);
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
    this.experienceGain = this.mothershipClass.experienceGain
    this.dealing = this.mothershipClass.dealing
    //
    this.gear = LOADOUTS_LIST[randomNumberGenerator(LOADOUTS_LIST.length)];
    this.nightmare = NIGHTMARES[randomNumberGenerator(NIGHTMARES.length)];
    this.patch = PATCHES[randomNumberGenerator(PATCHES.length)];
    this.credits = batchRandomNumberGenerator(5, 10) * 10;
    this.health = this.strength * 2;
    this.stress = 2;
    this.resolve = 0;
  }
}
/* switch (this.mothershipClass.name) {
      case "Teamster":
        this.speed = this.speed + 5;
        this.strength = this.strength + 5;
        this.sanity = 30;
        this.fear = 35;
        this.body = 30;
        this.armor = 35;
        this.skillProfile =
          TEAMSTER_SKILLS[randomNumberGenerator(TEAMSTER_SKILLS.length)];
        this.experienceGain = `Gain 1XP whenever you first set foot on an undiscovered planet.`;
        this.dealing = `Once per session, a Teamster may re-roll a roll on the Panic Effect Table.`;
        break;
      case "Android":
        this.speed = this.speed + 5;
        this.intelligence = this.intelligence + 5;
        this.sanity = 20;
        this.fear = 85;
        this.body = 40;
        this.armor = 25;
        this.skillProfile =
          ANDROID_SKILLS[randomNumberGenerator(ANDROID_SKILLS.length)];
        this.experienceGain = `Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence.`;
        this.dealing = `Fear Saves made in the presence of Androids have Disadvantage.`;
        break;
      case "Scientist":
        this.intelligence = this.intelligence + 10;
        this.sanity = 40;
        this.fear = 25;
        this.body = 25;
        this.armor = 30;
        this.skillProfile =
          SCIENTIST_SKILLS[randomNumberGenerator(SCIENTIST_SKILLS.length)];
        this.experienceGain = `Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study.`;
        this.dealing = `Whenever a Scientist fails a Sanity Save, every friendly player nearby gains 1 Stress.`;
        break;
      case "Marine":
        this.combat =
          this.combat + 5 + " (+5 when a friendly Marine is nearby)";
        this.sanity = 25;
        this.fear = 30;
        this.body = 35;
        this.armor = 40;
        this.skillProfile =
          MARINE_SKILLS[randomNumberGenerator(MARINE_SKILLS.length)];
        this.experienceGain = `Gain 1 XP for killing an enemy.`;
        this.dealing = `Whenever a Marine Panics, every friendly player nearby must make a Fear Save`;
        break;
      default:
        break;
    } */