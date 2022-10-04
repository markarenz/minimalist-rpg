import React from 'react';
import PropTypes from 'prop-types';
import { colorHslType } from '../../propTypeShapes';

const ColorPickerInputs = ({ customColor, handleHslChange }) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    <label htmlFor="colorPicker-h">
      H
      <input
        type="number"
        name="h"
        id="colorPicker-h"
        max={360}
        value={customColor.h}
        className="ml-2 w-16 border-2 border-white p-2 bg-transparent outline-none rounded-md w-full focus:bg-gray-100/10 focus:border-primary"
        onChange={handleHslChange}
      />
    </label>
    <label htmlFor="colorPicker-h">
      S
      <input
        type="number"
        name="s"
        max={100}
        id="colorPicker-s"
        value={customColor.s}
        className="ml-2 w-16 border-2 border-white p-2 bg-transparent outline-none rounded-md w-full focus:bg-gray-100/10 focus:border-primary"
        onChange={handleHslChange}
      />
    </label>
    <label htmlFor="colorPicker-h">
      L
      <input
        type="number"
        name="l"
        max={100}
        id="colorPicker-l"
        value={customColor.l}
        className="ml-2 w-16 border-2 border-white p-2 bg-transparent outline-none rounded-md w-full focus:bg-gray-100/10 focus:border-primary"
        onChange={handleHslChange}
      />
    </label>
  </div>
);

ColorPickerInputs.propTypes = {
  customColor: colorHslType.isRequired,
  handleHslChange: PropTypes.func.isRequired,
};

export default ColorPickerInputs;
