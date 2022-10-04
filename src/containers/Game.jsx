import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { setSizes } from '../helpers/gameHelpers';
import gameData from '../data/gameData';
import { GAME_PANELS } from '../data/constants';
import { Action, Inventory, Player, Header } from '../components';
import gameNavData from '../data/gameNav';
import getBreakpoint from '../helpers/getBreakpoint';

const Game = ({ initCharObj, handleReturnToSplash }) => {
  const [activePanel, setActivePanel] = useState(GAME_PANELS.ACTION);
  const [gameState, setGameState] = useState(initCharObj);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // eslint-disable-next-line
  const [breakpoint, setBreakpoint] = useState(null);
  const [isNarrow, setIsNarrow] = useState(null);
  const handelHeaderNavClick = (newActivePanelId) => {
    window.scrollTo(0, 0);
    setActivePanel(newActivePanelId);
  };

  const gameNavCurrent = gameNavData.find((i) => i.id === activePanel);
  const activePanelRef = useRef(GAME_PANELS.ACTION);
  useEffect(() => {
    activePanelRef.current = activePanel;
  }, [activePanel]);
  const handleWindowResize = () => {
    setSizes({
      setBreakpoint,
      setIsNarrow,
      getBreakpoint,
      activePanel: activePanelRef.current,
      setActivePanel,
    });
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize, false);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className={`w-full ${gameNavCurrent.bgColor} min-h-[calc(100vh-200px)]`}>
      <Header
        isNarrow={isNarrow}
        activePanel={activePanel}
        handelHeaderNavClick={handelHeaderNavClick}
        handleReturnToSplash={handleReturnToSplash}
      />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 min-h-screen">
          {activePanel === GAME_PANELS.ACTION && (
            <Action
              gameData={gameData}
              gameState={gameState}
              setGameState={setGameState}
              isTransitioning={isTransitioning}
              setIsTransitioning={setIsTransitioning}
            />
          )}
          {activePanel === GAME_PANELS.INVENTORY && (
            <Inventory gameData={gameData} gameState={gameState} setGameState={setGameState} />
          )}
          {activePanel === GAME_PANELS.PLAYER && (
            <Player gameState={gameState} setGameState={setGameState} gameData={gameData} />
          )}
        </div>

        <div
          className={`col-span-3 min-h-screen bg-gray-700 border-l-2 ${gameNavCurrent.borderColor} shadow-xl hidden lg:block`}
        >
          <Player gameState={gameState} setGameState={setGameState} gameData={gameData} isSidebar />
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  initCharObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleReturnToSplash: PropTypes.func.isRequired,
};

export default Game;
