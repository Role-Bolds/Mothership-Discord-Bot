
export type skillType = {
    name: string;
    description: string;
    type: {
      name: string,
      cost: number,
      bonus: number
    }
    prerequisiteFor?: string[];
};


export type classType = {
    name: string;
    starting: {
      sanity: number,
      fear: number;
      body: number;
      armor: number;
      intelligence: number;
      strength: number;
      speed: number;
      combat: number;
      skills: {
        guaranteed: string[];
        pick: {
          list: string[];
          choose: number;
        };
      };
      skillPoints: number;
    };
    experienceGain: string;
    dealing: string;
  };