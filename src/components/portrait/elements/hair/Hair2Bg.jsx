import React from 'react';
import PropTypes from 'prop-types';

const Hair2Bg = ({ color }) => (
  <g id="hair-2-bg">
    <path
      fill={color}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeOpacity="1"
      strokeWidth="0.6"
      d="M49.801-3.394c-15.269 0-25.998 3.5-33.013 15.945C9.772 24.995 3.994 60.384 8.534 70.884c4.54 10.5.413 19.444 5.365 21.778 4.952 2.333 21.046 4.666 21.046 4.666l15.288-4.502 15.288 4.502s16.094-2.333 21.046-4.666c4.952-2.334.825-11.279 5.364-21.778 4.54-10.5-1.238-45.889-8.253-58.333C76.663.106 65.933-3.394 50.664-3.394l-.431.39z"
      clipPath="url(#clipPath24013)"
    />
  </g>
);

Hair2Bg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair2Bg;
