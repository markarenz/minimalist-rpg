import React from 'react';
import PropTypes from 'prop-types';

const MapCellTitle = ({ title, x, y }) => {
  const titleBaseClass =
    'absolute z-10 w-[200%] text-center before:absolute before:bg-gray-700 before:w-4 before:h-4 before:rotate-45 leading-tight';
  // Default: Bottom Center
  let titlePosClassX = '-left-[50%] before:left-[calc(50%-0.5rem)]';
  let titlePosClassY = 'top-full before:bottom-[calc(100%-0.5rem)]';
  if (x < 10) {
    titlePosClassX = 'before:left-[calc(33%-0.5rem)]';
  }
  if (x > 90) {
    titlePosClassX = '-left-[50%] before:left-[calc(66%-0.5rem)]';
  }
  if (y > 90) {
    titlePosClassY = 'top-[-1.75rem] before:bottom-[calc(0%-0.5rem)]';
  }

  // ${titlePosClassX} ${titlePosClassY}
  return (
    <div className={`${titleBaseClass} ${titlePosClassX} ${titlePosClassY}`}>
      <div className="relative inline-block rounded-md bg-gray-700 text-xs text-white py-1 px-2">
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
