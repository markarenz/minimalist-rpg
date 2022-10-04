import React from 'react';
import PropTypes from 'prop-types';

const ColorPickerPalette = ({ pal, handleColorPick }) => (
  <div className="grid grid-cols-6">
    {pal.map((c) => (
      <div className="text-center" key={`palette-${c}`}>
        <button
          type="button"
          className="w-6 h-6 relative scale-100 hover:scale-150 duration-200 transition-scale border-2 border-color-gray-300"
          aria-label={`color-${c}`}
          onClick={() => handleColorPick(c)}
        >
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: c }} />
        </button>
      </div>
    ))}
  </div>
);

ColorPickerPalette.defaultProps = {
  pal: [],
};
ColorPickerPalette.propTypes = {
  pal: PropTypes.arrayOf(PropTypes.string),
  handleColorPick: PropTypes.func.isRequired,
};

export default ColorPickerPalette;
