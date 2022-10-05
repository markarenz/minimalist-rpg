import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { treasureType, itemsType } from '../../../../propTypeShapes';

const TreasureList = ({ treasure, items, status }) => {
  console.log('TreasureList items', items);
  const getItemClass = () => (status === 'none' ? 'line-through' : '');
  return (
    <div>
      {treasure.map((k, idx) => (
        <div key={`treasure-${k}-${idx}`} className={getItemClass(idx)}>
          <FormattedMessage id={items[k]?.titleKey} defaultMessage={items[k]?.titleKey} />
        </div>
      ))}
    </div>
  );
};

TreasureList.propTypes = {
  treasure: treasureType.isRequired,
  items: itemsType.isRequired,
  status: PropTypes.string.isRequired,
};

export default TreasureList;
