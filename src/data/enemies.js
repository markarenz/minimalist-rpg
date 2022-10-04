const enemies = {
  rat: {
    id: 'rat',
    titleKey: 'enemy__rat_title',
    descriptionKey: 'enemy__rat_description',
    level: 1,
    expValue: 10,
    healthDef: {
      min: 2,
      perLevelGrowth: 0.25,
    },
    armor: ['armor__fur'],
    weapon: 'weapon__bite',
  },
};

export default enemies;
