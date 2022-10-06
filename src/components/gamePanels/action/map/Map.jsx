import React from 'react';
import PropTypes from 'prop-types';
import { evaluateConditions, getMapMaxW, processTurn } from '../../../../helpers/gameHelpers';
import { dummyImg, iconReturn } from '../../../../img';
import { BtnIcon, MapCell } from '../../../index';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';

const Map = ({ gameState, gameData, setGameState, triggerPaneTransition }) => {
  const { location } = gameState;
  const areaData = gameData.areas[location];
  const handleAreaClick = (areaId) => {
    const isLocal = gameData.areas[areaId].type === 'map';
    triggerPaneTransition(isLocal ? 'local' : 'global', () => {
      processTurn({ type: 'go', areaId }, setGameState, gameData);
    });
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
      <div className={`${getMapMaxW(areaData)} aspect-square mx-auto my-2 relative`}>
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
  triggerPaneTransition: PropTypes.func.isRequired,
};
export default Map;
