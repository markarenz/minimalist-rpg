const APP_STATUSES = {
  SPLASH: 'splash',
  LOAD_GAME: 'load_game',
  CREATE_CHARACTER: 'create_character',
  GAME: 'game',
};
const GAME_PANELS = {
  ACTION: 'action',
  INVENTORY: 'inventory',
  LOG: 'log',
  PLAYER: 'player',
};

const GAME_SLUG = 'minrpg';

const CHAR_CLASSES = ['wonk', 'influencer', 'swole', 'carny'];
const CHAR_CLASS_STAT_BOOSTS = {
  wonk: 'smarts',
  influencer: 'glam',
  swole: 'oomf',
  carny: 'sneak',
};
const CHAR_STATS = ['smarts', 'glam', 'oomf', 'sneak'];

const DEFAULT_COLORS_HAIR = {
  primary: [
    'hsl(13, 46%, 12%)',
    'hsl(40, 36%, 44%)',
    'hsl(23, 50%, 26%)',
    'hsl(7, 74%, 37%)',
    'hsl(224, 52%, 34%)',
    'hsl(301, 51%, 41%)',
  ],
  secondary: [
    'hsl(13, 47%, 17%)',
    'hsl(40, 43%, 38%)',
    'hsl(40, 43%, 38%)',
    'hsl(7, 79%, 32%)',
    'hsl(224, 56%, 26%)',
    'hsl(301, 57%, 33%)',
  ],
};

const APPEARANCE_DEFS = {
  skin: {
    defaultColors: [
      'hsl(24, 21%, 56%)',
      'hsl(20, 18%, 46%)',
      'hsl(24, 57%, 82%)',
      'hsl(36, 28%, 23%)',
      'hsl(201, 19%, 52%)',
      'hsl(314, 22%, 50%)',
    ],
  },
  eyes: {
    defaultColors: [
      'hsl(15, 57%, 27%)',
      'hsl(147, 30%, 39%)',
      'hsl(205, 31%, 49%)',
      'hsl(20, 32%, 43%)',
      'hsl(0, 87%, 37%)',
    ],
  },
  outlines: {
    defaultColors: [
      'hsl(0, 0%, 0%)',
      'hsl(0, 0%, 20%)',
      'hsl(0, 0%, 50%)',
      'hsl(0, 0%, 70%)',
      'hsl(0, 0%, 100%)',
    ],
  },
  facePaint: {
    styles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    defaultColors: [
      'hsl(342, 67%, 34%)',
      'hsl(98, 33%, 49%)',
      'hsl(242, 38%, 49%)',
      'hsl(48, 24%, 55%)',
      'hsl(45, 3%, 69%)',
    ],
    defaultColors2: [
      'hsl(332, 72%, 53%)',
      'hsl(313, 55%, 60%)',
      'hsl(274, 77%, 58%)',
      'hsl(47, 62%, 48%)',
      'hsl(60, 1%, 36%)',
    ],
  },
  hair: {
    styles: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10],
    defaultColors: DEFAULT_COLORS_HAIR.primary,
    defaultColors2: DEFAULT_COLORS_HAIR.secondary,
  },
  facialHair: {
    styles: [0, 1, 2, 3, 4, 5, 6, 7],
    defaultColors: DEFAULT_COLORS_HAIR.primary,
  },
  extras: ['1L', '1R', '2L', '2R', '3L', '3R', '4', '5', '6'],
};

const ITEM_CATEGORIES = ['weapons', 'armor', 'misc'];

const LEVEL_BREAKPOINTS = [
  0, 150, 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600, 307200, 614400, 1228800,
  2457600,
];

const DATE_CONFIG = {
  startYear: 1216,
  times: ['Morn', 'Nun', 'Even', 'Nit', 'Drk'],
  days: [
    'Zerody',
    'Oncedy',
    'Ducedy',
    'Tripidy',
    'Furedy',
    'Fibedy',
    'Sikidy',
    'Sebody',
    'Aitedy',
    'Ninedy',
  ],
  months: ['Abon', 'Begus', 'Cotus', 'Difyr', 'Fouin', 'Giur', 'Hurn', 'Iosk', 'Jiun', 'Kevin'],
  turnsInYear: 2500,
  turnsInMonth: 250,
  turnsInDay: 5,
};

export {
  APP_STATUSES,
  GAME_PANELS,
  GAME_SLUG,
  CHAR_CLASSES,
  CHAR_STATS,
  APPEARANCE_DEFS,
  ITEM_CATEGORIES,
  LEVEL_BREAKPOINTS,
  CHAR_CLASS_STAT_BOOSTS,
  DATE_CONFIG,
};
