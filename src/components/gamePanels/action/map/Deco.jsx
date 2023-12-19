import React from 'react';
import PropTypes from 'prop-types';

const Deco = ({ decoObj }) => {
  const {
    size,
    position: { x, y },
  } = decoObj;
  return (
    <div
      className="aspect-square absolute"
      style={{ top: `${y}%`, left: `${x}%`, width: `${size}%` }}
    >
      <img src={decoObj.imgSrc} alt="decoration" />
    </div>
  );
};

Deco.propTypes = {
  decoObj: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Deco;
