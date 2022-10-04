import React from 'react';
import PropTypes from 'prop-types';

const Hair8Bg = ({ color }) => (
  <g id="hair-8-bg">
    <path
      fill={color}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeOpacity="1"
      strokeWidth="0.6"
      d="M49.728 64.547L25.18 65.641s-1.9 15.59-3.507 18.051c-1.607 2.462-9.206 12.171-9.206 12.171l8.475-2.051v2.735l3.36-1.915.147 2.325 3.653-2.461 3.507 2.324 18.146.784-.001.037.425-.019.426.02v-.038l18.144-.784 3.508-2.324 3.653 2.461.146-2.325 3.36 1.915v-2.735l8.475 2.051s-7.598-9.71-9.205-12.171c-1.608-2.461-3.507-18.051-3.507-18.051L50.63 64.547l-.452 17.025z"
      paintOrder="markers fill stroke"
    />
  </g>
);
Hair8Bg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair8Bg;
