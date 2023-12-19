import React, { useState, useEffect } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { gameDataType, dungeonStateType } from '../../../../propTypeShapes';
import { enemiesRat, weaponsBite, weaponsButterKnife } from '../../../../img';
import { BattleLogItem } from '../../../index';
import { ENEMY_BATTLE_POS } from '../../../../data/constants';

const Battle = ({ dungeonState, gameData, setNavLockout }) => {
  const { enemies, playerHealth } = dungeonState;
  const [battleState, setBattleState] = useState({});
  const { formatMessage } = useIntl();
  const oddEven = enemies.length % 2 === 0 ? 'even' : 'odd';
  const canDungeon = playerHealth > 1;
  const getEnemyName = (id) =>
    formatMessage({
      id: gameData.enemies[id].titleKey,
      defaultMessage: gameData.enemies[id].titleKey,
    });

  const displayBattle = (log) => {
    setNavLockout(true);
    log.forEach((i, idx) => {
      setTimeout(() => {
        setBattleState(i);
      }, 500 * idx);
    });
    setTimeout(() => {
      setBattleState({
        ...log[log.length - 1],
        whoseTurn: '',
      });
      setNavLockout(false);
    }, 500 * log.length);
  };
  useEffect(() => {
    const log = dungeonState?.fightLog;
    if (log) {
      displayBattle(log);
    }
  }, [dungeonState?.fightLog]);
  const getEnemyDeathClass = (idx) =>
    battleState.enemies && battleState.enemies[idx] === 0
      ? 'rotate-90 opacity-50'
      : 'rotate-0 opacity-100';
  const getEnemyClass = (idx) =>
    battleState.enemyIdx === idx && !(battleState.enemies && battleState.enemies[idx] === 0)
      ? 'scale-110 -translate-y-1'
      : 'scale-100 translate-y-0';
  const getEnemyWeaponClass = (idx) =>
    battleState.whoseTurn === 'enemies' && battleState.enemyIdx === idx
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-0';

  const getPlayerWeaponClass = () =>
    battleState.whoseTurn === 'player'
      ? 'opacity-100 scale-100 rotate-45'
      : 'opacity-0 scale-50 -rotate-45';
  const getPlayerDmg = () =>
    battleState.whoseTurn === 'enemies' && battleState.isHit ? battleState.dmg * -1 : '';
  const getPlayerDmgClass = () =>
    battleState.whoseTurn === 'enemies' && battleState.isHit ? 'animate-damageText' : '';
  const getEnemyDmg = (idx) =>
    battleState.whoseTurn === 'player' && battleState.enemyIdx === idx ? battleState.dmg * -1 : '';
  const getEnemyDmgClass = (idx) =>
    battleState.whoseTurn === 'player' && battleState.enemyIdx === idx ? 'animate-damageText' : '';
  const battleComplete =
    dungeonState?.fightLog && battleState.logIdx === dungeonState.fightLog.length - 1;
  const getEnemyTitleKey = () =>
    gameData?.enemies[dungeonState?.fightLog[battleState?.logIdx]?.enemyType].titleKey;
  console.log('...h');
  return (
    <div>
      <div id="battle-stage" className="w-full relative">
        <div className="absolute left-0 bottom-0 w-full h-16">
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full opacity-80"
          >
            <polygon fill="#052748" points="0,100 20,20 80,20 100,100" />
          </svg>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gameNavAction" />
        </div>
        <div
          className={`absolute bottom-0 left-0 w-12 text-2xl font-bold text-red-500 ${getPlayerDmgClass()}`}
        >
          {getPlayerDmg()}
        </div>
        <div className="w-full h-24" />
        {enemies.map((e, idx) => (
          <div
            key={`${e.id}-${idx}`}
            className={`absolute w-[10%] aspect-square transition-all duration-200 ${getEnemyClass(
              idx
            )}`}
            style={{
              left: `${ENEMY_BATTLE_POS[oddEven][idx].x - 5}%`,
              bottom: `${ENEMY_BATTLE_POS[oddEven][idx].y + 5}%`,
              zIndex: ENEMY_BATTLE_POS[oddEven][idx].z,
            }}
          >
            <img
              src={enemiesRat}
              title={getEnemyName(e.id)}
              alt={getEnemyName(e.id)}
              className={`block aspect-square w-full transition-all duration-200 ${getEnemyDeathClass(
                idx
              )}`}
              // style={{ transform: `scale(${ENEMY_BATTLE_POS[oddEven][idx].s})` }}
            />
            <img
              src={weaponsBite}
              title="weapon"
              alt="weapon"
              className={`absolute -top-2 -left-2 w-4 h-4 bg-gray-200 rounded-full transition all duration-200 ${getEnemyWeaponClass(
                idx
              )}`}
            />
            <div
              className={`absolute bottom-0 left-[calc(50%-0.5rem)] text-sm text-red-500 font-bold ${getEnemyDmgClass(
                idx
              )}`}
            >
              {getEnemyDmg(idx)}
            </div>
          </div>
        ))}

        {battleState.enemies && (
          <div
            className="-bottom-4 z-10 absolute w-[10%] aspect-square"
            style={{ left: `${ENEMY_BATTLE_POS[oddEven][battleState.enemyIdx].x - 5}%` }}
          >
            <div className={`transition-all duration-200 ${getPlayerWeaponClass()}`}>
              <img src={weaponsButterKnife} alt="weapon" />
            </div>
          </div>
        )}
      </div>
      <div className="py-4 relative">
        {battleState?.logIdx && (
          <BattleLogItem
            dungeonState={dungeonState}
            logItem={dungeonState.fightLog[battleState.logIdx]}
            battleLogIdx={battleState.logIdx}
            enemyTitleKey={getEnemyTitleKey()}
          />
        )}
      </div>
      <div>
        {battleComplete && (
          <div>
            <div className="text-2xl">
              <FormattedMessage
                id={`battle__${dungeonState.result}__title`}
                defaultMessage={`battle__${dungeonState.result}__title`}
              />
            </div>
            {!canDungeon && (
              <div className="pb-4">
                <FormattedMessage id="dungeon__too_injured_continue" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Battle.propTypes = {
  dungeonState: dungeonStateType.isRequired,
  gameData: gameDataType.isRequired,
  setNavLockout: PropTypes.func.isRequired,
};

export default Battle;
