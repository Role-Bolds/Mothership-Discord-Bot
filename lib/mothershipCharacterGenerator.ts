import {
  MothershipClasses,
  TeamsterSkills,
  ScientistSkills,
  AndroidSkills,
  MarineSkills,
} from "./lists/classes";
import {
  FirstNames,
  LastNames,
  AndroidNames,
  AndroidVersion,
} from "./lists/names";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator,
} from "./randomNumberGenerator";
import { Loadouts } from "./lists/loadouts";
import { Nightmares } from "./lists/nightmares";
import { Patches } from "./lists/patches";

export class MothershipChar {
  MothershipClass: string;
  FirstName: string;
  LastName: string;
  Intelligence: number;
  Strength: number;
  Speed: number;
  Combat: number | string;
  Sanity: number;
  Fear: number;
  Body: number;
  Armor: number;
  Gear: string;
  Health: number;
  Stress: number;
  Resolve: number;
  SkillProfile: { name: string; value: string };
  Dealing: string;
  ExperienceGain: string;
  Nightmare: string;
  Patch: string;
  Credits: number;

  constructor() {
    this.MothershipClass =
      MothershipClasses[randomNumberGenerator(MothershipClasses.length)];
    // set name based on if Android
    switch (this.MothershipClass) {
      case "Android":
        this.FirstName =
          AndroidNames[randomNumberGenerator(AndroidNames.length)];
        this.LastName =
          AndroidVersion[randomNumberGenerator(AndroidVersion.length)];
        break;
      default:
        this.FirstName = FirstNames[randomNumberGenerator(FirstNames.length)];
        this.LastName = LastNames[randomNumberGenerator(FirstNames.length)];
        break;
    }
    // generate stats
    this.Intelligence = batchRandomNumberGenerator(6, 10);
    this.Strength = batchRandomNumberGenerator(6, 10);
    this.Speed = batchRandomNumberGenerator(6, 10);
    this.Combat = batchRandomNumberGenerator(6, 10);
    // set Class specific values
    switch (this.MothershipClass) {
      case "Teamster":
        this.Speed = this.Speed + 5;
        this.Strength = this.Strength + 5;
        this.Sanity = 30;
        this.Fear = 35;
        this.Body = 30;
        this.Armor = 35;
        this.SkillProfile =
          TeamsterSkills[randomNumberGenerator(TeamsterSkills.length)];
        this.ExperienceGain = `Gain 1XP whenever you first set foot on an undiscovered planet.`;
        this.Dealing = `Once per session, a Teamster may re-roll a roll on the Panic Effect Table.`;
        break;
      case "Android":
        this.Speed = this.Speed + 5;
        this.Intelligence = this.Intelligence + 5;
        this.Sanity = 20;
        this.Fear = 85;
        this.Body = 40;
        this.Armor = 25;
        this.SkillProfile =
          AndroidSkills[randomNumberGenerator(AndroidSkills.length)];
        this.ExperienceGain = `Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence.`;
        this.Dealing = `Fear Saves made in the presence of Androids have Disadvantage.`;
        break;
      case "Scientist":
        this.Intelligence = this.Intelligence + 10;
        this.Sanity = 40;
        this.Fear = 25;
        this.Body = 25;
        this.Armor = 30;
        this.SkillProfile =
          ScientistSkills[randomNumberGenerator(ScientistSkills.length)];
        this.ExperienceGain = `Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study.`;
        this.Dealing = `Whenever a Scientist fails a Sanity Save, every friendly player nearby gains 1 Stress.`;
        break;
      case "Marine":
        this.Combat =
          this.Combat + 5 + " (+5 when a friendly Marine is nearby)";
        this.Sanity = 25;
        this.Fear = 30;
        this.Body = 35;
        this.Armor = 40;
        this.SkillProfile =
          MarineSkills[randomNumberGenerator(MarineSkills.length)];
        this.ExperienceGain = `Gain 1 XP for killing an enemy.`;
        this.Dealing = `Whenever a Marine Panics, every friendly player nearby must make a Fear Save`;
        break;
      default:
        break;
    }
    this.Gear = Loadouts[randomNumberGenerator(Loadouts.length)];
    this.Nightmare = Nightmares[randomNumberGenerator(Nightmares.length)];
    this.Patch = Patches[randomNumberGenerator(Patches.length)];
    this.Credits = batchRandomNumberGenerator(5, 10) * 10;
    this.Health = this.Strength * 2;
    this.Stress = 2;
    this.Resolve = 0;
  }
}

// let test = new mothershipChar;
// console.log(JSON.stringify(test));
