import React from 'react';
import PropTypes from 'prop-types';
import FacePaint1 from './FacePaint1';
import FacePaint2 from './FacePaint2';
import FacePaint3 from './FacePaint3';
import FacePaint4 from './FacePaint4';
import FacePaint5 from './FacePaint5';
import FacePaint6 from './FacePaint6';
import FacePaint7 from './FacePaint7';
import FacePaint8 from './FacePaint8';
import FacePaint9 from './FacePaint9';
import FacePaint10 from './FacePaint10';

const FacePaint = ({ data }) => (
  <g id="char-facePaint-group">
    {data.style === 1 && <FacePaint1 color={data.color} color2={data.color2} />}
    {data.style === 2 && <FacePaint2 color={data.color} color2={data.color2} />}
    {data.style === 3 && <FacePaint3 color={data.color} color2={data.color2} />}
    {data.style === 4 && <FacePaint4 color={data.color} color2={data.color2} />}
    {data.style === 5 && <FacePaint5 color={data.color} color2={data.color2} />}
    {data.style === 6 && <FacePaint6 color={data.color} color2={data.color2} />}
    {data.style === 7 && <FacePaint7 color={data.color} color2={data.color2} />}
    {data.style === 8 && <FacePaint8 color={data.color} color2={data.color2} />}
    {data.style === 9 && <FacePaint9 color={data.color} color2={data.color2} />}
    {data.style === 10 && <FacePaint10 color={data.color} color2={data.color2} />}
  </g>
);
FacePaint.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
  }).isRequired,
};
export default FacePaint;
