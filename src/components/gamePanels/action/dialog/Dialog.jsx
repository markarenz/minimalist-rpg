import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { dummyImg } from '../../../../img';
import {
  getDialogOpener,
  getDialogChoices,
  getDialogInventory,
  processTurn,
} from '../../../../helpers/gameHelpers';
import { gameDataType, gameStateType } from '../../../../propTypeShapes';

const Dialog = ({ gameState, gameData, setGameState, triggerPaneTransition }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const { location } = gameState;
  const dialogAreaData = gameData.areas[location];
  const currentDialog =
    gameState.currentDialog && gameData.dialog[gameState.currentDialog]
      ? gameState.currentDialog
      : `${location}__default`;
  const defaultOpener = getDialogOpener(dialogAreaData.openers, gameState);
  const dialogId = gameState.currentDialog ? currentDialog : defaultOpener;
  const dialogObj = gameData.dialog[dialogId];
  const choices = getDialogChoices(dialogObj.choices, gameState);
  const handleDialogTurn = (commands) => {
    const isExiting = commands.some((c) => c.type === 'exitDialog');
    if (isExiting) {
      triggerPaneTransition('global', () => {
        processTurn({ type: 'dialog', commands }, setGameState, gameData);
      });
    } else {
      processTurn({ type: 'dialog', commands }, setGameState, gameData);
    }
  };
  const dialogInventory = getDialogInventory(gameState, gameData);
  const handleTopicInventoryClick = (topic) => {
    if (!selectedTopics.some((t) => t.titleKey === topic.titleKey)) {
      setSelectedTopics((prevSelTopics) => [...prevSelTopics, topic]);
    }
  };
  const handleTopicTurn = (topicKey) => {
    processTurn({ type: 'dialog-topic', topicKey }, setGameState, gameData);
    // processTopicTurn(topicKey, location, setGameState, gameData);
    setSelectedTopics(selectedTopics.filter((t) => t.questionKey !== topicKey));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-3">
          <div>
            <img src={dummyImg} alt="background" className="bg-red-500 w-full" />
          </div>
          <div>VOCAB INVENTORY</div>
          {dialogInventory.map((v) => (
            <button
              type="button"
              key={v.titleKey}
              className="border-2 border-gray-100 p-2 text-lg rounded-md"
              onClick={() => handleTopicInventoryClick(v)}
            >
              <FormattedMessage id={v.titleKey} defaultMessage={v.titleKey} />
            </button>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gameNavActionLight p-4 ml-8 relative after:absolute after:bottom-0 after:-left-8 after:w-8 after:h-8 after:border-b-[2rem] after:border-b-gameNavActionLight after:border-l-[2rem] after:border-l-transparent">
            <FormattedMessage id={dialogObj.messageKey} defaultMessage={dialogObj.messageKey} />
          </div>

          <div id="dialog-choices" className="py-8">
            {choices.map((c) => (
              <div key={c.messageKey} className="pb-4">
                <button
                  type="button"
                  onClick={() => handleDialogTurn(c.commands)}
                  className="rounded-lg p-4 bg-gray-500 text-gray-900"
                >
                  {c.messageKey}
                </button>
              </div>
            ))}

            {selectedTopics.map((t) => (
              <div key={t.questionKey}>
                <button
                  type="button"
                  onClick={() => handleTopicTurn(t.questionKey)}
                  className="rounded-lg p-4 bg-gray-500 text-gray-900"
                >
                  <FormattedMessage
                    id={`dialog__${t.questionKey}`}
                    defaultMessage={`dialog__${t.questionKey}`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Dialog.defaltProps = {
  gameState: {
    currentDialog: null,
    car_fixing: 0,
  },
};

Dialog.propTypes = {
  gameState: gameStateType.isRequired,
  gameData: gameDataType.isRequired,
  setGameState: PropTypes.func.isRequired,
  triggerPaneTransition: PropTypes.func.isRequired,
};
export default Dialog;
