import React from 'react';
import PropTypes from 'prop-types';

const Hair1Bg = ({ color }) => (
  <g id="hair-1-bg">
    <path
      fill={color}
      fillOpacity="1"
      stroke="#1b071a"
      strokeDasharray="none"
      strokeOpacity="1"
      strokeWidth="0.8"
      d="M-1.578 100.622s6.51-5.327 6.708-9.667c.197-4.341-2.762-16.574-2.17-21.9.591-5.328 6.116-20.717 5.918-25.65-.197-4.932 9.668-29.594 13.811-32.75C26.833 7.496 32.981 1.684 36.5.394 46.305-3.2 55.6-3.49 64.122 0 71.223 2.907 77.538 11.049 80.3 16.376c2.763 5.327 8.484 27.622 11.05 30.186 2.564 2.565 2.959 13.811 3.55 17.363.592 3.551 1.679 14.345 2.453 18.777 1.193 6.835 2.05 19.87 2.05 19.87l-94.668 5.547z"
      clipPath="url(#clipPath23831)"
    />
  </g>
);

Hair1Bg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair1Bg;
