import React from 'react';
import PropTypes from 'prop-types';

const BtnArrow = ({ handleClick, variant }) => (
  <button
    type="button"
    onClick={handleClick}
    className="w-8 h-8 text-xl inline transition-scale duration-200 scale-100 hover:scale-150"
  >
    {variant === 'prev' ? '\u25C0' : '\u25B6'}
  </button>
);
BtnArrow.propTypes = {
  variant: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BtnArrow;
