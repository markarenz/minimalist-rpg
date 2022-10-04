import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { GAME_SLUG } from '../data/constants';
import { SavedGameList, Button, ModalConfirm, FormattedMarkdown } from '../components/index';
import { dummyImg } from '../img';
import ModalNotify from '../components/common/ModalNotify';

const Splash = ({ handleStartClick, handleLoadClick, setShowCharLoadErr, showCharLoadErr }) => {
  const [charList, setCharList] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    const charListStr = localStorage.getItem(`${GAME_SLUG}__charList`);
    const newCharList = charListStr ? JSON.parse(charListStr) : [];
    setCharList(newCharList);
  }, []);
  const deleteCharConfirmOpen = (id) => {
    setShowDeleteModal(true);
    setSelectedChar(id);
  };
  const handleDeleteChar = () => {
    setShowDeleteModal(false);
    setSelectedChar(null);
    const newCharList = charList.filter((c) => c.id !== selectedChar);
    localStorage.setItem(`${GAME_SLUG}__charList`, JSON.stringify(newCharList));
    setCharList(newCharList);
    localStorage.removeItem(`${GAME_SLUG}__char__${selectedChar}`);
  };
  const handleDeleteCharCancel = () => {
    setShowDeleteModal(false);
    setSelectedChar(null);
  };
  const handleDismissErrorModal = () => {
    setShowCharLoadErr(false);
  };
  return (
    <div className="p-4">
      <div className="min-h-screen pt-8">
        <div className="w-full">
          <div className="max-w-lg mx-auto">
            <img src={dummyImg} alt="dummyImg" className="aspect-video" />
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <div className="">
              <FormattedMarkdown id="splash__intro" />
            </div>
          </div>

          {charList.length > 0 && (
            <SavedGameList
              charList={charList}
              handleLoadClick={handleLoadClick}
              deleteCharConfirmOpen={deleteCharConfirmOpen}
            />
          )}

          <div className="pt-4 text-center">
            <Button variant="primary" onClick={handleStartClick}>
              <FormattedMessage id="splash__start_new" />
            </Button>
          </div>
        </div>
      </div>
      <ModalConfirm
        isOpen={showDeleteModal}
        titleKey="splash__delete_char_confirm_title"
        handleCancel={handleDeleteCharCancel}
        handleOk={handleDeleteChar}
      >
        <p>
          <FormattedMessage id="splash__delete_char_confirm" />
        </p>
      </ModalConfirm>
      <ModalNotify
        isOpen={showCharLoadErr}
        titleKey="splash__char_load_error_title"
        handleOk={handleDismissErrorModal}
      >
        <p>
          <FormattedMessage id="splash__char_load_error" />
        </p>
      </ModalNotify>
    </div>
  );
};

Splash.defaultProps = {
  showCharLoadErr: false,
};

Splash.propTypes = {
  handleStartClick: PropTypes.func.isRequired,
  handleLoadClick: PropTypes.func.isRequired,
  setShowCharLoadErr: PropTypes.func.isRequired,
  showCharLoadErr: PropTypes.bool,
};

export default Splash;
