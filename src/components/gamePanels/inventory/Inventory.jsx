import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../index';
import { gameDataType, gameStateType } from '../../../propTypeShapes';
import { ITEM_CATEGORIES } from '../../../data/constants';
import { processTurn } from '../../../helpers/gameHelpers';

const Inventory = ({ gameData, gameState, setGameState }) => {
  const getInvKeysForCat = (c) =>
    Object.keys(gameState.inventory).filter((k) => gameData.items[k].category === c);
  const handleEquipToggle = (itemId) => {
    processTurn({ type: 'toggle-equip', itemId }, setGameState, gameData);
  };
  const handleSell = (itemId) => {
    processTurn({ type: 'shop-sell', itemId }, setGameState, gameData);
  };
  const handleUseItem = (itemId) => {
    processTurn(
      { type: 'inventory-use', itemId, commands: gameData.items[itemId].commands },
      setGameState,
      gameData
    );
  };
  return (
    <div className="p-4">
      {ITEM_CATEGORIES.map((c) => (
        <div className="mb-8" key={c}>
          <h2 className="text-2xl uppercase">
            <FormattedMessage
              id={`item_categories__${c}_title`}
              defaultMessage={`item_categories__${c}_title`}
            />
          </h2>
          {getInvKeysForCat(c)?.map((k) => (
            <div key={k} className="py-2">
              <FormattedMessage
                id={gameData.items[k].titleKey}
                defaultMessage={gameData.items[k].titleKey}
              />{' '}
              {gameState.inventory[k]?.count > 1 && <span>x{gameState.inventory[k]?.count}</span>}
              {gameData.items[k].equippable && (
                <div className="inline-block ml-4">
                  <Button size="small" variant="primary" onClick={() => handleEquipToggle(k)}>
                    <FormattedMessage
                      id={gameState.inventory[k].equipped ? 'common__unequip' : 'common__equip'}
                    />
                  </Button>
                </div>
              )}
              {gameData.items[k].usable && (
                <div className="inline-block ml-4">
                  <Button size="small" variant="primary" onClick={() => handleUseItem(k)}>
                    <FormattedMessage id="common__use" />
                  </Button>
                </div>
              )}
              {gameData.areas[gameState.location].type === 'shop' &&
                !gameState.inventory[k].equipped && (
                  <div className="inline-block ml-4">
                    <Button size="small" variant="outlined" onClick={() => handleSell(k)}>
                      <FormattedMessage id="common__sell" />
                    </Button>
                  </div>
                )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Inventory.propTypes = {
  gameData: gameDataType.isRequired,
  gameState: gameStateType.isRequired,
  setGameState: PropTypes.func.isRequired,
};
export default Inventory;
