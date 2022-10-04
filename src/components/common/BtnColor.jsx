import React from 'react';
import PropTypes from 'prop-types';

const BtnColor = ({ colorObj, handleClick, disabled }) => (
  <button
    type="button"
    onClick={handleClick}
    disabled={disabled}
    className="w-8 h-8 relative overflow-hidden border-2 border-gray-200 disabled:opacity-50"
    aria-label="hair-color"
  >
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: colorObj.color }}
    />
    {colorObj.color2 && (
      <div
        className="absolute top-[40%] left-0 w-[150%] h-full -rotate-45 "
        style={{ backgroundColor: colorObj.color2 }}
      />
    )}
  </button>
);

BtnColor.defaultProps = {
  colorObj: {
    color2: null,
  },
  disabled: false,
};

BtnColor.propTypes = {
  colorObj: PropTypes.shape({
    color: PropTypes.string.isRequired,
    color2: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default BtnColor;
