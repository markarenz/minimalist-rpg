import imgMapMain from '../img/maps/bg_main.svg';
import imgMapTownyTown from '../img/maps/bg_townyTown.svg';
import imgAreaDungeon1 from '../img/maps/dungeon1.svg';
import imgTownyTown from '../img/maps/townyTown.svg';
import imgTownyBar from '../img/maps/townyBar.svg';
import imgDecoWaves from '../img/maps/map_deco_waves.svg';

const areas = {
  main: {
    type: 'map',
    parent: null,
    titleKey: 'area__main_area__title',
    bgImgSrc: imgMapMain,
    size: 'xl',
    deco: [
      {
        imgSrc: imgDecoWaves,
        size: 10,
        position: {
          x: 4,
          y: 37,
        },
      },
      {
        imgSrc: imgDecoWaves,
        size: 10,
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        imgSrc: imgDecoWaves,
        size: 10,
        position: {
          x: 82,
          y: 48,
        },
      },
      {
        imgSrc: imgDecoWaves,
        size: 10,
        position: {
          x: 30,
          y: 5,
        },
      },
    ],
    areas: {
      towny_town: {
        imgSrc: imgTownyTown,
        size: 14,
        position: {
          x: 61,
          y: 65,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
      dungeon1: {
        imgSrc: imgAreaDungeon1,
        size: 10,
        position: {
          x: 30,
          y: 45,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
    },
  },
  dungeon1: {
    type: 'dungeon',
    parent: 'main',
    imgSrc: imgAreaDungeon1,
    titleKey: 'area__dungeon1__title',
    level: 1,
    descriptionKey: 'area__dungeon1__description',
  },
  towny_town: {
    type: 'map',
    parent: 'main',
    titleKey: 'area__towny_town__title',
    bgImgSrc: imgMapTownyTown,
    size: 'xl',
    deco: [],
    areas: {
      townie_shop: {
        size: 10,
        position: {
          x: 10,
          y: 10,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
      townie_bar: {
        imgSrc: imgTownyBar,
        size: 10,
        position: {
          x: 40,
          y: 40,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
      healing_spring: {
        size: 10,
        position: {
          x: 74,
          y: 82,
        },
        conditions: {
          operator: 'some',
          conditionsArr: [
            { type: 'flagUnset', key: 'healing_spring__cooldown', value: '' },
            { type: 'statGreaterThanFlag', key: 'turns', value: 'healing_spring__cooldown' },
          ],
        },
      },
      healing_spring_closed: {
        size: 10,
        position: {
          x: 74,
          y: 62,
        },
        disabled: true,
        disabledIcon: 'clock',
        conditions: {
          operator: 'all',
          conditionsArr: [
            { type: 'statLessThanFlag', key: 'turns', value: 'healing_spring__cooldown' },
          ],
        },
      },
    },
  },
  townie_shop: {
    type: 'shop',
    parent: 'towny_town',
    titleKey: 'area__townie_shop__title',
    descriptionKey: 'area__townie_shop__description',
    forSale: [
      { id: 'weapon__sword1', price: 15 },
      { id: 'armor__chestPlate1', price: 10 },
      { id: 'armor__helmet1', price: 10 },
      { id: 'potion__heal1', price: 10 },
    ],
  },
  townie_bar: {
    type: 'map',
    parent: 'towny_town',
    titleKey: 'area__townie_bar__title',
    size: 'xl',
    deco: [],
    areas: {
      mike: {
        size: 5,
        position: {
          x: 50,
          y: 10,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
    },
  },
  healing_spring: {
    type: 'healing',
    parent: 'towny_town',
    titleKey: 'area__healing_spring__title',
    descriptionKey: 'area__healing_spring__description',
    descriptionClosedKey: 'area__healing_spring__description_closed',
    healingPerTurn: 4,
    cooldown: 20,
  },
  healing_spring_closed: {
    type: 'disabled',
    parent: 'towny_town',
    titleKey: 'area__healing_spring_closed__title',
  },
  mike: {
    type: 'dialog',
    parent: 'townie_bar',
    titleKey: 'area__mike__title',
    openers: [
      {
        id: 'mike__quest_complete',
        conditions: {
          operator: 'all',
          conditionsArr: [{ type: 'flag', key: 'car_fixed', value: true }],
        },
      },
      {
        id: 'mike__quest_progress',
        conditions: {
          operator: 'all',
          conditionsArr: [{ type: 'flag', key: 'quest__mike', value: true }],
        },
      },
      {
        id: 'mike__default',
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
    ],
  },
};

export default areas;
