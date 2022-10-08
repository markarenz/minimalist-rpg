import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { processTurn, getEnemiesForDungeonFloor } from '../../../../helpers/gameHelpers';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';
import { dummyImg } from '../../../../img';
import { Button, TreasureList, ActionTransitionWrap, Battle } from '../../../index';

const Dungeon = ({
  gameState,
  gameData,
  setGameState,
  triggerPaneTransition,
  navLockout,
  setNavLockout,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const canDungeon = gameState.health > 1;
  const initDungeonState = { stage: canDungeon ? 'intro' : 'too-injured', floor: 0, treasure: [] };
  const [dungeonState, setDungeonState] = useState(
    gameState.dungeonState ? gameState.dungeonState : initDungeonState
  );
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const dungeonData = gameData.areas[gameState.location];
  const { stage, treasure } = dungeonState;
  const handleDungeonExit = () => {
    setIsVisible(false);
    triggerPaneTransition('global', () => {
      setIsVisible(true);
      const parentId = dungeonData.parent;
      if (parentId) {
        processTurn(
          { type: 'dungeon-exit', areaId: parentId, treasure, canDungeon },
          setGameState,
          gameData
        );
        setDungeonState(initDungeonState);
      }
    });
  };
  const handleAttack = () => {
    processTurn({ type: 'dungeon-attack', dungeonState, setDungeonState }, setGameState, gameData);
  };
  const handleCharm = () => {
    // eslint-disable-next-line
    console.log('charm');
  };
  const handleFlee = () => {
    const parentId = dungeonData.parent;
    if (parentId) {
      processTurn({ type: 'go', areaId: parentId }, setGameState, gameData);
      setDungeonState(initDungeonState);
    }
  };
  const handleDelve = () => {
    const enemies = getEnemiesForDungeonFloor(
      dungeonState.floor || 1,
      dungeonState.level || 1,
      gameData.enemies
    );
    const newDungeonState = {
      ...dungeonState,
      floor: dungeonState.floor + 1,
      stage: 'enemy',
      enemies,
    };
    setDungeonState(newDungeonState);
    setGameState((prevState) => ({
      ...prevState,
      dungeonState: newDungeonState,
    }));
  };
  const imgAlt = dungeonState?.enemies?.length > 0 ? dungeonState.enemies[0].titleKey : 'Dungeon';
  const treasureStatus = !canDungeon ? 'none' : 'full';
  return (
    <ActionTransitionWrap show={isVisible}>
      <div className="p-4">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <img src={dummyImg} alt={imgAlt} />
            {/* TODO: set img src based on either dungeon or enemy img src */}
            {/* TODO: Add badge for multiple copies of enemy */}
            <div>Treasure:</div>
            {treasure.length > 0 && (
              <TreasureList treasure={treasure} items={gameData.items} status={treasureStatus} />
            )}
          </div>
          <div className="col-span-12 sm:col-span-9">
            {stage === 'too-injured' && (
              <div>
                <div>
                  <FormattedMessage id="dungeon__too_injured" />
                </div>
                <div className="text-right">
                  <span>
                    <Button onClick={handleDungeonExit} variant="secondary">
                      Exit
                    </Button>
                  </span>
                </div>
              </div>
            )}
            {stage === 'intro' && (
              <div>
                <FormattedMessage
                  id={dungeonData.descriptionKey}
                  defaultMessage={dungeonData.descriptionKey}
                />
              </div>
            )}
            {['enemy', 'result'].includes(stage) && (
              <Battle
                dungeonState={dungeonState}
                gameData={gameData}
                navLockout={navLockout}
                setNavLockout={setNavLockout}
              />
            )}
            {stage === 'enemy' && (
              <div>
                <div className="pb-4">
                  <div>
                    <div>
                      <FormattedMessage id="common__floor" />: {dungeonState.floor}
                    </div>
                    <FormattedMessage id="common__enemy" />:{' '}
                    <span>
                      <FormattedMessage
                        id={dungeonState.enemies[0].titleKey}
                        defaultMessage={dungeonState.enemies[0].titleKey}
                      />{' '}
                      x {dungeonState.enemies.length}
                    </span>
                    <p className="pt-4 italic">
                      <FormattedMessage
                        id={dungeonState.enemies[0].descriptionKey}
                        defaultMessage="Enemy"
                      />
                    </p>
                  </div>
                </div>

                <div className="text-right pt-4">
                  <span className="mr-2">
                    <Button variant="outlined" onClick={handleFlee}>
                      Flee
                    </Button>
                  </span>
                  <span className="mr-2">
                    <Button variant="outlined" onClick={handleCharm}>
                      Charm
                    </Button>
                  </span>
                  <span>
                    <Button variant="outlined" onClick={handleAttack}>
                      Violence
                    </Button>
                  </span>
                </div>
              </div>
            )}
            {stage === 'result' && (
              <div>
                {/* <div className="text-2xl">
                  <FormattedMessage id="battle__loot__title" />
                </div> */}
              </div>
            )}
            {['intro', 'result'].includes(stage) && !navLockout && (
              <div className="text-right mt-8">
                <span className="mr-2">
                  <Button onClick={handleDungeonExit} variant="secondary">
                    Exit
                  </Button>
                </span>

                <span>
                  <Button onClick={handleDelve} variant="primary" disabled={!canDungeon}>
                    Delve
                  </Button>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ActionTransitionWrap>
  );
};

Dungeon.propTypes = {
  gameData: gameDataType.isRequired,
  gameState: gameStateType.isRequired,
  setGameState: PropTypes.func.isRequired,
  triggerPaneTransition: PropTypes.func.isRequired,
  navLockout: PropTypes.bool.isRequired,
  setNavLockout: PropTypes.func.isRequired,
};

export default Dungeon;
