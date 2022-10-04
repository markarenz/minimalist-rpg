import React from 'react';
import PropTypes from 'prop-types';

const FacialHair6 = ({ color }) => (
  <g
    id="facial-hair-6"
    fill={color}
    fillOpacity="1"
    stroke="#050505"
    strokeDasharray="none"
    strokeLinecap="round"
    strokeWidth="0"
    display="inline"
    paintOrder="markers fill stroke"
  >
    <path d="M49.292 69.994s.13 1.835-.314 1.826c-.444-.009-10.595-.375-10.584-.93.01-.555 10.898-.896 10.898-.896z" />
    <path d="M50.61 70.144s.206 1.828.64 1.738c.435-.089 10.351-2.294 10.24-2.838-.112-.543-10.88 1.1-10.88 1.1z" />
  </g>
);

FacialHair6.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacialHair6;
