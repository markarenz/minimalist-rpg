import React from 'react';
import PropTypes from 'prop-types';

const FacialHair2 = ({ color }) => (
  <g
    id="facial-hair-2"
    fill={color}
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeOpacity="1"
    strokeWidth="0"
  >
    <path d="M50.639 68.217c-1.413 3.03-2.387 3.741.905 4.67 3.237.914 2.932-3.567 9.654-.284 2.755 1.345 7.206.777 8.427-3.77 1.28-4.77-3.161-5.927-3.161-5.927s4.198 4.567-.943 7.363c-2.525 1.372-6.08-6.437-14.882-2.052z" />
    <path
      d="M51.234 68.217c1.413 3.03 2.388 3.741-.905 4.67-3.236.914-2.932-3.567-9.654-.284-2.755 1.345-7.206.777-8.427-3.77-1.28-4.77 3.161-5.927 3.161-5.927s-4.198 4.567.944 7.363c2.524 1.372 6.079-6.437 14.881-2.052z"
      display="inline"
    />
  </g>
);

FacialHair2.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacialHair2;
