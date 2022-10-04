import React from 'react';
import PropTypes from 'prop-types';

const FacialHair1 = ({ color }) => (
  <g id="facial-hair-1" strokeDasharray="none" strokeWidth="0">
    <path
      fill={color}
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeOpacity="1"
      strokeWidth="0"
      d="M51.304 68.778c-6.873.198-11.925-2.432-12.911-1.221-.987 1.21-1.833 5.398-1.833 5.398-1.247 5.181-.01 10.51.491 15.738l1.158 5.948c4.531-2.35 6.812 2.968 9.826 2.742 4.515-3.12 5.854-2.224 11.283-2.933 4.19-3.026 4.003-6.554 5.276-11.822v-5.41l.57-7.363c-1.467-4.444-9.017-1.9-13.86-1.077zm9.847 1.554l.656 3.77c.264 4.297-.866 6.44-2.787 7.542-1.921 1.102-2.348-1.176-7.943.28-1.27.33-9.352-.097-9.352-.097-2.885-4.485-3.412-7.974-1.585-11.226 1.158-1.249 6.488 1.548 10.37 1.627 3.45-.784 7.131-1.896 10.64-1.896z"
    />
  </g>
);

FacialHair1.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FacialHair1;
