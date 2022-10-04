import React from 'react';
import PropTypes from 'prop-types';

const BtnIcon = ({ icon, title, onClick, disabled, color, size }) => {
  const bgColors = {
    danger: 'bg-red-500',
    primary: 'bg-primary',
  };
  const sizeClasses = {
    lg: 'w-12 h-12',
    md: 'w-8 h-8',
    sm: 'w-6 h-6',
  };
  return (
    <button
      type="button"
      className={`rounded-full border-2 duration-200 transition-all scale-100 hover:scale-110 border-gray-900 hover:border-gray-300 p-1 ${bgColors[color]} ${sizeClasses[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={icon} alt={title} title={title} />
    </button>
  );
};

BtnIcon.defaultProps = {
  disabled: false,
  size: 'lg',
};

BtnIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default BtnIcon;
