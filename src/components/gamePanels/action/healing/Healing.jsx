import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';
import { dummyImg } from '../../../../img';
import { processTurn, formatDateFromTurn } from '../../../../helpers/gameHelpers';
import { Button } from '../../../index';

const Healing = ({ gameState, gameData, setGameState, triggerPaneTransition }) => {
  const cooldownKey = `${gameState.location}__cooldown`;
  const cooldownTurn = gameState.flags[cooldownKey] || 0;
  const [healingState, setHealingState] = useState(
    gameState.turns >= cooldownTurn ? 'open' : 'closed'
  );
  const healingData = gameData.areas[gameState.location];
  const handleHealClick = () => {
    setHealingState('healed');
    processTurn({ type: 'healing' }, setGameState, gameData);
  };
  const handleReturn = () => {
    const { parent } = healingData;
    triggerPaneTransition('global', () => {
      processTurn({ type: 'go', areaId: parent }, setGameState, gameData);
    });
  };
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-3">
          <div>
            <img src={dummyImg} alt="healing" className="bg-red-500 w-full" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9">
          {healingState === 'closed' && (
            <div>
              <div>
                <FormattedMessage id={healingData.descriptionClosedKey} />
              </div>
              <div className="text-right">
                <span>
                  <Button variant="secondary" onClick={handleReturn}>
                    <FormattedMessage id="common__ok" />
                  </Button>
                </span>
              </div>
            </div>
          )}
          {healingState === 'open' && (
            <div>
              <div>
                <FormattedMessage id={healingData.descriptionKey} />
              </div>
              <div className="text-right mt-8">
                <span>
                  <Button variant="secondary" onClick={handleReturn}>
                    <FormattedMessage id="common__cancel" />
                  </Button>
                </span>
                <span className="ml-4">
                  <Button variant="primary" onClick={handleHealClick}>
                    <FormattedMessage id="common__heal" />
                  </Button>
                </span>
              </div>
            </div>
          )}
          {healingState === 'healed' && (
            <div>
              <div>
                <FormattedMessage
                  id="healing__complete_closure"
                  values={{ reopenDate: formatDateFromTurn(gameState.flags[cooldownKey]) }}
                />
              </div>
              <div className="text-right">
                <span>
                  <Button variant="secondary" onClick={handleReturn}>
                    <FormattedMessage id="common__ok" />
                  </Button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Healing.propTypes = {
  gameState: gameStateType.isRequired,
  gameData: gameDataType.isRequired,
  setGameState: PropTypes.func.isRequired,
  triggerPaneTransition: PropTypes.func.isRequired,
};

export default Healing;
