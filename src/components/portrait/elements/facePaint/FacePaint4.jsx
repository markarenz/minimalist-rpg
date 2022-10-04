import React from 'react';
import PropTypes from 'prop-types';

const FacePaint4 = ({ color, color2 }) => (
  <g id="facepaint-4">
    <g clipPath="url(#clipPath28291)">
      <g display="inline">
        <path
          fill={color}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0"
          d="M71.347 12.233l-25.91 32.473L63.352 34.58 32.58 76.515l9.296-24.526-11.867 5.143 26.9-55.58z"
        />
      </g>
      <g fillOpacity="1" stroke="#000" strokeDasharray="none" strokeOpacity="1" strokeWidth="0">
        <path fill={color2} d="M39.315 53.094L32.67 76.318l2.265-6 6.95-18.339z" />
        <path fill={color2} d="M56.018 3.404l-1.526-1.13-26.946 55.902 2.531-1.068z" />
      </g>
    </g>
  </g>
);
FacePaint4.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default FacePaint4;
