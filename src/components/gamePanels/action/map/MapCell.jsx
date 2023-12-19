import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { areaType } from '../../../../propTypeShapes';
import MappCellTitle from './MapCellTitle';
import { dummyImg, iconClock, iconLock } from '../../../../img';

const MapCell = ({ area, areaId, titleKey, handleAreaClick }) => {
  const {
    size,
    position: { x, y },
  } = area;
  const { formatMessage } = useIntl();
  const title = formatMessage({ id: titleKey });
  return (
    <div
      className="w-[10%] aspect-square absolute"
      style={{ top: `${y}%`, left: `${x}%`, width: `${size}%` }}
    >
      <div>
        <button
          type="button"
          title={title}
          onClick={() => handleAreaClick(areaId)}
          disabled={area.disabled}
        >
          <img
            src={area.imgSrc || dummyImg}
            alt={titleKey}
            className="w-full h-full absolute top-0 left-0"
          />
          {area.disabled && (
            <div className="w-4 h-4 absolute bottom-1 right-1 bg-primary rounded-full border-2 border-primary">
              <img src={area.disabledIcon === 'clock' ? iconClock : iconLock} alt="Timer" />
            </div>
          )}
        </button>
        <MappCellTitle x={x} y={y} title={title} />
      </div>
    </div>
  );
};

MapCell.propTypes = {
  areaId: PropTypes.string.isRequired,
  area: areaType.isRequired,
  handleAreaClick: PropTypes.func.isRequired,
  titleKey: PropTypes.string.isRequired,
};

export default MapCell;
