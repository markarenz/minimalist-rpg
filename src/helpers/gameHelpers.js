import {
  GAME_SLUG,
  GAME_PANELS,
  LEVEL_BREAKPOINTS,
  CHAR_CLASS_STAT_BOOSTS,
  DATE_CONFIG,
} from '../data/constants';

const getMinMaxRnd = (obj) => obj.min + Math.floor(Math.random() * (obj.max - obj.min));
const rollDice = (sides) => 1 + Math.floor(Math.random() * sides);

const inventoryUseOne = (itemId, inventory) => {
  const newInventory = {
    ...inventory,
  };
  newInventory[itemId].count -= 1;
  if (newInventory[itemId].count < 1) {
    delete newInventory[itemId];
  }
  return newInventory;
};

const getPlayerLevel = (gameState) => {
  const {
    level: currentLevel,
    playerClass,
    exp,
    maxHealth: currentMaxHealth,
    health: currentHealth,
  } = gameState;
  let level = null;
  let health = currentHealth;
  let maxHealth = currentMaxHealth;
  const newStats = {
    ...gameState.stats,
  };
  const maxLevel = LEVEL_BREAKPOINTS.length;
  LEVEL_BREAKPOINTS.forEach((l, idx) => {
    if (exp < l && !level) {
      level = idx;
    }
  });
  if (!level) {
    level = maxLevel;
  }
  if (level > currentLevel) {
    if (level % 4 === 0) {
      newStats.smarts += 1;
      newStats.glam += 1;
      newStats.oomf += 1;
      newStats.sneak += 1;
    }
    maxHealth += 1;
    health = maxHealth;
    newStats[CHAR_CLASS_STAT_BOOSTS[playerClass]] += 1;
  }
  return { level, health, maxHealth, stats: { ...newStats } };
};

const getInventoryToggleEquip = (itemId, inventory) => {
  const newInventory = {
    ...inventory,
    [itemId]: {
      ...inventory[itemId],
      equipped: !inventory[itemId].equipped,
    },
  };
  return newInventory;
};
const plusOrMinus = () => (Math.random() >= 0.5 ? 1 : -1);

const rndScatter = (variance) => Math.floor(Math.random() * variance) * plusOrMinus();

const addToInventory = (itemId, inventory, gameData) => {
  const item = gameData.items[itemId];
  // EQUIPPABLE ITEMS CANNOT BE AGGREGATED OR DUPLICATED
  if (item.equippable && inventory[itemId] && inventory[itemId].equipped) {
    return inventory;
  }
  const newInventory = {
    ...inventory,
  };
  if (newInventory[itemId]) {
    newInventory[itemId].count += 1;
  } else {
    newInventory[itemId] = {
      count: 1,
    };
  }
  return newInventory;
};
const addTreasureToInventory = (treasureObj, inventory, gameData) => {
  const { treasure, mode } = treasureObj;
  let addedMoney = 0;
  let newInventory = {
    ...inventory,
  };
  const modulo = mode === 'exit' ? 1 : 4;
  treasure.forEach((k, idx) => {
    if (idx % modulo === 0) {
      if (gameData.items[k].isMoney) {
        addedMoney += gameData.items[k].value;
      } else {
        newInventory = addToInventory(k, newInventory, gameData);
      }
    }
  });
  return { newInventory, addedMoney };
};

const getSummary = (gameState) => ({
  id: gameState.id,
  name: gameState.name,
  level: gameState.level,
  playerClass: gameState.playerClass,
  turns: gameState.turns,
  saveDate: gameState.saveDate,
});

const updateCharacterList = (gameState) => {
  const charListKey = `${GAME_SLUG}__charList`;
  const charListStr = localStorage.getItem(charListKey);
  try {
    const charList = !charListStr
      ? []
      : JSON.parse(charListStr).map((c) => {
          if (c.id === gameState.id) {
            return {
              ...getSummary(gameState),
            };
          }
          return c;
        });
    const foundExisting = charList.find((i) => i.id === gameState.id);
    if (!foundExisting) {
      charList.push({
        ...getSummary(gameState),
      });
    }
    localStorage.setItem(charListKey, JSON.stringify(charList));
  } catch (err) {
    // eslint-disable-next-line
    console.log('error updating character list', err);
  }
};

