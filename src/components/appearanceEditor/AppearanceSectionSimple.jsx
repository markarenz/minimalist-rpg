import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { BtnColor } from '../index';

const AppearanceSectionSimple = ({ handleColorChange, appearanceKey, colorObj }) => (
  <div className="grid grid-cols-12 py-2">
    <h3 className="col-span-5 flex justify-start items-center">
      <FormattedMessage
        id={`char_create__label_${appearanceKey}`}
        defaultMessage={`char_create__label_${appearanceKey}`}
      />
    </h3>
    <div className="col-span-2 flex justify-center items-center">
      <BtnColor colorObj={colorObj} handleClick={() => handleColorChange(appearanceKey)} />
    </div>
    <div className="col-span-5" />
  </div>
);

AppearanceSectionSimple.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  appearanceKey: PropTypes.string.isRequired,
  colorObj: PropTypes.shape({
    color: PropTypes.string.isRequired,
    color2: PropTypes.string,
  }).isRequired,
};

export default AppearanceSectionSimple;
