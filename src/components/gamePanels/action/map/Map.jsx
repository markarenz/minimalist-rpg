import React from 'react';
import PropTypes from 'prop-types';
import { evaluateConditions, getMapMaxW, processTurn } from '../../../../helpers/gameHelpers';
import { dummyImg, iconReturn } from '../../../../img';
import { BtnIcon, MapCell } from '../../../index';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';

const Map = ({ gameState, gameData, setGameState, isTransitioning, setIsTransitioning }) => {
  const { location } = gameState;
  const areaData = gameData.areas[location];
  const handleAreaClick = (areaId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      processTurn({ type: 'go', areaId }, setGameState, gameData);
    }, 310);
  };
  const activeAreaIds = Object.keys(areaData.areas).filter((k) =>
    evaluateConditions(areaData.areas[k].conditions, gameState)
  );
  const showGoBack = !!areaData.parent;
  const handleMapGoBack = () => {
    if (showGoBack) {
      handleAreaClick(areaData.parent);
    }
  };
  return (
    <div className="p-4">
      <div
        className={`${getMapMaxW(areaData)} ${
          isTransitioning ? 'opacity-0 blur-md' : 'opacity-100 blur-none'
        } transition-all duration-300 aspect-square mx-auto my-2 relative`}
      >
        <img
          src={dummyImg}
          alt="background"
          className="absolute top-0 left-0 w-full h-full opacity-50"
        />
        {activeAreaIds.map((k) => (
          <MapCell
            key={`map-tile-${k}`}
            areaId={k}
            area={areaData.areas[k]}
            titleKey={gameData.areas[k].titleKey}
            handleAreaClick={handleAreaClick}
          />
        ))}
        {showGoBack && (
          <div className="absolute -top-2 -left-2">
            <BtnIcon
              title="Randomize"
              icon={iconReturn}
              onClick={handleMapGoBack}
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Map.propTypes = {
  gameState: gameStateType.isRequired,
  gameData: gameDataType.isRequired,
  setGameState: PropTypes.func.isRequired,
  isTransitioning: PropTypes.bool.isRequired,
  setIsTransitioning: PropTypes.func.isRequired,
};
export default Map;
