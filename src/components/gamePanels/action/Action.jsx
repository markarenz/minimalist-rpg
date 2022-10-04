import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { processTurn } from '../../../helpers/gameHelpers';
import { Map, Dialog, Dungeon, Shop, Healing, TransitionWrap } from '../../index';
import { gameStateType, gameDataType } from '../../../propTypeShapes';

const Action = ({ gameState, gameData, setGameState, isTransitioning, setIsTransitioning }) => {
  const areaData = gameData.areas[gameState.location];
  const actionLabelKeys = {
    map: 'common__you_are_here',
    dialog: 'common__you_are_talking_with',
    shop: 'common__you_are_shoppning_here',
    dungeon: 'common__you_are_adventuring_here',
    healing: 'common__you_are_here',
  };
  const handleReturn = () => {
    const parentId = gameData.areas[gameState.location].parent;
    processTurn({ type: 'go', areaId: parentId }, setGameState, gameData);
  };
  return (
    <div>
      <div className="w-full py-2 px-4 bg-gray-900/50 text-right overflow-x-hidden">
        <span>&nbsp;</span>
        <TransitionWrap show={!isTransitioning} className="inline-block" anim="l2c2rFast">
          <span>
            <FormattedMessage
              id={actionLabelKeys[areaData?.type]}
              defaultMessage={actionLabelKeys[areaData?.type]}
            />{' '}
            <FormattedMessage id={areaData.titleKey} defaultMessage={areaData.titleKey} />
          </span>
        </TransitionWrap>
      </div>
      {areaData?.type === 'map' && (
        <Map
          gameData={gameData}
          gameState={gameState}
          setGameState={setGameState}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      )}
      {areaData?.type === 'dialog' && (
        <Dialog gameData={gameData} gameState={gameState} setGameState={setGameState} />
      )}
      {areaData?.type === 'dungeon' && (
        <Dungeon gameData={gameData} gameState={gameState} setGameState={setGameState} />
      )}
      {areaData?.type === 'shop' && (
        <Shop gameData={gameData} gameState={gameState} setGameState={setGameState} />
      )}
      {areaData?.type === 'healing' && (
        <Healing
          gameData={gameData}
          gameState={gameState}
          setGameState={setGameState}
          handleReturn={handleReturn}
        />
      )}
    </div>
  );
};

Action.propTypes = {
  gameState: gameStateType.isRequired,
  gameData: gameDataType.isRequired,
  setGameState: PropTypes.func.isRequired,
  isTransitioning: PropTypes.bool.isRequired,
  setIsTransitioning: PropTypes.func.isRequired,
};
export default Action;
