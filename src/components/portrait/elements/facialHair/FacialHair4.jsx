import React from 'react';
import PropTypes from 'prop-types';

const FacialHair4 = ({ color }) => (
  <g id="facial-hair-4" display="inline">
    <path
      id="path2411"
      fill={color}
      fillOpacity="1"
      stroke="#050505"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeWidth="0"
      d="M49.454 83.516c2.62-.18 3.086.148 3.086 1.231 0 1.084.01 4.222-1.088 4.312-1.098.09-1.153.053-2.25.053-1.099 0-2.45-3.7-1.86-4.784.592-1.083 2.112-.812 2.112-.812z"
      paintOrder="markers fill stroke"
    />
  </g>
);

FacialHair4.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacialHair4;
