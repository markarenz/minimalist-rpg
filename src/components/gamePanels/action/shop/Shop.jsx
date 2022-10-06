import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Button, Currency } from '../../../index';
import { processTurn } from '../../../../helpers/gameHelpers';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';

const Shop = ({ gameData, gameState, setGameState, triggerPaneTransition }) => {
  const shopData = gameData.areas[gameState.location];
  const { parent, forSale } = shopData;
  const handleReturn = () => {
    triggerPaneTransition('global', () => {
      processTurn({ type: 'go', areaId: parent }, setGameState, gameData);
    });
  };
  const handlePurchase = (item) => {
    processTurn({ type: 'shop-buy', item }, setGameState, gameData);
  };
  const canAfford = (item) => gameState.money >= item.price;
  const canBuy = (id) => !(gameData.items[id].equippable && gameState.inventory[id]);
  return (
    <div className="p-4">
      <FormattedMessage id={shopData.descriptionKey} defaultMessage={shopData.descriptionKey} />

      <h2 className="uppercase text-2xl py-8">Items for Sale</h2>

      {forSale.map((i) => (
        <div className="grid grid-cols-12 mb-2" key={i.id}>
          <div className="col-span-12 sm:col-span-8">
            <FormattedMessage
              id={gameData.items[i.id]?.titleKey}
              defaultMessage={gameData.items[i]?.titleKey}
            />
          </div>
          <div className="col-span-12 sm:col-span-2">
            <Currency value={i.price} />
          </div>
          <div className="col-span-12 sm:col-span-2">
            {canBuy(i.id) ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() => handlePurchase(i)}
                disabled={!canAfford(i)}
              >
                BUY
              </Button>
            ) : (
              <div>Owned</div>
            )}
          </div>
        </div>
      ))}
      <div className="py-8 text-right">
        <Button onClick={handleReturn} color="secondary">
          Return
        </Button>
      </div>
    </div>
  );
};
Shop.propTypes = {
  gameData: gameDataType.isRequired,
  gameState: gameStateType.isRequired,
  setGameState: PropTypes.func.isRequired,
  triggerPaneTransition: PropTypes.func.isRequired,
};

export default Shop;
