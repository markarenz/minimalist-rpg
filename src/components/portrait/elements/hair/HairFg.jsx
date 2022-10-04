import React from 'react';
import PropTypes from 'prop-types';
import Hair0 from './Hair0';
import Hair1Fg from './Hair1Fg';
import Hair2Fg from './Hair2Fg';
import Hair3Fg from './Hair3Fg';
import Hair4 from './Hair4';
import Hair5Fg from './Hair5Fg';
import Hair6 from './Hair6';
import Hair7 from './Hair7';
import Hair8Fg from './Hair8Fg';
import Hair9Fg from './Hair9Fg';
import Hair10 from './Hair10';

const HairFg = ({ data }) => (
  <g id="char-hair-fg-group">
    {data.style === 0 && <Hair0 />}
    {data.style === 1 && <Hair1Fg color={data.color} color2={data.color2} />}
    {data.style === 2 && <Hair2Fg color={data.color} color2={data.color2} />}
    {data.style === 4 && <Hair4 color={data.color} color2={data.color2} />}
    {data.style === 3 && <Hair3Fg color={data.color} color2={data.color2} />}
    {data.style === 5 && <Hair5Fg color={data.color} color2={data.color2} />}
    {data.style === 6 && <Hair6 color={data.color} color2={data.color2} />}
    {data.style === 7 && <Hair7 color={data.color} color2={data.color2} />}
    {data.style === 8 && <Hair8Fg color={data.color} color2={data.color2} />}
    {data.style === 9 && <Hair9Fg color={data.color} color2={data.color2} />}
    {data.style === 10 && <Hair10 color={data.color} color2={data.color2} />}
  </g>
);
HairFg.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
  }).isRequired,
};
export default HairFg;