const saveGame = (gameState) => {
  const saveKey = `${GAME_SLUG}__char__${gameState.id}`;
  localStorage.setItem(saveKey, JSON.stringify(gameState));
  updateCharacterList(gameState);
};

const incDecVal = (prevGameState, key, inc, value) => {
  const val = prevGameState[key] || 0;
  const incVal = value || 0;
  return val + inc * incVal;
};

const calcArmorClass = (gameState, gameData) => {
  let ac = 0;
  Object.keys(gameState.inventory).forEach((k) => {
    if (gameState.inventory[k].equipped && gameData.items[k].acValue) {
      ac += gameData.items[k].acValue;
    }
  });
  return ac;
};

const processCommandStat = (c, prevGameState) => {
  let newVal = 0;
  switch (c.operator) {
    case '+=':
      newVal = incDecVal(prevGameState, c.key, 1, c.value);
      break;
    case '-=':
      newVal = prevGameState[c.key] - c.val;
      break;
    case '=':
      newVal = c.val;
      break;
    default:
      break;
  }
  return newVal;
};

const processTurnCommands = (commands, prevGameState, gameData) => {
  const updates = {};
  const updatedFlags = {};
  commands.forEach((c) => {
    switch (c.type) {
      case 'flag':
        updatedFlags[c.key] = c.value;
        break;
      case 'stat':
        updates[c.key] = processCommandStat(c, prevGameState);
        break;
      case 'nextDialog':
        updates.currentDialog = c.id;
        break;
      case 'heal':
        updates.health = Math.min(prevGameState.health + c.value, prevGameState.maxHealth);
        break;
      case 'exitDialog':
        // const parentLocId = gameData.areas[prevGameState.location].parent;
        updates.currentDialog = null;
        updates.location = gameData.areas[prevGameState.location].parent;
        break;
      default:
        break;
    }
  });
  updates.flags = {
    ...updatedFlags,
  };
  return updates;
};

const processHealing = (prevGameState, gameData) => {
  const { healingPerTurn, cooldown } = gameData.areas[prevGameState.location];
  const cooldownFlag = `${prevGameState.location}__cooldown`;
  const newHealth = Math.min(prevGameState.health + healingPerTurn, prevGameState.maxHealth);
  const cooldownValue = prevGameState.turns + cooldown;
  return { newHealth, cooldownFlag, cooldownValue };
};

const processShopBuyItem = (prevGameState, turn, gameData) => {
  const { item } = turn;
  let { money, inventory } = prevGameState;
  if (prevGameState.money >= item.price) {
    money = prevGameState.money - item.price;
    inventory = addToInventory(item.id, prevGameState.inventory, gameData);
  }
  return { money, inventory };
};

const processShopSellItem = (prevGameState, turn, gameData) => {
  const { itemId } = turn;
  let { money } = prevGameState;
  const { inventory } = prevGameState;
  const { count } = prevGameState.inventory[itemId] || 1;
  money += Math.floor(gameData.items[itemId].value * count);
  delete inventory[itemId];
  return { money, inventory };
};

const processDialogTopic = (topicKey, prevGameState, gameData) => {
  const { location } = prevGameState;
  const dialogKey = `${location}__${topicKey}`;
  const commands = [];
  if (gameData.dialog[dialogKey]) {
    commands.push({ type: 'nextDialog', id: dialogKey });
  } else {
    commands.push({ type: 'nextDialog', id: `${location}__dont_know` });
  }
  return {
    ...processTurnCommands(commands, prevGameState, gameData),
  };
};

const calcEnemyArmorClass = (enemy, gameData) => {
  let ac = 0;
  enemy.armor.forEach((a) => {
    ac += gameData.items[a].acValue;
  });
  return ac;
};

