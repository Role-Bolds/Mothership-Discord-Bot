import { skillType } from '../types';

export const TRAINED_SKILLS:skillType[] = [
    {
        name: 'Linguistics',
        description: 'Study of language.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Sophontology']
    },
    {
        name: 'Biology',
        description: 'Study of life.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Psychology','Genetics']
    },
    {
        name: 'First Aid',
        description: 'Emergency medical care and treatment.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Pathology']
    },
    {
        name: 'Hydroponics',
        description: 'Growing plants in nutrient solutions without soil (farming in space).',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Botany']
    },
    {
        name: 'Geology',
        description: 'The solid features of any terrestrial planet or natural satellite.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Planetology','Asteroid Mining']
    },
    {
        name: 'Zero-G',
        description: 'Working in a vaccuum, vaccsuits, etc.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Asteroid Mining']
    },
    {
        name: 'Scavenging',
        description: 'Searching discarded waste for useful items.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Jury Rigging','Asteroid Mining']
    },
    {
        name: 'Heavy Machinery',
        description: 'Operation and use of large pieces of equipment (cranes, exosuits, forklifts, etc.).',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Engineering','Asteroid Mining']
    },
    {
        name: 'Computers',
        description: 'Fluent use of computers and networks.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Hacking','Engineering']
    },
    {
        name: 'Mechanical Repair',
        description: 'Fixing broken machines.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Vehicle Specialization','Engineering','Jury Rigging']
    },
    {
        name: 'Driving',
        description: 'Operation and control of motor vehicles',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Vehicle Specialization']
    },
    {
        name: 'Piloting',
        description: 'Operation and control of air and spacecraft.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Astrogation','Vehicle Specialization']
    },
    {
        name: 'Mathematics',
        description: 'The science of number, quantity, and space.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Physics']
    },
    {
        name: 'Art',
        description: 'The expression or application of a species\' creative ability',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Mysticism']
    },
    {
        name: 'Archaeology',
        description: 'Ancient cultures and their artifacts.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Mysticism']
    },
    {
        name: 'Theology',
        description: 'Study of religion.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Mysticism']
    },
    {
        name: 'Military Training',
        description: 'Standard basic training given to all military personnel.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Gunnery','Tactics','Firearms','Close-Quarters Combat','Explosives']
    },
    {
        name: 'Rimwise',
        description: 'Outer rim colonies and seedy parts of the galaxy.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Firearms','Close-Quarters Combat']
    },
    {
        name: 'Athletics',
        description: 'Physical sports and games.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Close-Quarters Combat']
    },
    {
        name: 'Chemistry',
        description: 'The identification of the substances of which matter is composed.',
        type: {
            name:'Trained',
            cost:1,
            bonus:10
        },
        prerequisiteFor: ['Explosives']
    }
];

export const EXPERT_SKILLS:skillType[] = [
    {
        name: 'Psychology',
        description: 'The study of behavior and the human mind.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Sophontology']
    },
    {
        name: 'Genetics',
        description: 'Heredity and the variation of inherited characteristics.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Xenobiology']
    },
    {
        name: 'Pathology',
        description: 'Stud of the cause and effect of disease.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Xenobiology','Surgery']
    },
    {
        name: 'Botany',
        description: 'The study of plant life.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Xenobiology']
    },
    {
        name: 'Planetology',
        description: 'Study of planets and other celestial bodies.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['']
    },
    {
        name: 'Asteroid Mining',
        description: 'Training in the tools and procedures used in mining asteroids.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['']
    },
    {
        name: 'Jury Rigging',
        description: 'Makeshift repairs.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Cybernetics']
    },
    {
        name: 'Engineering',
        description: 'Design, building, and use of engines, machines, and structures.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Robotics','Cybernetics','Artificial Intelligence']
    },
    {
        name: 'Hacking',
        description: 'Unauthorized access to computer systems.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Artificial intelligence']
    },
    {
        name: 'Vehicle Specialization',
        description:'Specific vehicle class.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor:['Command']
    },
    {
        name: 'Astrogation',
        description: 'Navigation in outer space',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Hyperspace']
    },
    {
        name: 'Physics',
        description: 'Study of nature and properties of matter and energy.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Hyperspace']
    },
    {
        name: 'Mysticism',
        description: 'Spiritual apprehension of hidden knowledge.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor: ['Xenoesotericism','Hyperspace']
    },
    {
        name: 'Gunnery',
        description: 'Starship weaponry.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor:['Weapon Specialization']
    },
    {
        name: 'Firearms',
        description: 'Guns and their use',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor:['Weapon Specialization']
    },
    {
        name: 'Close-Quarters Combat',
        description: 'Hand-to-hand, melee fighting.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor:['Weapon Specialization']
    },
    {
        name: 'Explosives',
        description: 'Bombs and incendiary devices.',
        type: {
            name:'Expert',
            cost:2,
            bonus:15
        },
        prerequisiteFor:['Weapon Specialization']
    }
];

export const MASTER_SKILLS:skillType[] = [
    {
        name: 'Sophontology',
        description: 'Alien psychology.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Xenobiology',
        description: 'Alien biology.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Surgery',
        description: 'Medical specialty involving manual operation',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Cybernetics',
        description: 'Interface between man and machine.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Robotics',
        description: 'DEsign and operation of robots, drones, and androids.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Artificial Intelligence',
        description: 'Knowledge of simulacrum of human consciousness.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Command',
        description: 'Leadership and authority.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Xenoesotericism',
        description: 'Obscure alien mysticism, religion, and belief.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    },
    {
        name: 'Weapon Specialization',
        description: 'Proficiency with a specific weapon.',
        type: {
            name: 'Master',
            cost:3,
            bonus:20
        }
    }
];

export const SKILLS_LIST = TRAINED_SKILLS.concat(
    EXPERT_SKILLS,MASTER_SKILLS
    );