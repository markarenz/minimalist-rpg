import React from 'react';
import PropTypes from 'prop-types';

const FacialHair5 = ({ color }) => (
  <g id="facial-hair-5" display="inline">
    <path
      id="path1635"
      fill={color}
      fillOpacity="1"
      stroke="#050505"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeWidth="0"
      d="M40.253 68.507c1.398-.767 6.318.304 9.545.216 3.227-.087 7.555-1.902 9.653-1.245 1.83.574 1.681 2.576 1.856 2.925.174.349-1.78.225-1.78.225l-1.123 1.204-1.6-.087-1.57.92-1.86-.104-1.483.785-2.005-.61-1.832.697-2.093-.96-2.704.785-1.657-1.22-2.267.784-.984-1.524s.505-2.024 1.904-2.79z"
      paintOrder="markers fill stroke"
    />
  </g>
);

FacialHair5.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacialHair5;
