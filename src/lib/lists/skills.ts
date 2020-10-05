const Trained: {name: string, description: string, prerequisite: string[]}[] = [
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

const Expert: {name: string, description: string, prerequisite: string[]}[] = [
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
        name: 'Close-Quaters Combat',
        description: '',
        prerequisite:['Weapon Specialization']
    },
    {
        name: 'Explosives',
        description: '',
        prerequisite:['Weapon Specialization']
    }
];

const Master: {name: string, description: string}[] = [
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