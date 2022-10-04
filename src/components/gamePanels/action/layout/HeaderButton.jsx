import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { headerButtonItemType } from '../../../../propTypeShapes';

const HeaderButton = ({ item, idx, activePanel, handelHeaderNavClick }) => {
  const getBtnClass = (i) =>
    activePanel === i.id
      ? 'opacity-100 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[4px]'
      : 'opacity-50';
  const getLblClass = (i) =>
    activePanel === i.id
      ? 'ml-2 lg:ml-4 pr-0 lg:pr-12 opacity-100 scale-x-100 max-w-96 translate-x-0'
      : 'opacity-0 pr-0 ml-0 scale-x-0 -translate-x-32 max-w-0 overflow-x-hidden';
  return (
    <button
      key={item.id}
      type="button"
      className={`${getBtnClass(item)} ${item.borderColor} ${
        item.bgColor
      } border-t-2 border-r-2 rounded-tr-lg p-4 relative ${
        idx === 0 ? 'pl-4 lg:pl-8' : 'rounded-tl-lg border-l-2'
      }`}
      onClick={() => handelHeaderNavClick(item.id)}
    >
      <div className="flex items-center">
        <img src={item.icon} alt={item.title} className="w-8 h-8 lg:w-12 lg:h-12 inline-block" />
        <div
          className={`text-lg lg:text-xl transition-all duration-200 text-white overflow-x-hidden ${getLblClass(
            item
          )}`}
        >
          <FormattedMessage id={`common__${item.id}`} />
        </div>
      </div>
    </button>
  );
};

HeaderButton.propTypes = {
  idx: PropTypes.number.isRequired,
  activePanel: PropTypes.string.isRequired,
  handelHeaderNavClick: PropTypes.func.isRequired,
  item: headerButtonItemType.isRequired,
};
export default HeaderButton;
