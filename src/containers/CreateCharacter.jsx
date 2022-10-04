import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  getIsNewCharFormValid,
  getNameInput,
  getInitStats,
} from '../helpers/charCreateEditHelpers';
import { Button, AppearanceEditor, BtnInfo, ModalInfo } from '../components';
import { dummyImg } from '../img';
import { CHAR_CLASSES, CHAR_STATS } from '../data/constants';

const CreateCharacter = ({ handleReturnToSplash, handleSaveCharAndStart }) => {
  const [newChar, setNewChar] = useState({
    name: '',
    class: '',
    stats: getInitStats(),
    appearance: {},
  });
  const [infoModalState, setInfoModalState] = useState({
    show: false,
    titleKey: '',
    messageKey: '',
  });
  const updateAppearance = (newAppearance) => {
    setNewChar((prevChar) => ({
      ...prevChar,
      appearance: newAppearance,
    }));
  };
  const handleFormChange = (e) => {
    setNewChar((prevChar) => ({
      ...prevChar,
      [e.target.name]: getNameInput(e.target.value),
    }));
  };
  const isFormValid = getIsNewCharFormValid(newChar);
  const handleSelectClass = (c) => {
    setNewChar((prevChar) => ({
      ...prevChar,
      playerClass: c,
    }));
  };
  const handleCharSave = () => {
    handleSaveCharAndStart(newChar);
  };
  const handleInfoModalClose = () => {
    setInfoModalState((prevState) => ({
      ...prevState,
      show: false,
    }));
  };
  const handleStatInfoClick = (id) => {
    setInfoModalState({
      show: true,
      titleKey: `char_create__label_stats__${id}`,
      messageKey: `char_create__label_stats__${id}_explainer`,
    });
  };
  return (
    <div className="p-4 bg-gray-900 min-h-[calc(100vh-90px)]">
      <div className="pb-8 max-w-3xl mx-auto">
        <h2 className="text-4xl">
          <FormattedMessage id="char_create__title" />
        </h2>
        <p>
          <FormattedMessage id="char_create__intro" />
        </p>

        <div className="">
          <div>
            <div className="py-4">
              <div className="text-xl uppercase">
                <span>
                  <FormattedMessage id="char_create__label_name" />
                </span>
              </div>
              <input
                name="name"
                type="text"
                id="char-name"
                onChange={handleFormChange}
                value={newChar?.name.toUpperCase()}
                className="mt-2 border-2 border-white p-2 bg-transparent outline-none rounded-md w-full focus:bg-gray-100/10 focus:border-primary"
              />
            </div>

            <div className="py-4">
              <div className="text-xl uppercase">
                <span>
                  <FormattedMessage id="char_create__label_stats" />
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-2">
                {CHAR_STATS.map((s) => (
                  <div className="text-lg" key={s}>
                    <FormattedMessage id={`char_create__label_stats__${s}`} />: {newChar.stats[s]}
                    <BtnInfo handleClick={() => handleStatInfoClick(s)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="py-4">
              <div className="text-xl uppercase">
                <span>
                  <FormattedMessage id="char_create__label_class" />
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                {CHAR_CLASSES.map((c) => (
                  <div key={c}>
                    <button
                      type="button"
                      className="relative"
                      aria-label={c}
                      onClick={() => handleSelectClass(c)}
                    >
                      <img
                        src={dummyImg}
                        alt={c.toUpperCase()}
                        className={`w-full aspect-square transition-all duration-200 ${
                          newChar.playerClass === c ? 'opacity-100' : 'opacity-50'
                        }`}
                      />
                      <div
                        className={`absolute -bottom-2 -left-2 bg-green-700 text-white p-1 w-12 h-12 rounded-full flex items-center justify-center text-3xl border-2 border-gray-900 duration-300 transition-scale ${
                          newChar.playerClass === c ? 'scale-100' : 'scale-0'
                        }`}
                      >
                        {'\u2713'}
                      </div>
                    </button>
                    <h3 className="text-xl mt-4">
                      <FormattedMessage id={`classes__${c}`} />
                    </h3>
                    <p className="pt-4">
                      <FormattedMessage id={`classes__${c}_desc`} />
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-4">
              <div className="text-xl uppercase">
                <span>
                  <FormattedMessage id="char_create__label_appearance" />
                </span>
              </div>
              <div className="mt-4">
                <AppearanceEditor
                  initApperance={newChar?.appearance}
                  updateAppearance={updateAppearance}
                  mode="create"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 text-right">
          <span className="mr-4">
            <Button variant="secondary" onClick={handleReturnToSplash}>
              <FormattedMessage id="common__cancel" />
            </Button>
          </span>
          <Button variant="primary" disabled={!isFormValid} onClick={handleCharSave}>
            <FormattedMessage id="common__ok" />
          </Button>
        </div>
      </div>
      <ModalInfo info={infoModalState} handleOk={handleInfoModalClose} />
    </div>
  );
};

CreateCharacter.propTypes = {
  handleReturnToSplash: PropTypes.func.isRequired,
  handleSaveCharAndStart: PropTypes.func.isRequired,
};
export default CreateCharacter;
