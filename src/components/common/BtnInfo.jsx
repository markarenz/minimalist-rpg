import React from 'react';
import PropTypes from 'prop-types';
import { iconQuestion } from '../../img';

const BtnInfo = ({ handleClick }) => (
  <div className="bg-primary rounded-full text-gray-900 w-4 h-4 mx-1 p-1relatve -translate-y-2 inline-block scale-100 hover:scale-125 transition-scale duration-200">
    <button
      type="button"
      onClick={handleClick}
      className="absolute text-sm w-4 h-4 flex justify-center items-center"
    >
      <img src={iconQuestion} alt="info" className="w-3 h-3" />
    </button>
  </div>
);

BtnInfo.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BtnInfo;
