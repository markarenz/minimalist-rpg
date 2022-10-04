import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { processTurn, getEnemiesForDungeonFloor } from '../../../../helpers/gameHelpers';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';
import { dummyImg } from '../../../../img';
import { Button, TreasureList } from '../../../index';

const Dungeon = ({ gameState, gameData, setGameState }) => {
  const canDungeon = gameState.health > 1;
  const initDungeonState = { stage: canDungeon ? 'intro' : 'too-injured', floor: 0, treasure: [] };
  const [dungeonState, setDungeonState] = useState(
    gameState.dungeonState ? gameState.dungeonState : initDungeonState
  );
  const dungeonData = gameData.areas[gameState.location];
  const { stage, treasure } = dungeonState;
  const handleDungeonExit = () => {
    const parentId = dungeonData.parent;
    if (parentId) {
      processTurn(
        { type: 'dungeon-exit', areaId: parentId, treasure, canDungeon },
        setGameState,
        gameData
      );
      setDungeonState(initDungeonState);
    }
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
    <div className="p-4">
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <img src={dummyImg} alt={imgAlt} />
          {/* TODO: set img src based on either dungeon or enemy img src */}
          {/* TODO: Add badge for multiple copies of enemy */}
          <div>Treasure:</div>
          <TreasureList treasure={treasure} items={gameData.items} status={treasureStatus} />
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
                {/* <p>
                  You have a three options. If you choose VIOLENCE, you risk death for a chance at
                  treasure and experience. If you choose to CHARM the entity, you have a chance of
                  talking your way out of the fight and sharing with a portion of their loot. If
                  your CHARM attempt fails, the enemy may choose to attack and will get the
                  initiative. You can choose to FLEE and forfeit 3/4 of all treasure you have
                  accumulated in the dungeon so far in exchange for your life. Choose wisely
                  adventurer.
                </p> */}
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
              <div className="text-2xl">
                <FormattedMessage
                  id={`battle__${dungeonState.result}__title`}
                  defaultMessage={`battle__${dungeonState.result}__title`}
                />
              </div>
              <div className="pb-4">
                {dungeonState?.fightLog?.map((l, idx) => (
                  <div key={`fightLog-${dungeonState.floor}-${l.round}-${idx}`}>
                    <FormattedMessage
                      id={l.whoseTurn === 'player' ? 'battle__log__player' : 'battle__log__enemy'}
                      defaultMessage="error"
                    />{' '}
                    <FormattedMessage id="battle__log__attacks" />{' '}
                    <FormattedMessage id={l.weapon} defaultMessage={l.weapon} />{' '}
                    {l.isHit ? (
                      <FormattedMessage
                        id="battle__log__hits"
                        values={{ dmg: l.dmg }}
                        defaultMessage="error"
                      />
                    ) : (
                      <FormattedMessage id="battle__log__misses" />
                    )}
                    {l.roundResult === 'death' && (
                      <FormattedMessage
                        id={
                          l.whoseTurn === 'player'
                            ? 'battle__log__result_enemy_dead'
                            : 'battle__log__result_player_dead'
                        }
                        defaultMessage="error"
                      />
                    )}
                    .
                  </div>
                ))}
                {!canDungeon && (
                  <div>
                    <FormattedMessage id="dungeon__too_injured_continue" />
                  </div>
                )}
              </div>
              <div className="text-2xl">
                <FormattedMessage id="battle__loot__title" />
              </div>
            </div>
          )}
          {['intro', 'result'].includes(stage) && (
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
  );
};

Dungeon.propTypes = {
  gameData: gameDataType.isRequired,
  gameState: gameStateType.isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Dungeon;
