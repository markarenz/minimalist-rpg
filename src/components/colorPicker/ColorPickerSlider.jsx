import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import { colorHslType } from '../../propTypeShapes';

const ColorPickerSlider = ({ handleHlsChangeSlider, hslKey, customColor }) => {
  const htsLetter = hslKey[0];
  const maxVals = {
    hue: 360,
    saturation: 100,
    lightness: 100,
  };
  const bgClasses = {
    hue: 'hueGradient',
    saturation: 'rounded-lg',
    lightness: 'bg-white bg-gradient-to-r from-black',
  };
  const satBgStyle = {
    borderRadius: 30,
    background: `linear-gradient(90deg, hsl(${customColor.h},0%,${customColor.l}%) 0%, hsl(${customColor.h},100%,${customColor.l}%) 100%)`,
  };
  return (
    <div
      id="saturation"
      className="w-full h-4 mt-4"
      style={hslKey === 'saturation' ? satBgStyle : {}}
    >
      <ReactSlider
        ariaLabel={`color pick ${hslKey}`}
        step={1}
        min={0}
        max={maxVals[hslKey]}
        className={`w-full h-4 ${bgClasses[hslKey]} rounded-lg appearance-none cursor-pointer`}
        thumbClassName="absolute w-5 h-5 cursor-grab bg-gray-900 rounded-full focus:outline-none border-2 border-gray-500 focus:border-white -top-[2px]"
        value={customColor[htsLetter]}
        onChange={(val) => handleHlsChangeSlider(htsLetter, val)}
      />
    </div>
  );
};

ColorPickerSlider.propTypes = {
  handleHlsChangeSlider: PropTypes.func.isRequired,
  hslKey: PropTypes.string.isRequired,
  customColor: colorHslType.isRequired,
};

export default ColorPickerSlider;
