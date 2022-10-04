import { APP_STATUSES, GAME_SLUG } from '../data/constants';

const getInitCharObj = (charId) => {
  try {
    const saveKey = `${GAME_SLUG}__char__${charId}`;
    const charStr = localStorage.getItem(saveKey);
    if (!charStr || charStr === '') {
      return false;
    }
    const charObj = JSON.parse(charStr);
    if (charObj.name.length > 1 && charObj.id === charId) {
      return charObj;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const handleClickStartNew = (setAppStatus) => {
  window.scrollTo(0, 0);
  setAppStatus(APP_STATUSES.CREATE_CHARACTER);
};

const getRndStr = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getInitHealth = (charObj) => {
  switch (charObj.playerClass) {
    case 'oomf':
      return 10;
    default:
      return 7;
  }
};
const getInitMoney = (charObj) => {
  switch (charObj.playerClass) {
    case 'influencer':
      return 30;
    default:
      return 25;
  }
};

const initGameWithChar = (charObj) => {
  const initHealth = getInitHealth(charObj);
  const initMoney = getInitMoney(charObj);
  return {
    ...charObj,
    id: getRndStr(20),
    location: 'main',
    level: 1,
    exp: 0,
    health: initHealth,
    maxHealth: initHealth,
    money: initMoney,
    armorClass: 0,
    turns: 0,
    inventory: {},
    dialogInventory: [],
    effects: {},
    flags: {},
    log: [],
    saveDate: new Date(),
  };
};

export { handleClickStartNew, getInitCharObj, initGameWithChar };
