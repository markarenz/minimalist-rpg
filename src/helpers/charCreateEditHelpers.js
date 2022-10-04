import { APPEARANCE_DEFS, CHAR_STATS } from '../data/constants';

const getIsNewCharFormValid = (charData) => {
  const isNameValid = charData?.name?.length > 1;
  const isClassValid = charData?.playerClass?.length > 1;
  return isNameValid && isClassValid;
};

const getNameInput = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

const getRandomOption = (options) => {
  const rndIndex = Math.floor(Math.random() * options.length);
  return options[rndIndex];
};

const getRandomExtras = () => {
  const extra1 = getRandomOption(APPEARANCE_DEFS.extras);
  const extra2 = getRandomOption(APPEARANCE_DEFS.extras.filter((o) => o !== extra1));
  return [extra1, extra2];
};

const getRandomAppearance = (isFullRandom) => ({
  skin: {
    color: getRandomOption(APPEARANCE_DEFS.skin.defaultColors),
  },
  eyes: {
    color: getRandomOption(APPEARANCE_DEFS.eyes.defaultColors),
  },
  outlines: {
    color: APPEARANCE_DEFS.outlines.defaultColors[0],
  },
  hair: {
    style: getRandomOption(APPEARANCE_DEFS.hair.styles),
    color: getRandomOption(APPEARANCE_DEFS.hair.defaultColors),
    color2: getRandomOption(APPEARANCE_DEFS.hair.defaultColors2),
  },
  facePaint: {
    style: isFullRandom ? getRandomOption(APPEARANCE_DEFS.facePaint.styles) : 0,
    color: getRandomOption(APPEARANCE_DEFS.facePaint.defaultColors),
    color2: getRandomOption(APPEARANCE_DEFS.facePaint.defaultColors2),
  },
  facialHair: {
    style: isFullRandom ? getRandomOption(APPEARANCE_DEFS.facialHair.styles) : 0,
    color: getRandomOption(APPEARANCE_DEFS.facialHair.defaultColors),
  },
  extras: isFullRandom ? getRandomExtras() : [],
});

const walkArrayVal = (options, currentVal, dir) => {
  const idx = options.indexOf(currentVal) || 0;
  let newIdx = idx + dir;
  if (newIdx > options.length - 1) {
    newIdx = 0;
  } else if (newIdx < 0) {
    newIdx = options.length - 1;
  }
  return options[newIdx];
};

const toggleExtra = (val, arr) => {
  if (arr.includes(val)) {
    return arr.filter((i) => i !== val);
  }
  arr.push(val);
  return arr;
};

const cleanColorInput = (e) => {
  const { value, max } = e.target;
  const v = parseInt(value, 10);
  const m = parseInt(max, 10);
  if (!Number.isNaN(v)) {
    if (v < 0) {
      return 0;
    }
    if (v > m) {
      return m;
    }
    return v;
  }
  return 0;
};

const hslToHex = (hslObj) => {
  const { h, s, l } = hslObj;
  const al = l / 100;
  const a = (s * Math.min(al, 1 - al)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = al - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const hex2Hsl = (hex) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  } else if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h,
    s,
    l,
  };
};

const getHslStr = (color) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`;

const strToHslObj = (str) => {
  const bits = str
    .replace('hsl', '')
    .replace(/[^a-z0-9,]/gi, '')
    .split(',');
  return {
    h: parseInt(bits[0], 10),
    s: parseInt(bits[1], 10),
    l: parseInt(bits[2], 10),
  };
};

const getInitStats = () => {
  const numBonuses = 4;
  const s = {
    smarts: 2,
    glam: 2,
    oomf: 2,
    sneak: 2,
  };
  for (let i = 0; i < numBonuses; i += 1) {
    const rndIdx = Math.floor(Math.random() * 4);
    s[CHAR_STATS[rndIdx]] += 1;
  }
  return s;
};

export {
  getIsNewCharFormValid,
  getNameInput,
  getRandomAppearance,
  walkArrayVal,
  toggleExtra,
  cleanColorInput,
  hslToHex,
  hex2Hsl,
  getHslStr,
  strToHslObj,
  getInitStats,
};
