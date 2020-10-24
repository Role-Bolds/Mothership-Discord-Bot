import { debug } from "./debug";
import { SKILLS_LIST, TRAINED_SKILLS } from "./lists/skills";
import { classType, skillType } from "./types";
import { randomNumberGenerator } from "./randomNumberGenerator";

export class Skills {
/**
 * Generates skillList type list from string list input.
 * @param inputList String list to check
 */
checkSkillList(inputList: string[]) {
  // tslint:disable-next-line: prefer-const
  let returnSkillList: skillType[] = [];
  /**
   * Loop through every inputList.
   */
  // tslint:disable-next-line: prefer-for-of
  for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
    const inputElement = inputList[inputIndex];
    /**
     * Loop through skill list and compare current value from string list
     */
    // tslint:disable-next-line: prefer-for-of
    for (
      let skillListIndex = 0;
      skillListIndex < SKILLS_LIST.length;
      skillListIndex++
    ) {
      const skillListElement = SKILLS_LIST[skillListIndex];
      if (inputElement === skillListElement.name) {
        returnSkillList.push(skillListElement);
        break;
      }
    }
  }
  return returnSkillList;
}
/**
 * Get string list of skills that can be selected from.
 * @param skillsList skillList type to sort through.
 */
additionalSelectableSkills(skillsList: skillType[]) {
  // tslint:disable-next-line: prefer-const
  let returns: string[] = [];
  // tslint:disable-next-line: prefer-for-of
  for (let index = 0; index < skillsList.length; index++) {
    skillsList[index].prerequisiteFor.forEach((element) => {
      returns.push(element);
    });
  }
  debug(`Generated skills unlock: ${returns}`);
  return returns;
}

}


 /* TODO Make function for generating a new skill,
 accept string[] or skillType[] input
 optional spending limit
 optional choice limit
 ?tag for following chain? */
export function selectNewSkill() {
  return null;
}
/**
 * Uses input to generate a starting set of skills.
 * @param input
 */
export function randomStartingSkills(input: classType) {
  const skills = new Skills();
  debug(`Using:
${JSON.stringify(input, null, 2)}`);
  let initialList: string[] = [];
  switch (input.starting.skills.guaranteed) {
    case undefined:
      initialList = initialList;
      break;
    default:
      initialList = initialList.concat(input.starting.skills.guaranteed);
      break;
  }

  switch (input.starting.skills.pick.choose) {
    case undefined:
      initialList = initialList;
      break;
    default:
      for (let index = 0; index < input.starting.skills.pick.choose;) {
        const element =
          input.starting.skills.pick.list[
            randomNumberGenerator(input.starting.skills.pick.list.length)
          ];
        if (initialList.indexOf(element) !== -1) {
          debug(`Choose an already selected item: ${element}`);
        } else {
          initialList = initialList.concat(element);
          index++;
        }
      }
      break;
  }

  let initialSkills: skillType[] = skills.checkSkillList(initialList);
   debug(`Skills:
${JSON.stringify(initialSkills, null, 2)}`);
  let skillPoints = input.starting.skillPoints;
  while (skillPoints > 0) {
    // debug(`Skill Points: ${skillPoints}`);
    const additionalSkills: skillType[] = skills.checkSkillList(
      skills.additionalSelectableSkills(initialSkills)
    );
    const selectableSkills: skillType[] = TRAINED_SKILLS.concat(
      additionalSkills
    );
    const selectedSkill: skillType =
      selectableSkills[randomNumberGenerator(selectableSkills.length)];
    // debug("Selected-------------------------------------");
    // debug(selectedSkill, "json");
    if (
      initialSkills.indexOf(selectedSkill) !== -1 ||
      selectedSkill.type.cost > skillPoints
    ) {
      debug(
        `Chosen skill already selected or too expensive skillPoints[${skillPoints}]: ${selectedSkill.name} ${selectedSkill.type.name}:${selectedSkill.type.cost}`
      );
    } else {
      // debug(`Chose: ${selectedSkill.name}`);
      initialSkills = initialSkills.concat(selectedSkill);
      skillPoints = skillPoints - selectedSkill.type.cost;
    }
    // debug(`Skill points left to sped: ${skillPoints}`)
  }
  debug(initialSkills, 'json');
  return initialSkills;
}
