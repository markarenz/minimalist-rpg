const areas = {
  main: {
    type: 'map',
    parent: null,
    titleKey: 'area__main_area__title',
    size: 'xl',
    areas: {
      towny_town: {
        size: 20,
        position: {
          x: 60,
          y: 60,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
      dungeon1: {
        size: 10,
        position: {
          x: 25,
          y: 25,
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
    titleKey: 'area__dungeon1__title',
    level: 1,
    descriptionKey: 'area__dungeon1__description',
  },
  towny_town: {
    type: 'map',
    parent: 'main',
    titleKey: 'area__towny_town__title',
    size: 'xl',
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
        // description:
        //   'Break a bottle over your own head to prevent the other guy from doing it first.',
        size: 10,
        position: {
          x: 30,
          y: 20,
        },
        conditions: {
          operator: 'all',
          conditionsArr: [],
        },
      },
      healing_spring: {
        size: 10,
        position: {
          x: 70,
          y: 60,
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
          x: 70,
          y: 60,
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
