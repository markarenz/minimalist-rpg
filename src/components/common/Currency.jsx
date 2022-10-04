import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ value }) => {
  const bits = value.toFixed(2).split('.');
  return (
    <span>
      {'\u01c2'}
      {bits[0]}.<sup>{bits[1]}</sup>
    </span>
  );
};

Currency.propTypes = {
  value: PropTypes.number.isRequired,
};
export default Currency;
