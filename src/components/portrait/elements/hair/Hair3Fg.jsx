import React from 'react';
import PropTypes from 'prop-types';

const Hair3Fg = ({ color, color2 }) => (
  <g id="hair-3-fg" stroke="#000" strokeDasharray="none" strokeOpacity="1">
    <path
      fill={color}
      strokeWidth="0.6"
      d="M48.917-2.067S38.353-4.364 33.071 1.148C27.789 6.66 22.736 12.402 27.1 16.076c4.363 3.675 11.483 6.66 15.157 4.134 3.675-2.526 9.876-8.727 14.698-6.2 4.823 2.525 8.498 6.2 11.024 11.482 5.397 10.967 14.65 2.106 12.631-6.2C77.165 10.563 72.113 3.214 67.52.458c-4.593-2.756-18.603-2.526-18.603-2.526z"
      display="inline"
    />
    <path
      fill={color2}
      strokeWidth="0"
      d="M34.251 6.85s-4.747 7.67-.72 9.452c8.579 3.797 9.439-5.093 19.61-5.508 10.172-.415 18.175 11.62 18.175 11.62S61.795 4.94 48.995 9.599C33.725 15.156 34.25 6.85 34.25 6.85z"
    />
    <path
      fill={color2}
      strokeWidth="0"
      d="M44.13.956s12.98-2.869 18.719 0c5.738 2.87 12.16 12.57 12.16 12.57S67.22 4.782 61.209 2.46C55.198.137 44.131.956 44.131.956z"
    />
  </g>
);
Hair3Fg.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Hair3Fg;
