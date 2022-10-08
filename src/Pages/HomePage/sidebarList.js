const sidebarList = [
  {
    id: 1,
    name: 'platform',
    title: 'Sort By',
    content: [
      {
        name: 'Platform',
        types: ['PC', 'Browser'],
      },
    ],
  },
  {
    id: 2,
    name: 'genres',
    title: 'Filter Type',
    scroll: true,
    content: [
      {
        name: 'Genre',
        types: [
          'MMO',
          'MMORPG',
          'Shooter',
          'Strategy',
          'Moba',
          'Battle Royale',
          'Card',
          'Racing',
          'Sports',
          'Social',
          'Fighting',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'catetory',
    content: [
      {
        name: 'Graphics',
        types: ['3D Graphics', '2D Graphics'],
      },
      {
        name: 'Combat',
        types: ['PVE', 'PVP'],
      },
      {
        name: 'Gameplay',
        types: ['Turn-Based', 'Real-Time'],
      },
      {
        name: 'Setting',
        types: ['Anime', 'Fantasy', 'Sci-Fi', 'Military', 'Horror'],
      },
    ],
  },
  {
    id: 4,
    name: 'tags',
    scroll: true,
    content: [
      {
        name: 'Tags',
        types: [
          'MMOFPS',
          'Sandbox',
          'Open World',
          'Survival',
          'Action RPG',
          'MMORTS',
          'Pixel',
          'Voxel',
          'MMOTPS',
          'Zombie',
          'First-Person',
          'Top-Down',
          'Tank',
          'Space',
          'Sailing',
          'Side Scroller',
          'Superhero',
          'Permadeath',
          'Action',
          'Martial Arts',
          'Flight',
          'Low-Spec',
        ],
      },
    ],
  },
];
const TYPES = ['platform', 'genres', 'catetory', 'tags'];

export { sidebarList, TYPES };
