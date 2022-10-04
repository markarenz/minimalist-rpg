import React from 'react';
import PropTypes from 'prop-types';
import { BtnIcon } from '../index';
import { iconSwap } from '../../img';

const ColorPickerResult = ({
  handleSetPickerLevel,
  has2Colors,
  pickerLevel,
  localColor,
  handleColorSwap,
}) => (
  <div className="w-full h-12 relative">
    <button type="button" aria-label="color picker level 1" onClick={() => handleSetPickerLevel(1)}>
      <div
        className={`absolute top-0 left-0 ${has2Colors ? 'w-[70%]' : 'w-full'} h-full border-2 
                    ${pickerLevel === 1 ? 'border-gray-300 z-10' : 'border-transparent z-1'}`}
        style={{ backgroundColor: localColor?.colorObj.color }}
      />
    </button>
    {has2Colors && (
      <button
        type="button"
        aria-label="color picker level 2"
        onClick={() => handleSetPickerLevel(2)}
      >
        <div
          className={`absolute -bottom-4 right-0 w-[70%] h-8 border-2 ${
            pickerLevel === 2 ? 'border-gray-300 z-10' : 'border-transparent z-1'
          }`}
          style={{ backgroundColor: localColor?.colorObj.color2 }}
        />
      </button>
    )}
    {has2Colors && (
      <div className="absolute top-0 right-0">
        <BtnIcon onClick={handleColorSwap} title="Swap" size="sm" icon={iconSwap} color="primary" />
      </div>
    )}
  </div>
);

ColorPickerResult.defaultProps = {
  has2Colors: false,
  localColor: {
    colorObj: {
      color2: null,
    },
  },
};

ColorPickerResult.propTypes = {
  handleSetPickerLevel: PropTypes.func.isRequired,
  has2Colors: PropTypes.bool,
  pickerLevel: PropTypes.number.isRequired,
  localColor: PropTypes.shape({
    colorObj: PropTypes.shape({
      color: PropTypes.string.isRequired,
      color2: PropTypes.string,
    }),
  }),
  handleColorSwap: PropTypes.func.isRequired,
};

export default ColorPickerResult;
