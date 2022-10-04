import React from 'react';
import PropTypes from 'prop-types';
import FacialHair1 from './FacialHair1';
import FacialHair2 from './FacialHair2';
import FacialHair3 from './FacialHair3';
import FacialHair4 from './FacialHair4';
import FacialHair5 from './FacialHair5';
import FacialHair6 from './FacialHair6';
import FacialHair7 from './FacialHair7';

const FacialHair = ({ data }) => (
  <g id="char-facialHair-group">
    {data.style === 1 && <FacialHair1 color={data.color} />}
    {data.style === 2 && <FacialHair2 color={data.color} />}
    {data.style === 3 && <FacialHair3 color={data.color} />}
    {data.style === 4 && <FacialHair4 color={data.color} />}
    {data.style === 5 && <FacialHair5 color={data.color} />}
    {data.style === 6 && <FacialHair6 color={data.color} />}
    {data.style === 7 && <FacialHair7 color={data.color} />}
  </g>
);
FacialHair.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
export default FacialHair;
