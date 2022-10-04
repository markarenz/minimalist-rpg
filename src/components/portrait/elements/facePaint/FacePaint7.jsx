import React from 'react';
import PropTypes from 'prop-types';

const FacePaint7 = ({ color, color2 }) => (
  <g id="facepaint-7" strokeLinecap="round" paintOrder="markers fill stroke">
    <path
      style={{ InkscapeStroke: 'none' }}
      fill={color}
      d="M37.159 29.488L33.393 40.76l-10.067 2.44 8.252 7.056-3.154 15.76 9.218-11.034 6.474 5.308-.875-8.898 6.736-6.311 6.735 6.31-.874 8.899 6.474-5.308 9.217 11.034-3.153-15.76 8.251-7.057-10.067-2.439-3.765-11.273-4.869 10.265-7.95 2.583-7.948-2.583z"
      color="#000"
    />
    <path
      style={{ InkscapeStroke: 'none' }}
      fill={color2}
      d="M37.078 28.15l-.392 1.18-3.68 11.01-10.748 2.605 8.771 7.502-3.095 15.473.875.418 8.898-10.654 7.023 5.757-.966-9.851 6.213-5.822 6.214 5.822-.968 9.851 7.023-5.757 8.9 10.654.874-.418-3.096-15.473 8.771-7.502-10.748-2.605-4.072-12.19-5.309 11.194-7.59 2.467-7.59-2.467zm.162 2.674l4.428 9.338 8.309 2.7 8.308-2.7 4.428-9.338 3.46 10.358 9.388 2.273-7.733 6.613 2.826 14.12-8.275-9.905-5.926 4.858.781-7.944-7.257-6.8-7.258 6.8.781 7.942-5.924-4.856-8.277 9.908 2.826-14.123-7.732-6.613 9.386-2.273z"
      color="#000"
    />
    <path
      fill={color2}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeOpacity="1"
      strokeWidth="0"
      d="M40.777 73.94c-.02-3.082 7-.875 9.45-.787 2.45.087 7.175-1.925 9.8-.35 1.525 4.04-6.45 7.699-8.75 7.7-6.22-.21-10.534-2.976-10.5-6.563z"
    />
    <path
      fill={color2}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeOpacity="1"
      strokeWidth="0"
      d="M25.527 19.585S29.707 1.32 49.953 1.981c20.245.66 25.087 18.484 25.087 18.484s-25.011 2.971-24.867 16.248c-.076-13.57-24.646-17.128-24.646-17.128z"
      clipPath="url(#clipPath37092)"
    />
  </g>
);

FacePaint7.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default FacePaint7;
