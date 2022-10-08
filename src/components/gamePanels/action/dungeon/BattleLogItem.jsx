import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { dungeonFightLogItemType } from '../../../../propTypeShapes';

const BattleLogItem = ({ logItem, enemyTitleKey }) => (
  <div className="transition-opacity duration-200 w-full">
    <FormattedMessage
      id={logItem.whoseTurn === 'player' ? 'battle__log__player' : enemyTitleKey}
      defaultMessage="error"
    />{' '}
    {logItem.whoseTurn === 'enemies' && <span>#{logItem.enemyIdx + 1}</span>}{' '}
    <FormattedMessage id="battle__log__attacks" />{' '}
    <FormattedMessage
      id={logItem.whoseTurn === 'player' ? enemyTitleKey : 'battle__log__player'}
      defaultMessage="error"
    />{' '}
    {logItem.whoseTurn === 'player' && <span>#{logItem.enemyIdx + 1}</span>}{' '}
    <FormattedMessage id="battle__log__with" />{' '}
    <FormattedMessage id={logItem.weapon} defaultMessage={logItem.weapon} />{' '}
    {logItem.isHit ? (
      <FormattedMessage
        id="battle__log__hits"
        values={{ dmg: logItem.dmg }}
        defaultMessage="error"
      />
    ) : (
      <FormattedMessage id="battle__log__misses" />
    )}
    {logItem.roundResult === 'death' && (
      <FormattedMessage
        id={
          logItem.whoseTurn === 'player'
            ? 'battle__log__result_enemy_dead'
            : 'battle__log__result_player_dead'
        }
        defaultMessage="error"
      />
    )}
    .
  </div>
);

BattleLogItem.propTypes = {
  enemyTitleKey: PropTypes.string.isRequired,
  logItem: dungeonFightLogItemType.isRequired,
};

export default BattleLogItem;
