import React from 'react';
import PropTypes from 'prop-types';

const Hair3Bg = ({ color }) => (
  <g
    id="hair-3-bg"
    fill={color}
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeOpacity="1"
    strokeWidth="0.6"
  >
    <path d="M42.674 5.72S21.708 11.052 19.64 22.73c-2.067 11.68 2.067 28.455 3.215 30.367 1.148 1.91 3.674 2.76 3.674 2.76s-.23-18.687.23-22.084c.46-3.398 3.215-13.166 7.579-18.9 4.363-5.733 8.335-9.152 8.335-9.152zm3.89 29.317" />
    <path d="M56.98 5.72s20.966 5.331 23.033 17.01c2.067 11.68-2.067 28.455-3.215 30.367-1.148 1.91-3.675 2.76-3.675 2.76s.23-18.687-.23-22.084c-.459-3.398-3.214-13.166-7.578-18.9-4.364-5.733-8.335-9.152-8.335-9.152zm-3.89 29.317" />
  </g>
);
Hair3Bg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair3Bg;
