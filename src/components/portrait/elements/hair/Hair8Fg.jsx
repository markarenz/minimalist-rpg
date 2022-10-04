import React from 'react';
import PropTypes from 'prop-types';

const Hair8Fg = ({ color, color2 }) => (
  <g
    id="hair-8"
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeLinecap="round"
    strokeOpacity="1"
    paintOrder="markers fill stroke"
  >
    <path
      fill={color}
      strokeWidth="0.6"
      d="M52.826 1.54c-.497.005-1.004.026-1.521.064-22.045 1.603-25.652 15.23-25.652 15.23l-.8 5.418c-.816 2.233-2.081 5.849-2.564 8.084-.735 3.397-1.11 10.327-1.11 10.327l4.214 2.579-.326-6.472 2.348-4.727-1.507-3.759.15-.602 7.61-5.236 2.005 6.413 5.21-4.008 4.009 2.806 6.012-5.21 3.607 6.011 4.009-4.008 2.805 3.607v-6.012l7.616 12.025.802-7.215 2.971 4.457-.662 1.652L74.4 37.69l-.326 6.472 4.213-2.58c-.036-2.336-.756-11.324-.93-12.724 0 0-3.822-27.522-24.532-27.319z"
    />
    <path
      fill={color2}
      strokeWidth="0"
      d="M29 19.204l.281 2.672 6.47-2.954L38 22.72l3.656-2.11 3.938 1.689 6.047-3.798 3.094 2.954 3.376-1.407 1.828.985 1.828-2.954 4.36 4.641 3.516-1.687s3.817.849 3.235 1.969c-.426-7.749-14.954-9.819-23.487-10.267C42.271 12.36 29 19.204 29 19.204z"
    />
    <path
      fill={color2}
      strokeWidth="0"
      d="M24.611 85.507l-5.906 6.891 3.797-1.687.14 1.406 2.11-.844.844 1.969 1.969-2.25 1.828 1.828-2.25-10.829z"
    />
    <path
      fill={color2}
      strokeWidth="0"
      d="M74.893 85.507l5.906 6.891-3.797-1.687-.14 1.406-2.11-.844-.844 1.969-1.969-2.25-1.828 1.828 2.25-10.829z"
    />
  </g>
);
Hair8Fg.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Hair8Fg;