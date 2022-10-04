import React from 'react';
import PropTypes from 'prop-types';
import { iconClose } from '../../../../img';
import gameNavData from '../../../../data/gameNav';
import { HeaderButton } from '../../../index';

const Header = ({ isNarrow, activePanel, handelHeaderNavClick, handleReturnToSplash }) => {
  const filteredGameNav = gameNavData.filter((i) => !(!isNarrow && i.id === 'player'));
  const activePanelObj = gameNavData.find((i) => i.id === activePanel);
  return (
    <header className={`bg-gray-800 flex border-b-2 ${activePanelObj?.borderColor}`}>
      <div className="text-white text-xl flex-grow">
        {filteredGameNav.map((i, idx) => (
          <HeaderButton
            item={i}
            key={i.id}
            idx={idx}
            activePanel={activePanel}
            handelHeaderNavClick={handelHeaderNavClick}
          />
        ))}
      </div>
      <div className="flex items-center justify-end">
        <div className="px-4">
          <button
            type="button"
            onClick={handleReturnToSplash}
            className="w-8 h-8 transition-rotate duration-200 rotate-0 hover:rotate-90"
          >
            <img src={iconClose} alt="close" />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isNarrow: false,
  activePanel: 'action',
};
Header.propTypes = {
  isNarrow: PropTypes.bool,
  activePanel: PropTypes.string,
  handelHeaderNavClick: PropTypes.func.isRequired,
  handleReturnToSplash: PropTypes.func.isRequired,
};

export default Header;