// incorporate dungeonLevel
const getNumEnemies = (floor) => {
  const n = 1 + Math.floor((floor % 40) / 5);
  return n + rndScatter(Math.floor(n * 0.5));
};

const getEnemyLevel = (floor) => 1 + Math.floor(floor / 40);

// eslint-disable-next-line
const getEnemy = (level, dungeonLevel, enemiesData) => {
  const enemyOptionKeys = Object.keys(enemiesData).filter((k) => enemiesData[k].level === level);
  const rndIdx = Math.floor(Math.random() * enemyOptionKeys.length);
  const enemyObj = enemiesData[enemyOptionKeys[rndIdx]];
  const healthRaw = enemyObj.healthDef.min + Math.floor(level * enemyObj.healthDef.perLevelGrowth);
  const health = healthRaw + rndScatter(1 + Math.floor(healthRaw * 0.5));
  return {
    ...enemyObj,
    health,
  };
};

const getEnemiesForDungeonFloor = (floor, dungeonLevel, enemiesData) => {
  const enemiesArr = [];
  const numEnemies = getNumEnemies(floor);
  const enemyLevel = getEnemyLevel(floor);
  const newEnemy = getEnemy(enemyLevel, dungeonLevel, enemiesData);
  for (let i = 0; i < numEnemies; i += 1) {
    enemiesArr.push(newEnemy);
  }
  return enemiesArr;
};

const getInitiative = () => {
  // 50/50 chance
  // TODO: effects Nerfs & buffs
  // gameState, enemies
  const rnd = Math.random();
  return rnd > 0.5 ? 'player' : 'enemies';
};

const getNumTreasureItems = (result, dunegonState) => {
  const maxT = 1 + Math.floor(dunegonState.floor / 3);
  if (result === 'victory') {
    return maxT;
  }
  if (result === 'draw') {
    return Math.floor(maxT / 2);
  }
  return 0;
};

const getTreasure = (numItems, gameData, prevTreasure) => {
  // TODO: TAKE DUNGEON LEVEL OR MONSTER LEVEL INTO ACCOUNT...
  const treasure = [];
  const filteredItems = Object.keys(gameData.items).filter((k) => gameData.items[k].isTreasure);
  for (let i = 0; i < numItems; i += 1) {
    const rnd = Math.random();
    const rarityFilteredItems = filteredItems.filter((k) => rnd <= gameData.items[k]?.rarity);
    const rndIdx = Math.floor(Math.random() * rarityFilteredItems.length);
    const id = rarityFilteredItems[rndIdx];
    treasure.push(id);
  }
  return [...treasure, ...prevTreasure];
};

const processFight = (gameState, gameData, initiative, enemies) => {
  const enemiesArr = [...enemies];
  let playerHealth = gameState.health;
  const playerWeapons = Object.keys(gameState.inventory).filter(
    (k) => gameState.inventory[k].equipped && gameData.items[k].category === 'weapons'
  );
  const playerWeapon = gameData.items[playerWeapons[0]] || gameData.items.weapon__hands;
  const maxRounds = 10; // after 10 rounds we call it a draw
  const minPlayerHealth = 1;
  const fightLog = [];
  let result = null;
  let isHit = null;
  let roundResult = '';
  let dmg = 0;
  let fighting = true;
  let round = 0;
  let whoseTurn = initiative;

  while (fighting) {
    if (whoseTurn === 'player') {
      isHit = rollDice(20) >= calcEnemyArmorClass(enemiesArr[0], gameData);
      dmg = getMinMaxRnd(playerWeapon.dmg);
      if (isHit) {
        roundResult = 'hit';
        enemiesArr[0].health -= dmg;
        if (enemiesArr[0].health < 1) {
          roundResult = 'death';
          enemiesArr.shift();
        }
      } else {
        roundResult = 'miss';
      }
      fightLog.push({ round, whoseTurn, isHit, roundResult, weapon: playerWeapon.titleKey, dmg });
    } else {
      // eslint-disable-next-line
      enemiesArr.forEach((enemy) => {
        isHit = rollDice(20) >= gameState.armorClass;
        const enemyWeapon = gameData.items[enemy.weapon];
        if (isHit) {
          dmg = getMinMaxRnd(enemyWeapon.dmg);
          playerHealth -= dmg;
          roundResult = 'hit';
          if (playerHealth <= minPlayerHealth) {
            playerHealth = minPlayerHealth;
            fighting = false;
            roundResult = 'stun';
            result = 'defeat';
          }
        } else {
          roundResult = 'miss';
        }
        fightLog.push({ round, whoseTurn, isHit, roundResult, weapon: enemyWeapon.titleKey, dmg });
      });
    }
    if (enemiesArr.length === 0) {
      result = 'victory';
      fighting = false;
    }
    round += 1;
    if (round > maxRounds) {
      result = 'draw';
      fighting = false;
    }
    whoseTurn = whoseTurn === 'player' ? 'enemies' : 'player';
  }
  return { result, fightLog, playerHealth };
};
const getExpGained = (enemies, result) => {
  let expTotal = 0;
  enemies.forEach((e) => {
    expTotal += e.expValue;
  });
  if (result === 'victory') {
    return expTotal;
  }
  if (result === 'draw') {
    return Math.floor(expTotal / 2);
  }
  return 0;
};

