import React from 'react';
import PropTypes from 'prop-types';

const Hair4 = ({ color, color2 }) => (
  <g id="hair-4" fillOpacity="1" stroke="#000" strokeDasharray="none">
    <path
      fill={color}
      strokeWidth="0.6"
      d="M49.583 2.747c-13.861.125-21.978 9.865-24.6 20.105-2.623 10.24-2.025 17.017-2.025 17.017s5.021-19.639 10.516-22.012c3.512-1.516 5.394-.074 8.804 1.164 2.029.925 4.6 1.524 7.797 1.334h.008c3.198.19 5.768-.41 7.798-1.334 3.41-1.238 5.291-2.68 8.803-1.164C72.18 20.23 77.2 39.87 77.2 39.87s.598-6.777-2.024-17.017c-2.623-10.24-10.74-19.98-24.6-20.105l-.497.349z"
    />
    <path
      fill={color2}
      strokeOpacity="1"
      strokeWidth="0"
      d="M34.516 14.486s6.923 3.413 14.236 3.316c7.313-.098 16.478-3.803 16.478-3.803s-7.605 1.462-15.015 1.657c-7.41.195-15.699-1.17-15.699-1.17z"
      display="none"
    />
    <path
      fill={color2}
      strokeOpacity="1"
      strokeWidth="0"
      d="M28.11 18.98c9.615-10.079 13.44-1.504 21.73-1.553 8.292-.05 13.875-7.855 21.733.554-5.152-10.366-11.748-4.24-21.4-4.435-9.422-.19-15.021-7.142-22.064 5.433z"
      display="inline"
    />
  </g>
);
Hair4.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Hair4;
