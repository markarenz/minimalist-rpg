import React from 'react';
import PropTypes from 'prop-types';

const FacePaint10 = ({ color, color2 }) => (
  <g
    id="facepaint-10"
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeLinecap="round"
    strokeOpacity="1"
    strokeWidth="0"
    paintOrder="markers fill stroke"
  >
    <path
      fill={color}
      d="M40.402 73.845s3.116-1.35 5.4-.727c2.285.623 6.544.83 8.62-.312 2.078-1.142 5.402-.415 5.402-.415s-.727 7.79-8.517 7.893c-7.79.104-10.905-6.44-10.905-6.44z"
    />
    <path
      fill={color2}
      d="M29.185 47.36c-.026-3.042 1.662-4.154 4.154-4.466 2.493-.311 3.012-12.047 3.012-12.047s.52 10.593 3.012 11.736c2.493 1.142 4.065 1.353 4.155 5.297.089 3.944-3.636 1.87-4.466 3.53-.831 1.663-2.078 9.452-2.078 9.452s-1.038-7.79-3.115-9.347c-2.078-1.558-4.649-1.112-4.674-4.155z"
    />
    <path
      fill={color2}
      d="M70.334 47.36c.026-3.042-1.661-4.154-4.154-4.466-2.493-.311-3.012-12.047-3.012-12.047s-.52 10.593-3.012 11.736c-2.493 1.142-4.065 1.353-4.154 5.297-.09 3.944 3.635 1.87 4.466 3.53.83 1.663 2.077 9.452 2.077 9.452s1.038-7.79 3.116-9.347c2.077-1.558 4.648-1.112 4.673-4.155z"
    />
    <path
      fill={color}
      d="M69.255 61.486s-1.359-2.01-2.71 0c-1.23 1.828 2.919 4.933 2.919 4.933s4.369-3.336 2.544-5.116c-1.894-1.848-2.753.183-2.753.183z"
    />
  </g>
);
FacePaint10.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default FacePaint10;