const processDungeonAttack = (turnData, prevGameState, gameData) => {
  const { setDungeonState, dungeonState } = turnData;
  const { enemies } = dungeonState;
  const initiative = getInitiative();
  const fightResult = processFight(prevGameState, gameData, initiative, enemies);
  const newDungeonState = {
    ...dungeonState,
    ...fightResult,
    stage: 'result',
    treasure: getTreasure(
      getNumTreasureItems(fightResult.result, dungeonState),
      gameData,
      dungeonState.treasure
    ),
  };
  setDungeonState(newDungeonState);
  return {
    health: fightResult.playerHealth,
    exp: prevGameState.exp + getExpGained(enemies, fightResult.result),
    dungeonState: newDungeonState,
  };
};

const processTurn = (turnData, setGameState, gameData) => {
  setGameState((prevGameState) => {
    let obj = {};
    let updates = { flags: {} };
    switch (turnData.type) {
      case 'go':
        updates.location = turnData.areaId;
        break;
      case 'shop-buy':
        updates = {
          ...updates,
          ...processShopBuyItem(prevGameState, turnData, gameData),
        };
        break;
      case 'shop-sell':
        updates = {
          ...updates,
          ...processShopSellItem(prevGameState, turnData, gameData),
        };
        break;
      case 'inventory-use':
        updates = {
          ...updates,
          ...processTurnCommands(turnData.commands, prevGameState, gameData),
          inventory: inventoryUseOne(turnData.itemId, prevGameState.inventory),
        };
        break;
      case 'toggle-equip':
        updates.inventory = getInventoryToggleEquip(turnData.itemId, prevGameState.inventory);
        break;
      case 'healing':
        obj = processHealing(prevGameState, gameData);
        updates.health = obj.newHealth;
        updates.flags[obj.cooldownFlag] = obj.cooldownValue;
        break;
      case 'dialog':
        updates = {
          ...updates,
          ...processTurnCommands(turnData.commands, prevGameState, gameData),
        };
        break;
      case 'dialog-topic':
        updates = {
          ...updates,
          ...processDialogTopic(turnData.topicKey, prevGameState, gameData),
        };
        break;
      case 'dungeon-charm':
        break;
      case 'dungeon-flee':
        break;
      case 'dungeon-attack':
        updates = {
          ...updates,
          ...processDungeonAttack(turnData, prevGameState, gameData),
        };
        break;
      case 'dungeon-exit':
        updates.location = turnData.areaId;
        obj = addTreasureToInventory(
          { treasure: turnData.treasure, mode: 'exit' },
          prevGameState.inventory,
          gameData
        );
        if (turnData.canDungeon) {
          updates.inventory = obj.newInventory;
        }
        updates.money = prevGameState.money + obj.addedMoney;
        updates.dungeonState = null;
        break;
      default:
        break;
    }
    const turnGameState = {
      ...prevGameState,
      turns: prevGameState.turns ? prevGameState.turns + 1 : 1,
      saveDate: new Date(),
      ...updates,
      flags: {
        ...prevGameState.flags,
        ...updates.flags,
      },
    };
    // post-process
    const newGameState = {
      ...turnGameState,
      ...getPlayerLevel(turnGameState),
      armorClass: calcArmorClass(turnGameState, gameData),
    };
    saveGame(newGameState);
    return newGameState;
  });
};

