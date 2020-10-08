import { debug } from "../debug";
import { SkillList } from "../types";
const TRAINED_SKILLS:SkillList = [
    {
        name: 'Linguistics',
        description: '',
        prerequisite: ['Sophontology']
    },
    {
        name: 'Biology',
        description: '',
        prerequisite: ['Psychology','Genetics']
    },
    {
        name: 'First Aid',
        description: '',
        prerequisite: ['Pathology']
    },
    {
        name: 'Hydroponics',
        description: '',
        prerequisite: ['Botany']
    },
    {
        name: 'Geology',
        description: '',
        prerequisite: ['Planetology','Asteroid Mining']
    },
    {
        name: 'Zero-G',
        description: '',
        prerequisite: ['Asteroid Mining']
    },
    {
        name: 'Scavenging',
        description: '',
        prerequisite: ['Jury Rigging','Asteroid Mining']
    },
    {
        name: 'Heavy Machinery',
        description: '',
        prerequisite: ['Engineering','Asteroid Mining']
    },
    {
        name: 'Computers',
        description: '',
        prerequisite: ['Hacking','Engineering']
    },
    {
        name: 'Mechanical Repair',
        description: '',
        prerequisite: ['Vehicle Specialization','Engineering','Jury Rigging']
    },
    {
        name: 'Driving',
        description: '',
        prerequisite: ['Vehicle Specialization']
    },
    {
        name: 'Piloting',
        description: '',
        prerequisite: ['Astrogation','Vehicle Specialization']
    },
    {
        name: 'Mathematics',
        description: '',
        prerequisite: ['Physics']
    },
    {
        name: 'Art',
        description: '',
        prerequisite: ['Mysticism']
    },
    {
        name: 'Archaeology',
        description: '',
        prerequisite: ['Mysticism']
    },
    {
        name: 'Theology',
        description: '',
        prerequisite: ['Mysticism']
    },
    {
        name: 'Military Training',
        description: '',
        prerequisite: ['Gunnery','Tactics','Firearms','Close-Quarters Combat','Explosives']
    },
    {
        name: 'Rimwise',
        description: '',
        prerequisite: ['Firearms','Close-Quarters Combat']
    },
    {
        name: 'Athletics',
        description: '',
        prerequisite: ['Close-Quarters Combat']
    },
    {
        name: 'Chemistry',
        description: '',
        prerequisite: ['Explosives']
    }
];

const EXPERT_SKILLS:SkillList = [
    {
        name: 'Psychology',
        description: '',
        prerequisite: ['Sophontology']
    },
    {
        name: 'Genetics',
        description: '',
        prerequisite: ['Xenobiology']
    },
    {
        name: 'Pathology',
        description: '',
        prerequisite: ['Xenobiology','Surgery']
    },
    {
        name: 'Botany',
        description: '',
        prerequisite: ['Xenobiology']
    },
    {
        name: 'Planetology',
        description: '',
        prerequisite: ['']
    },
    {
        name: 'Asteroid Mining',
        description: '',
        prerequisite: ['']
    },
    {
        name: 'Jury Rigging',
        description: '',
        prerequisite: ['Cybernetics']
    },
    {
        name: 'Engineering',
        description: '',
        prerequisite: ['Robotics','Cybernetics','Artificial Intelligence']
    },
    {
        name: 'Hacking',
        description: '',
        prerequisite: ['Artificial intelligence']
    },
    {
        name: 'Vehicle Specialization',
        description:'',
        prerequisite:['Command']
    },
    {
        name: 'Astrogation',
        description: '',
        prerequisite: ['Hyperspace']
    },
    {
        name: 'Physics',
        description: '',
        prerequisite: ['Hyperspace']
    },
    {
        name: 'Mysticism',
        description: '',
        prerequisite: ['Xenoesotericism','Hyperspace']
    },
    {
        name: 'Gunnery',
        description: '',
        prerequisite:['Weapon Specialization']
    },
    {
        name: 'Firearms',
        description: '',
        prerequisite:['Weapon Specialization']
    },
    {
        name: 'Close-Quarters Combat',
        description: '',
        prerequisite:['Weapon Specialization']
    },
    {
        name: 'Explosives',
        description: '',
        prerequisite:['Weapon Specialization']
    }
];

const MASTER_SKILLS:SkillList = [
    {
        name: 'Sophontology',
        description: ''
    },
    {
        name: 'Xenobiology',
        description: ''
    },
    {
        name: 'Surgery',
        description: ''
    },
    {
        name: 'Cybernetics',
        description: ''
    },
    {
        name: 'Robotics',
        description: ''
    },
    {
        name: 'Artificial Intelligence',
        description: ''
    },
    {
        name: 'Command',
        description: ''
    },
    {
        name: 'Xenoesotericism',
        description: ''
    },
    {
        name: 'Weapon Specialization',
        description: ''
    }
]

export class Skills{
    trained: SkillList;
    expert: SkillList;
    master: SkillList;

    constructor(initialSkills: string[]){
        return null;
    }

    generate(){
        return null;
    }
};

export function checkSkillList(inputList: string[]){
    // tslint:disable-next-line: prefer-const
    let returnSkillList = [];
    // tslint:disable-next-line: prefer-for-of
    for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
        const inputElement = inputList[inputIndex];
        // tslint:disable-next-line: prefer-for-of
        for (let skillListIndex = 0; skillListIndex < TRAINED_SKILLS.length; skillListIndex++) {
            const skillListElement = TRAINED_SKILLS[skillListIndex];
            if(inputElement === skillListElement.name){returnSkillList.push(skillListElement); break;}
        }
    }
    return returnSkillList;
}

export function additionalSelectableSkills(skillsList:SkillList) {
    // tslint:disable-next-line: prefer-const
    let returns = [];
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < skillsList.length; index++) {
      skillsList[index].prerequisite.forEach((element) => {
        returns.push(element);
      });
    }
    debug(`Generated skills unlock: ${returns}`)
    return returns;
  }