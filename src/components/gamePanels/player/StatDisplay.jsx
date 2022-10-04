import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { childrenType } from '../../../propTypeShapes';

const StatDisplay = ({ value, children }) => {
  const [isHighlighting, setIsHighlighting] = useState(false);
  const prevValue = useRef(null);
  useEffect(() => {
    if (prevValue.current !== null && prevValue.current !== value) {
      setIsHighlighting(true);
      setTimeout(() => {
        setIsHighlighting(false);
      }, 350);
    }
    prevValue.current = value;
  }, [value]);
  return (
    <span
      className={`inline-block relative transition-all duration-300 ${
        isHighlighting ? 'scale-150 text-primary font-bold' : 'text-gray-100'
      }`}
    >
      {value && value}
      {children && children}
    </span>
  );
};

StatDisplay.defaultProps = {
  value: '',
  children: '',
};
StatDisplay.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: childrenType,
};

export default StatDisplay;
