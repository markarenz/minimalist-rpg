import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  iconEdit,
  iconStatsHealth,
  iconStatsAc,
  iconStatsExp,
  iconStatsLevel,
  iconStatsWeapon,
  iconStatsMoney,
  iconDate,
} from '../../../img';
import { CharPortrait, ModalAppearanceEdit, Currency, StatDisplay, Tooltip } from '../../index';
import { saveGame, getEquippedByArea, formatDateFromTurn } from '../../../helpers/gameHelpers';
import { gameDataType, gameStateType } from '../../../propTypeShapes';
import { CHAR_STATS } from '../../../data/constants';

const Player = ({ gameState, setGameState, isSidebar, gameData }) => {
  const [isEditingAppearance, setIsEditingAppearance] = useState(false);
  const [appearanceEdited, setAppearanceEdited] = useState(null);
  const { name, appearance, stats } = gameState;
  const gameDate = formatDateFromTurn(gameState.turns);
  const handleCancelEditAppearance = () => {
    window.scrollTo(0, 0);
    setIsEditingAppearance(false);
  };
  const handleEditAppearance = () => {
    setIsEditingAppearance(true);
  };
  const updateAppearance = (newAppearance) => {
    setAppearanceEdited(newAppearance);
  };
  const handleUpdateAppearance = () => {
    window.scrollTo(0, 0);
    setIsEditingAppearance(false);
    const newGameState = { ...gameState, appearance: appearanceEdited };
    saveGame(newGameState);
    setGameState(newGameState);
  };
  const currentWeapon = getEquippedByArea('weapon', gameState.inventory, gameData.items);
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className={`col-span-12 ${!isSidebar ? 'md:col-span-6' : ''}`}>
          <div className="relative w-full max-w-md mx-auto">
            <CharPortrait appearance={appearance} />
            <button
              type="button"
              onClick={handleEditAppearance}
              className="w-8 h-8 absolute -bottom-2 -left-2 bg-gray-900 duration-200 scale-100 hover:bg-primary border-2 border-gray-900 hover:scale-110 rounded-full p-1"
            >
              <img src={iconEdit} alt="edit" />
            </button>
          </div>
        </div>
        <div className={`${!isSidebar ? 'col-span-6' : 'col-span-12'}`}>
          <div className="text-2xl">
            <Tooltip tooltipKey={`classes__${gameState.playerClass}_desc`}>
              <span className="uppercase">{name}</span> (
              <FormattedMessage id={`classes__${gameState.playerClass}`} />)
            </Tooltip>
          </div>
          <div>
            <Tooltip tooltipKey="player_stats__date">
              <img src={iconDate} alt="Date" className="inline-block w-4 h-4" /> <i>{gameDate}</i>
            </Tooltip>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <div>
              <Tooltip tooltipKey="player_stats__health">
                <img src={iconStatsHealth} alt="Health" className="inline-block w-4 h-4" />{' '}
                <StatDisplay value={gameState.health} /> /{' '}
                <StatDisplay value={gameState.maxHealth} />
              </Tooltip>
            </div>
            <div>
              <Tooltip tooltipKey="player_stats__armor">
                <img src={iconStatsAc} alt="Armor" className="inline-block w-4 h-4" />{' '}
                <StatDisplay value={gameState.armorClass} />
              </Tooltip>
            </div>
            <div>
              <Tooltip tooltipKey="player_stats__level">
                <img src={iconStatsLevel} alt="Level" className="inline-block w-4 h-4" />{' '}
                <StatDisplay value={gameState.level} />
              </Tooltip>
            </div>
            <div>
              <Tooltip tooltipKey="player_stats__exp">
                <img src={iconStatsExp} alt="Experience" className="inline-block w-4 h-4" />{' '}
                <StatDisplay value={gameState.exp} />
              </Tooltip>
            </div>
            <div>
              <Tooltip tooltipKey="player_stats__weapon">
                <img src={iconStatsWeapon} alt="Weapon" className="inline-block w-4 h-4" />{' '}
                <FormattedMessage
                  id={currentWeapon?.titleKey || 'weapon__hands_title'}
                  defaultMessage={currentWeapon?.titleKey || 'weapon__hands_title'}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip tooltipKey="player_stats__money">
                <img src={iconStatsMoney} alt="Money" className="inline-block w-4 h-4" />{' '}
                <StatDisplay>
                  <Currency value={gameState.money} />
                </StatDisplay>
              </Tooltip>
            </div>
          </div>
          <div className="border-2 border-gray-100 p-2 mt-4 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CHAR_STATS.map((s) => (
              <div key={s}>
                <Tooltip tooltipKey={`char_create__label_stats__${s}_explainer`}>
                  <b>
                    <FormattedMessage id={`char_create__label_stats__${s}`} />:
                  </b>{' '}
                  <StatDisplay value={stats[s]} />
                </Tooltip>
              </div>
            ))}
          </div>
          <div className="py-4">
            <h3 className="text-lg uppercase">Effects</h3>
          </div>
        </div>
      </div>
      <ModalAppearanceEdit
        isOpen={isEditingAppearance}
        appearance={appearance}
        updateAppearance={updateAppearance}
        handleCancel={handleCancelEditAppearance}
        handleOk={handleUpdateAppearance}
      />
    </div>
  );
};

Player.defaultProps = {
  isSidebar: false,
};

Player.propTypes = {
  gameState: gameStateType.isRequired,
  isSidebar: PropTypes.bool,
  setGameState: PropTypes.func.isRequired,
  gameData: gameDataType.isRequired,
};
export default Player;
