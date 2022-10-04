import React from 'react';
import PropTypes from 'prop-types';

const Hair5Fg = ({ color, color2 }) => (
  <g
    id="hair-5-fg"
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeOpacity="1"
    strokeWidth="0"
  >
    <path
      fill={color}
      d="M18.85 34.832c7.171-8.81 12.704-.205 12.704-.205s3.278-6.966 10.859-8.196c7.58-1.23 10.86 5.327 10.86 5.327s3.073-6.351 8.605-5.737c5.532.615 6.556 6.762 6.556 6.762s6.395-5.522 10.45 3.483c-1.067-10.05-5.123-23.972-9.425-27.25-4.303-3.279-17.826-7.172-17.826-7.172s-12.908.205-17.211 3.483C30.119 8.606 22.948 17.211 22.333 20.49c-.614 3.279-3.483 14.343-3.483 14.343z"
    />
    <path fill={color2} d="M19.315 12.983l-.907 9.203 10.425-10.39z" />
    <path fill={color2} d="M11.02 27.744l1.098 7.265 5.629-10.095z" />
    <path fill={color2} d="M31.768.71l-1.511 7.189L39.06.409z" />
    <path fill={color2} d="M8.704 47.317l5.15 7.681 1.444-14.647z" />
    <path fill={color2} d="M12.354 68.233l4.743 4.29-2.29-11.157z" />
    <path fill={color2} d="M80.888 12.983l.907 9.203-10.425-10.39z" display="inline" />
    <path fill={color2} d="M89.182 27.744l-1.097 7.265-5.629-10.095z" display="inline" />
    <path fill={color2} d="M68.435.71l1.511 7.189-8.803-7.49z" display="inline" />
    <path fill={color2} d="M91.499 47.317l-5.15 7.681-1.444-14.647z" display="inline" />
    <path fill={color2} d="M87.849 68.233l-4.743 4.29 2.29-11.157z" display="inline" />
  </g>
);
Hair5Fg.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Hair5Fg;
