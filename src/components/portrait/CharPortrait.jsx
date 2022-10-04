import React from 'react';
import PropTypes from 'prop-types';
import carny from '../../img/classes/carny.jpg';
import { ClipDefs, FacePaint, Face, Head, FacialHair, Extras, HairBg, HairFg } from './elements';

const CharPortrait = ({ appearance }) => {
  const faceData = {
    outlines: appearance.outlines.color,
    eyes: appearance.eyes.color,
    brows: appearance.hair.color2,
  };
  const headData = {
    skin: appearance.skin.color,
    outlines: appearance.outlines.color,
  };
  return (
    <div className="w-full aspect-video border-2 border-gray-800 relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover"
        style={{ backgroundImage: `url(${carny})` }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
        className="w-full h-full relative"
      >
        <ClipDefs />
        <HairBg data={appearance.hair} />
        <Head data={headData} />
        <FacePaint data={appearance.facePaint} />
        <Face data={faceData} />
        <FacialHair data={appearance.facialHair} />
        <Extras data={appearance.extras} />
        <HairFg data={appearance.hair} />
      </svg>
    </div>
  );
};

CharPortrait.propTypes = {
  appearance: PropTypes.shape({
    skin: PropTypes.shape({
      color: PropTypes.string.isRequired,
    }).isRequired,
    eyes: PropTypes.shape({
      color: PropTypes.string.isRequired,
    }).isRequired,
    outlines: PropTypes.shape({
      color: PropTypes.string.isRequired,
    }).isRequired,
    hair: PropTypes.shape({
      style: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      color2: PropTypes.string.isRequired,
    }).isRequired,
    facePaint: PropTypes.shape({
      style: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      color2: PropTypes.string.isRequired,
    }).isRequired,
    facialHair: PropTypes.shape({
      style: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
    extras: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default CharPortrait;
