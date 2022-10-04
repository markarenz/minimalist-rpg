import React from 'react';
import PropTypes from 'prop-types';

const FacePaint3 = ({ color, color2 }) => (
  <g
    id="facepaint-3"
    fill="red"
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeOpacity="1"
    strokeWidth="0"
  >
    <path
      fill={color}
      d="M28.482 53.295s3.956-1.813 7.912-1.6c3.956.212 8.505 2.238 8.505 2.238s7.516-25.728-7.319-25.515c-14.834.213-9.098 24.877-9.098 24.877z"
    />
    <path
      fill={color}
      d="M72.635 54.052s-3.956-1.813-7.911-1.6c-3.956.212-8.505 2.238-8.505 2.238s-7.517-25.728 7.318-25.515c14.834.213 9.098 24.877 9.098 24.877z"
    />
    <path
      fill={color2}
      d="M49.448 71.798c5.934-.395 9.494-5.34 12.659-3.955 3.164 1.384 1.978 11.274-.594 13.054-2.571 1.78-14.24 4.549-19.977 0-5.736-4.55-6.527-9.494-3.758-10.879 2.77-1.384 11.67 1.78 11.67 1.78z"
    />
    <path
      fill={color2}
      d="M35.916 64.686a4.55 4.846 0 01-5.699 3.13 4.55 4.846 0 01-2.976-6.05 4.55 4.846 0 015.658-3.212 4.55 4.846 0 013.054 6.005z"
    />
    <path
      fill={color2}
      d="M73.358 64.587a4.55 4.846 0 01-5.7 3.13 4.55 4.846 0 01-2.976-6.05 4.55 4.846 0 015.659-3.212 4.55 4.846 0 013.053 6.005z"
    />
  </g>
);
FacePaint3.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default FacePaint3;
