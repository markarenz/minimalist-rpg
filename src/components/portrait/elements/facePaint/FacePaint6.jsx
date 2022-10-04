import React from 'react';
import PropTypes from 'prop-types';

const FacePaint6 = ({ color }) => (
  <g id="facepaint-6">
    <g
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeOpacity="1"
      strokeWidth="0"
      clipPath="url(#clipPath33525)"
      paintOrder="markers fill stroke"
    >
      <path
        fill={color}
        d="M55.924 2.267s-5.128 14.496-7.589 25.185c-2.662 11.564-.673 26.958-.673 36.933 0 9.975 1.347 28.565 1.347 28.565L11.335 77.08l.454-59.397L43.528-5.44z"
      />
      <path
        fill={color}
        d="M58.944 88.87L77.08 73.452l4.081-48.969-9.068-14.509s-1.302 29.379-3.494 42.528c-2.191 13.149-9.655 36.366-9.655 36.366z"
      />
    </g>
  </g>
);
FacePaint6.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacePaint6;
