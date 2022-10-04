import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, BtnIcon } from '../index';
import { iconClose } from '../../img';

const SavedGameList = ({ charList, deleteCharConfirmOpen, handleLoadClick }) => (
  <div className="max-w-2xl mx-auto mt-8 border-2 border-gray-300 rounded-lg p-2">
    {charList
      .sort((a, b) => {
        if (a.saveDate > b.saveDate) {
          return -1;
        }
        if (a.saveDate < b.saveDate) {
          return 1;
        }
        return 0;
      })
      .map((c, idx) => (
        <div key={c.id} className={`grid grid-cols-10 ${idx < charList.length - 1 ? 'mb-2' : ''}`}>
          <div className="col-span-2">
            <Button size="small" variant="secondary" onClick={() => handleLoadClick(c.id)}>
              <FormattedMessage id="common__continue" />
            </Button>
          </div>
          <div className="col-span-2 px-2">{c.name.toUpperCase()}</div>
          <div className="col-span-2 px-2">
            <span>
              <FormattedMessage id="common__level" /> {c.level}{' '}
              <FormattedMessage
                id={`classes__${c.playerClass}`}
                defaultMessage={`classes__${c.playerClass}`}
              />
            </span>
          </div>
          <div className="col-span-3 px-2">{new Date(c.saveDate).toLocaleString()}</div>
          <div>
            <span className="[l-4 justify-end flex items-center">
              <BtnIcon
                title="Delete"
                icon={iconClose}
                onClick={() => deleteCharConfirmOpen(c.id)}
                color="danger"
                size="sm"
              />
            </span>
          </div>
        </div>
      ))}
  </div>
);

SavedGameList.defaultProps = {
  charList: [],
};

SavedGameList.propTypes = {
  charList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      playerClass: PropTypes.string.isRequired,
      saveDate: PropTypes.string.isRequired,
    })
  ),
  deleteCharConfirmOpen: PropTypes.func.isRequired,
  handleLoadClick: PropTypes.func.isRequired,
};
export default SavedGameList;
