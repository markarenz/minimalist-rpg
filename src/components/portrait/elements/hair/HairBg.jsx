import React from 'react';
import PropTypes from 'prop-types';
import Hair1Bg from './Hair1Bg';
import Hair2Bg from './Hair2Bg';
import Hair3Bg from './Hair3Bg';
import Hair5Bg from './Hair5Bg';
import Hair8Bg from './Hair8Bg';
import Hair9Bg from './Hair9Bg';

const HairBg = ({ data }) => (
  <g id="char-hair-bg-group">
    {data.style === 1 && <Hair1Bg color={data.color} />}
    {data.style === 2 && <Hair2Bg color={data.color} />}
    {data.style === 3 && <Hair3Bg color={data.color} />}
    {data.style === 5 && <Hair5Bg color={data.color} />}
    {data.style === 8 && <Hair8Bg color={data.color} />}
    {data.style === 9 && <Hair9Bg color={data.color} />}
  </g>
);
HairBg.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
  }).isRequired,
};
export default HairBg;
