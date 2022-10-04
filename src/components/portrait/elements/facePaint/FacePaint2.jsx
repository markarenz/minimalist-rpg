import React from 'react';
import PropTypes from 'prop-types';

const FacePaint2 = ({ color, color2 }) => (
  <g id="facepaint-2" stroke="#000" strokeDasharray="none" strokeOpacity="0" strokeWidth="0">
    <path
      fill={color}
      d="M43.348 47.33s-1.18-2.728-2.801-3.392c-1.622-.663-5.013-1.106-7.078-.369-2.064.738-3.022 2.876-4.497 3.097-1.474.22 1.917.442 1.917.442s3.318-2.654 6.119-2.58c2.801.074 3.833.81 4.497 1.4.663.59 1.843 1.401 1.843 1.401z"
    />
    <path
      fill={color}
      d="M56.89 47.33s1.18-2.728 2.801-3.392c1.622-.663 5.013-1.106 7.077-.369 2.065.738 3.023 2.876 4.497 3.097 1.475.22-1.916.442-1.916.442s-3.318-2.654-6.12-2.58c-2.8.074-3.833.81-4.496 1.4-.664.59-1.843 1.401-1.843 1.401z"
    />
    <path
      fill={color2}
      d="M46.202 75.002s2.373-2.326 3.629-1.721c1.256.604 2.047.325 2.652-.047s3.536 1.442 3.536 1.442-3.024 1.908-4.653 1.815c-1.628-.093-5.164-1.489-5.164-1.489z"
    />
    <path
      fill={color2}
      d="M44.015 74.909s1.535-.326 2.885.419c1.349.744 3.07 1.442 4.699 1.07 1.628-.372 4.746-1.675 4.746-1.675s.79 3.676-5.165 4.28c-4.698.478-7.165-4.094-7.165-4.094z"
    />
    <path
      fill={color}
      fillOpacity="0.239"
      d="M26.639 59.86c2.184-1.266 2.414 2.3 3.449 3.566 1.034 1.265 4.253 4.256 3.793 6.096-.46 1.84-5.633-.69-6.667-3.45-1.035-2.761-.575-6.212-.575-6.212z"
    />
    <path
      fill={color}
      fillOpacity="0.239"
      d="M72.563 59.86c-2.184-1.266-2.414 2.3-3.448 3.566-1.035 1.265-4.254 4.256-3.794 6.096.46 1.84 5.633-.69 6.667-3.45 1.035-2.761.575-6.212.575-6.212z"
      display="inline"
    />
  </g>
);
FacePaint2.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default FacePaint2;
