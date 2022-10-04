import React from 'react';
import PropTypes from 'prop-types';

const Hair9Bg = ({ color }) => (
  <g id="hair-9-bg" display="inline">
    <path
      fill={color}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeOpacity="1"
      strokeWidth="0.6"
      d="M50-8.592c-2.695 1.24-5.99 2.327-9.64 2.645-9.772.85-10.622 10.62-10.622 10.62S18.693 1.7 12.32 8.923c-6.372 7.222 5.098 13.17 5.098 13.17s-8.922 6.796-11.47 18.691c-2.55 11.895 6.372 11.47 6.372 11.47s-6.797 7.222-6.797 18.692c0 11.47 14.018 11.047 14.018 11.047s-4.672 5.947.426 13.594c5.098 7.647 14.443-3.398 14.443-3.398L50 94.51l15.59-2.323s9.345 11.046 14.443 3.399c5.098-7.647.426-13.594.426-13.594s14.018.424 14.018-11.047c0-11.47-6.797-18.691-6.797-18.691s8.922.424 6.373-11.47c-2.55-11.896-11.471-18.692-11.471-18.692s11.47-5.948 5.098-13.17C81.307 1.7 70.262 4.674 70.262 4.674s-.85-9.772-10.621-10.621C55.99-6.265 52.695-7.353 50-8.592z"
      clipPath="url(#clipPath56525)"
      paintOrder="markers fill stroke"
    />
  </g>
);
Hair9Bg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair9Bg;
