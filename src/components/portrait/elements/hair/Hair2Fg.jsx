import React from 'react';
import PropTypes from 'prop-types';

const Hair2Fg = ({ color, color2 }) => (
  <g
    id="hair-2-fg"
    fillOpacity="1"
    stroke="#000"
    strokeDasharray="none"
    strokeOpacity="1"
    strokeWidth="0"
  >
    <path
      fill={color}
      d="M51.552 1.652c24.32-.566 21.81 8.262 24.124 13.55 2.313 5.287 13.618 14.13 13.158 44.313-.14 9.216-5.109 23.551-5.109 23.551s-7.341-33.857-8.333-41.789c-.99-7.93 1.275-13.518-6.656-14.51-7.931-.991-28.591-3.59-35.029.661-20.873 13.784-6.14 58.57-19.186 59.568-3.655.28 1.116-48.12 3.1-60.017 1.982-11.897 9.61-24.76 33.93-25.327z"
    />
    <path
      fill={color2}
      d="M48.367 6.85S29.269 12.455 24.08 19.72c-5.19 7.266-12.87 23.25-12.663 31.138.208 7.888 4.982 21.173 3.944 25.74-1.038 4.567 1.743 8.25 1.743 8.25s.748-1.815.125-6.382c-.622-4.567-4.566-23.664-3.529-29.684 1.038-6.02 4.982-18.683 9.55-24.495C27.815 18.475 48.366 6.85 48.366 6.85z"
    />
    <path
      fill={color2}
      d="M53.556 1.66s12.87 1.246 18.683 7.058c5.812 5.813 13.285 19.928 14.946 28.232 1.66 8.303 2.906 26.57 1.038 34.043-1.869 7.473-4.982 13.7-4.982 13.7s5.397-18.89 4.774-24.91c-.623-6.02-1.453-23.248-5.605-30.929-4.151-7.68-17.437-20.55-20.758-21.796-3.321-1.246-8.096-5.397-8.096-5.397z"
    />
    <path
      fill={color2}
      d="M62.275 12.663s7.68 2.906 7.265 7.888c-.415 4.982-6.643 5.604-6.643 5.604s-10.794-2.698-18.06-1.245c-7.265 1.453-14.115 6.02-17.644 13.078-3.529 7.057-7.68 12.04-7.68 12.04s4.359-14.531 9.549-20.344c5.19-5.812 19.95-9.162 25.74-8.51 16.606 1.868 7.473-8.511 7.473-8.511z"
    />
  </g>
);
Hair2Fg.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Hair2Fg;
