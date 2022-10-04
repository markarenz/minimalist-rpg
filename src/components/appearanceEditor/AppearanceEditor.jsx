import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { APPEARANCE_DEFS } from '../../data/constants';
import {
  getRandomAppearance,
  walkArrayVal,
  toggleExtra,
} from '../../helpers/charCreateEditHelpers';
import {
  CharPortrait,
  BtnIcon,
  AppearanceSection,
  ModalColorPicker,
  AppearanceSectionSimple,
} from '../index';
import { iconRandomize } from '../../img';

const AppearanceEditor = ({ mode, initAppearance, updateAppearance }) => {
  const defaultAppearance = mode === 'create' ? getRandomAppearance(false) : initAppearance;
  const [localAppearance, setLocalAppearance] = useState(defaultAppearance);
  const [colorPickerState, setColorPickerState] = useState(null);
  const handleIncrementalChange = (key, dir) => {
    setLocalAppearance((prevAppearance) => ({
      ...prevAppearance,
      [key]: {
        ...prevAppearance[key],
        style: walkArrayVal(APPEARANCE_DEFS[key]?.styles, prevAppearance[key]?.style, dir),
      },
    }));
  };
  const handleColorChange = (appearanceKey) => {
    setColorPickerState({ appearanceKey, colorObj: localAppearance[appearanceKey] });
  };
  const handleColorPickerCancel = () => {
    setColorPickerState(null);
  };
  const handleColorPickerUpdate = (localColor) => {
    const { appearanceKey, colorObj } = localColor;
    setLocalAppearance((prevAppearance) => ({
      ...prevAppearance,
      [appearanceKey]: {
        ...prevAppearance[appearanceKey],
        color: colorObj.color,
        color2: colorObj.color2 || null,
      },
    }));
    setColorPickerState(null);
  };
  const handleToggleExtra = (i) => {
    const newExtras = toggleExtra(i, localAppearance.extras);
    setLocalAppearance({
      ...localAppearance,
      extras: newExtras,
    });
  };
  const handleRandomize = () => {
    setLocalAppearance(getRandomAppearance(true));
  };
  useEffect(() => {
    updateAppearance(localAppearance);
  }, [localAppearance]);
  return (
    <div>
      <div className="w-full max-w-lg mx-auto bg-red-500 relative">
        {localAppearance?.skin?.color && <CharPortrait appearance={localAppearance} />}
        <div className="absolute -top-2 -right-1 w-8 h-8">
          <BtnIcon
            title="Randomize"
            icon={iconRandomize}
            onClick={handleRandomize}
            color="primary"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <AppearanceSectionSimple
          handleColorChange={handleColorChange}
          appearanceKey="skin"
          colorObj={localAppearance.skin}
        />
        <AppearanceSectionSimple
          handleColorChange={handleColorChange}
          appearanceKey="eyes"
          colorObj={localAppearance.eyes}
        />

        <AppearanceSectionSimple
          handleColorChange={handleColorChange}
          appearanceKey="outlines"
          colorObj={localAppearance.outlines}
        />

        <AppearanceSection
          appearanceKey="hair"
          data={localAppearance.hair}
          handleStyleChange={handleIncrementalChange}
          handleColorChange={handleColorChange}
        />
        <AppearanceSection
          appearanceKey="facePaint"
          data={localAppearance.facePaint}
          handleStyleChange={handleIncrementalChange}
          handleColorChange={handleColorChange}
        />
        <AppearanceSection
          appearanceKey="facialHair"
          data={localAppearance.facialHair}
          handleStyleChange={handleIncrementalChange}
          handleColorChange={handleColorChange}
        />
      </div>
      <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
        {APPEARANCE_DEFS.extras.map((i) => (
          <div key={i} className="py-1">
            <input
              type="checkbox"
              checked={localAppearance.extras.includes(i)}
              name={i}
              onChange={() => handleToggleExtra(i)}
            />
            <span className="ml-2">
              <FormattedMessage
                id={`char_create__extras__${i}`}
                defaultMessage={`char_create__extras__${i}`}
              />
            </span>
          </div>
        ))}
      </div>

      <ModalColorPicker
        isOpen={!!colorPickerState}
        colorPickerState={colorPickerState}
        handleColorPickerUpdate={handleColorPickerUpdate}
        handleColorPickerCancel={handleColorPickerCancel}
      />
    </div>
  );
};

AppearanceEditor.defaultProps = {
  initAppearance: null,
};
AppearanceEditor.propTypes = {
  mode: PropTypes.string.isRequired,
  initAppearance: PropTypes.shape({}),
  updateAppearance: PropTypes.func.isRequired,
};
export default AppearanceEditor;
