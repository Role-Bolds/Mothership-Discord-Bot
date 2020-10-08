/**
 * List of various skills.
 */
export type SkillList = {
    /**
     * Skill Name
     * @type {string} - String name of skill.
     */
    name: string;
    /**
     * Skill Description
     * @type {string} - String with skill details.
     */
    description: string;
    /**
     * Prerequisite to list.
     * @type {string[]} - String list of unlocked skills.
     */
    prerequisite?: string[];

}[];