const getMapMaxW = (a) => {
  switch (a.size) {
    case '2xl':
      return 'max-w-2xl';
    default:
      return 'max-w-xl';
  }
};

const setSizes = ({ setBreakpoint, setIsNarrow, getBreakpoint, activePanel, setActivePanel }) => {
  const newBp = getBreakpoint();
  const newIsNarrow = ['xs', 'sm', 'md'].includes(newBp);
  if (!newIsNarrow && activePanel === GAME_PANELS.PLAYER) {
    setActivePanel(GAME_PANELS.ACTION);
  }
  setIsNarrow(newIsNarrow);
  setBreakpoint(newBp);
};

const evaluateCondition = (condition, gameState) => {
  const { type, key, value } = condition;
  switch (type) {
    case 'statLessThanFlag':
      return gameState[key] < gameState.flags[value];
    case 'statGreaterThanFlag':
      return gameState[key] >= gameState.flags[value];
    case 'flagUnset':
      return !gameState.flags[key];
    case 'flag':
      return gameState.flags[key] === value;
    default:
      return true;
  }
};
const evaluateConditions = (conditions, gameState) => {
  const { operator, conditionsArr } = conditions;
  const results = conditionsArr.map((c) => evaluateCondition(c, gameState));
  let valid = true;
  if (operator === 'all' && results.some((c) => !c)) {
    valid = false;
  }
  if (operator === 'some' && !results.some((c) => c)) {
    valid = false;
  }
  return valid;
};

// DIALOG
const getDialogOpener = (openers, gameState) => {
  // Openers are ordered from most strict to least strict so the default opener is last
  let openerId = null;
  openers.forEach((o) => {
    if (!openerId) {
      if (evaluateConditions(o.conditions, gameState)) {
        openerId = o.id;
      }
    }
  });
  return openerId;
};

const getDialogChoices = (choices, gameState) =>
  choices.filter((c) => evaluateConditions(c.conditions, gameState));

const getDialogInventory = (gameState, gameData) =>
  gameState.dialogInventory
    .filter((i) => gameData.dialogTopics[i])
    .map((i) => gameData.dialogTopics[i]);

const getEquippedByArea = (area, inventory, items) => {
  const itemId = Object.keys(inventory).find(
    (k) => inventory[k].equipped && items[k].equipArea === area
  );
  return items[itemId];
};

const formatDateFromTurn = (turns) => {
  const { startYear, times, days, months, turnsInYear, turnsInMonth, turnsInDay } = DATE_CONFIG;
  let leftover = 0;
  const y = Math.floor(turns / turnsInYear);
  leftover = turns - y * turnsInYear;
  const m = Math.floor(leftover / turnsInMonth);
  leftover -= m * turnsInMonth;
  const d = 1 + Math.floor(leftover / turnsInDay);
  const wd = (d - 1) % 10;
  const t = turns % 5;
  return `${days[wd]}, ${months[m]} ${d}, ${startYear + y} - ${times[t]}`;
};

export {
  processTurn,
  evaluateConditions,
  getMapMaxW,
  setSizes,
  saveGame,
  getDialogOpener,
  getDialogChoices,
  processTurnCommands,
  getDialogInventory,
  getEnemiesForDungeonFloor,
  getTreasure,
  getEquippedByArea,
  formatDateFromTurn,
};
