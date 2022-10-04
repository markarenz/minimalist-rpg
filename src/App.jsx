import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Footer } from './components';
import { Splash, Game, CreateCharacter } from './containers';
import locales from './locale';
import { handleClickStartNew, getInitCharObj, initGameWithChar } from './helpers/appHelpers';
import { saveGame } from './helpers/gameHelpers';
import { APP_STATUSES } from './data/constants';

const App = () => {
  const [appStatus, setAppStatus] = useState(APP_STATUSES.SPLASH);
  const [selectedChar, setSelectedChar] = useState(null);
  const browserLocale = navigator.language || navigator.userLanguage;
  const [browserLang] = browserLocale.split('-');
  const [selectedLang, setSelectedLang] = useState(browserLang || 'en');
  const [showCharLoadErr, setShowCharLoadErr] = useState(false);

  const handleSaveCharAndStart = (charObj) => {
    window.scrollTo(0, 0);
    const initCharObj = initGameWithChar(charObj);
    setSelectedChar(initCharObj);
    setAppStatus(APP_STATUSES.GAME);
    saveGame(initCharObj);
  };
  const updateLang = (newLang) => {
    setSelectedLang(newLang);
  };
  const handleLoadClick = (charId) => {
    window.scrollTo(0, 0);
    const charObj = getInitCharObj(charId);
    if (charObj) {
      setSelectedChar(charObj);
      setAppStatus(APP_STATUSES.GAME);
    } else {
      setShowCharLoadErr(true);
    }
  };
  const handleReturnToSplash = () => {
    window.scrollTo(0, 0);
    setAppStatus(APP_STATUSES.SPLASH);
  };
  return (
    <IntlProvider messages={locales[selectedLang]} locale={selectedLang} defaultLocale="en">
      <div className="flex flex-col">
        {appStatus === APP_STATUSES.SPLASH && (
          <Splash
            handleStartClick={() => handleClickStartNew(setAppStatus)}
            handleLoadClick={handleLoadClick}
            setShowCharLoadErr={setShowCharLoadErr}
            showCharLoadErr={showCharLoadErr}
          />
        )}
        {appStatus === APP_STATUSES.CREATE_CHARACTER && (
          <CreateCharacter
            handleReturnToSplash={handleReturnToSplash}
            handleSaveCharAndStart={handleSaveCharAndStart}
          />
        )}
        {appStatus === APP_STATUSES.GAME && (
          <Game initCharObj={selectedChar} handleReturnToSplash={handleReturnToSplash} />
        )}

        <Footer updateLang={updateLang} selectedLang={selectedLang} />
      </div>
    </IntlProvider>
  );
};

export default App;
