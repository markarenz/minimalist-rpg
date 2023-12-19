import React from 'react';
import PropTypes from 'prop-types';

const MapCellTitle = ({ title, x, y }) => {
  const titleBaseClass = 'absolute z-10 w-[200%] text-center leading-tight';
  // Default: Bottom Center
  let titlePosClassX = '-left-[50%]';
  let titlePosClassY = 'top-full';
  if (x < 10) {
    titlePosClassX = '';
  }
  if (x > 90) {
    titlePosClassX = '-left-[50%]';
  }
  if (y > 90) {
    titlePosClassY = 'top-[-1.75rem]';
  }

  // ${titlePosClassX} ${titlePosClassY}
  return (
    <div className={`${titleBaseClass} ${titlePosClassX} ${titlePosClassY}`}>
      <div className="relative inline-block rounded-md text-xs text-gray-900 bg-gray-100/50 p-1">
        {title}
      </div>
    </div>
  );
};

MapCellTitle.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default MapCellTitle;
