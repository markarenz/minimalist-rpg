import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { BtnColor, BtnArrow } from '../index';

const AppearanceSection = ({ appearanceKey, data, handleStyleChange, handleColorChange }) => (
  <div className="grid grid-cols-12 py-2">
    <h3 className="col-span-5 flex justify-start items-center">
      <FormattedMessage
        id={`char_create__label_${appearanceKey}`}
        defaultMessage={`char_create__label_${appearanceKey}`}
      />
    </h3>
    <div className="col-span-2 flex justify-center items-center">
      <BtnColor
        colorObj={data}
        disabled={data.style === 0}
        handleClick={() => handleColorChange(appearanceKey)}
      />
    </div>
    <div className="col-span-5 flex justify-end items-center">
      <span>
        <BtnArrow handleClick={() => handleStyleChange(appearanceKey, -1)} variant="prev" />
      </span>
      <span className="ml-2">
        <BtnArrow handleClick={() => handleStyleChange(appearanceKey, 1)} variant="next" />
      </span>
    </div>
  </div>
);

AppearanceSection.defaultProps = {
  data: {
    color2: null,
  },
};
AppearanceSection.propTypes = {
  appearanceKey: PropTypes.string.isRequired,
  data: PropTypes.shape({
    style: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string,
  }),
  handleStyleChange: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
};

export default AppearanceSection;
