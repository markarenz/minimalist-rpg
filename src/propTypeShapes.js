import {
  shape,
  object,
  bool,
  arrayOf,
  objectOf,
  string,
  number,
  node,
  oneOfType,
} from 'prop-types';

const gameDataType = shape({
  areas: shape({}),
  dialog: objectOf(
    shape({
      messageKey: string.isRequired,
      choices: arrayOf(
        shape({
          messageKey: string.isRequired,
          conditions: shape({
            operator: string.isRequired,
            conditionsArr: arrayOf(shape({})),
          }).isRequired,
          commands: arrayOf(
            shape({
              type: string,
              id: string,
              key: string,
              value: oneOfType([string, number, bool, object]),
              operator: string,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  items: shape({}),
});

const itemsType = shape({
  titleKey: string.isRequired,
  category: string.isRequired,
  descriptionKey: string.isRequired,
  equippable: bool,
  equipArea: string,
  isTreasure: bool,
  rarity: number,
  dmg: shape({
    min: number,
    max: number,
  }),
  effects: arrayOf(shape({})),
});

const treasureType = arrayOf(string);

const dungeonStateType = shape({
  stage: string.isRequired,
  floor: number.isRequired,
  treasure: arrayOf(string),
});

const gameStateType = shape({
  location: string.isRequired,
  flags: shape({}),
  currentDialog: string,
  car_fixing: number,
});

const areaType = shape({
  size: number.isRequired,
  position: shape({
    x: number.isRequired,
    y: number.isRequired,
  }).isRequired,
});

const headerButtonItemType = shape({
  id: string.isRequired,
  title: string.isRequired,
  icon: string.isRequired,
  bgColor: string.isRequired,
  borderColor: string.isRequired,
});

const childrenType = oneOfType([arrayOf(node), node]);

const colorHslType = shape({
  h: number.isRequired,
  s: number.isRequired,
  l: number.isRequired,
});

const colorPickerStateType = shape({
  appearanceKey: string,
  colorObj: shape({
    color: string,
    color2: string,
  }),
});

const appearanceType = shape({
  skin: shape({
    color: string.isRequired,
  }).isRequired,
  eyes: shape({
    color: string.isRequired,
  }).isRequired,
  outlines: shape({
    color: string.isRequired,
  }).isRequired,
  hair: shape({
    style: number.isRequired,
    color: string.isRequired,
    color2: string.isRequired,
  }).isRequired,
  facePaint: shape({
    style: number.isRequired,
    color: string.isRequired,
    color2: string.isRequired,
  }).isRequired,
  facialHair: shape({
    style: number.isRequired,
    color: string.isRequired,
  }).isRequired,
  extras: arrayOf(string).isRequired,
});

export {
  gameDataType,
  gameStateType,
  areaType,
  headerButtonItemType,
  childrenType,
  colorHslType,
  colorPickerStateType,
  appearanceType,
  itemsType,
  dungeonStateType,
  treasureType,
};
