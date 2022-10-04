import React from 'react';
import PropTypes from 'prop-types';
import { childrenType } from '../../propTypeShapes';

const Button = ({ children, onClick, disabled, variant, color, size = 'large' }) => {
  const btnClassBasics = 'uppercase border-2 rounded-md';
  const btnClassAnim = disabled
    ? 'cursor-default'
    : 'cursor-pointer scale-100 hover:scale-[1.1] transition-scale duration-300';
  const btnClassSize =
    size === 'large' ? 'px-4 py-2 text-lg font-bold' : 'px-2 py-1 text-sm font-normal';

  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-white border-gray-600 text-gray-600',
    outlined: 'border-2 bg-transparent border-gray-100 hover:bg-secondary',
  };
  let btnClassColor = variantClasses[variant];
  if (disabled) {
    btnClassColor =
      color === 'primary'
        ? 'bg-gray-700 text-gray-500 border-gray-900'
        : 'bg-white border-gray-400 text-gray-400';
  }
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${btnClassSize} ${btnClassBasics} ${btnClassColor} ${btnClassAnim}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'primary',
  size: 'large',
  disabled: false,
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: childrenType.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
