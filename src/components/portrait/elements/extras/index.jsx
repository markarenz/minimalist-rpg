import React from 'react';
import PropTypes from 'prop-types';
import Extras1L from './Extras1L';
import Extras1R from './Extras1R';
import Extras2L from './Extras2L';
import Extras2R from './Extras2R';
import Extras3L from './Extras3L';
import Extras3R from './Extras3R';
import Extras4 from './Extras4';
import Extras5 from './Extras5';
import Extras6 from './Extras6';

const Extras = ({ data }) => (
  <g>
    {data.includes('1L') && <Extras1L />}
    {data.includes('1R') && <Extras1R />}
    {data.includes('2L') && <Extras2L />}
    {data.includes('2R') && <Extras2R />}
    {data.includes('3L') && <Extras3L />}
    {data.includes('3R') && <Extras3R />}
    {data.includes('4') && <Extras4 />}
    {data.includes('5') && <Extras5 />}
    {data.includes('6') && <Extras6 />}
  </g>
);

Extras.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Extras;
