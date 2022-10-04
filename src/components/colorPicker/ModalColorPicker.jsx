import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { APPEARANCE_DEFS } from '../../data/constants';
import {
  TransitionWrap,
  Button,
  ColorPickerPalette,
  ColorPickerSlider,
  ColorPickerResult,
  ColorPickerInputs,
} from '../index';
import { cleanColorInput, strToHslObj, getHslStr } from '../../helpers/charCreateEditHelpers';
import { colorPickerStateType } from '../../propTypeShapes';

const ModalColorPicker = ({
  isOpen,
  colorPickerState,
  handleColorPickerCancel,
  handleColorPickerUpdate,
}) => {
  const bgClass = isOpen ? 'opacity-100' : 'opacity-0';
  const activePointersClass = isOpen ? 'pointer-events-all' : 'pointer-events-none';
  const [localColor, setLocalColor] = useState(null);
  const [pickerLevel, setPickerLevel] = useState(1);
  const [customColor, setCustomColor] = useState({ h: 0, s: 0, l: 0 });

  useEffect(() => {
    if (colorPickerState) {
      setPickerLevel(1);
      setLocalColor(colorPickerState);
      setCustomColor(strToHslObj(colorPickerState.colorObj.color));
    }
  }, [colorPickerState]);
  const titleKey = `char_create__label_${localColor?.appearanceKey}`;

  const handleColorPick = (hslStr) => {
    setCustomColor(strToHslObj(hslStr));
    setLocalColor((prevColor) => ({
      ...prevColor,
      colorObj: {
        ...prevColor.colorObj,
        color: pickerLevel === 1 ? hslStr : prevColor.colorObj.color,
        color2: pickerLevel === 2 ? hslStr : prevColor.colorObj.color2,
      },
    }));
  };
  const handleSetPickerLevel = (lvl) => {
    setPickerLevel(lvl);
  };
  const palette = APPEARANCE_DEFS[localColor?.appearanceKey]?.defaultColors;

  const handleColorSwap = () => {
    setLocalColor((prevColor) => ({
      ...prevColor,
      colorObj: {
        ...prevColor.colorObj,
        color: prevColor.colorObj.color2,
        color2: prevColor.colorObj.color,
      },
    }));
  };
  const handleHlsChangeSlider = (key, value) => {
    const newCustomColor = {
      ...customColor,
      [key]: value,
    };
    setCustomColor(newCustomColor);
    const hslStr = getHslStr(newCustomColor);
    setLocalColor((prevColor) => ({
      ...prevColor,
      colorObj: {
        ...prevColor.colorObj,
        color: pickerLevel === 1 ? hslStr : prevColor.colorObj.color,
        color2: pickerLevel === 2 ? hslStr : prevColor.colorObj.color2,
      },
    }));
  };
  const handleHslChange = (e) => {
    const newCustomColor = {
      ...customColor,
      [e.target.name]: cleanColorInput(e),
    };
    setCustomColor(newCustomColor);
    const hslStr = getHslStr(newCustomColor);
    setLocalColor((prevColor) => ({
      ...prevColor,
      colorObj: {
        ...prevColor.colorObj,
        color: pickerLevel === 1 ? hslStr : prevColor.colorObj.color,
        color2: pickerLevel === 2 ? hslStr : prevColor.colorObj.color2,
      },
    }));
  };
  const has2Colors = localColor?.colorObj.color2;
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center ${activePointersClass}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-modalBg transition-opacity duration-200 ${bgClass} ${activePointersClass}`}
      />
      <TransitionWrap show={isOpen} anim="l2c2r">
        <div className="">
          <div className="rounded-md bg-gray-800 border-2 border-gray-700 max-w-3xl">
            <div className="bg-primary p-4 rounded-tl-[4px] rounded-tr-[4px]">
              <h3 className="text-white font-bold text-xl leading-[1]">
                <FormattedMessage id="color_picker__title" />{' '}
                <FormattedMessage id={titleKey} defaultMessage={titleKey} />
              </h3>
            </div>
            <div className="p-4">
              <ColorPickerResult
                handleSetPickerLevel={handleSetPickerLevel}
                has2Colors={has2Colors}
                pickerLevel={pickerLevel}
                localColor={localColor}
                handleColorSwap={handleColorSwap}
              />
              <div className={has2Colors ? 'mt-8' : 'mt-4'}>
                <ColorPickerPalette pal={palette} handleColorPick={handleColorPick} />
              </div>
              <ColorPickerSlider
                handleHlsChangeSlider={handleHlsChangeSlider}
                hslKey="hue"
                customColor={customColor}
              />
              <ColorPickerSlider
                handleHlsChangeSlider={handleHlsChangeSlider}
                hslKey="saturation"
                customColor={customColor}
              />
              <ColorPickerSlider
                handleHlsChangeSlider={handleHlsChangeSlider}
                hslKey="lightness"
                customColor={customColor}
              />

              <ColorPickerInputs customColor={customColor} handleHslChange={handleHslChange} />

              <div className="text-right mt-8">
                <span className="mr-4">
                  <Button onClick={handleColorPickerCancel} variant="secondary">
                    <FormattedMessage id="common__cancel" />
                  </Button>
                </span>
                <Button onClick={() => handleColorPickerUpdate(localColor)} variant="primary">
                  <FormattedMessage id="common__ok" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TransitionWrap>
    </div>
  );
};

ModalColorPicker.defaultProps = {
  colorPickerState: {},
};

ModalColorPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  colorPickerState: colorPickerStateType,
  handleColorPickerUpdate: PropTypes.func.isRequired,
  handleColorPickerCancel: PropTypes.func.isRequired,
};
export default ModalColorPicker;
