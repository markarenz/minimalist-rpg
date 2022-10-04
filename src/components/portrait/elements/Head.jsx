import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ data }) => (
  <g>
    <g id="char-ears" display="inline">
      <g display="inline" transform="rotate(5.815 91.415 194.615)">
        <g
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="0.727"
          transform="matrix(1.3018 0 0 1.4534 .53 -13.317)"
        >
          <path
            fill={data.skin}
            fillOpacity="1"
            strokeWidth="0"
            d="M4.049 42.455c-2.006-1.557-3.799.586-1.033 4.521 1.627 2.316 1.678 5.487 2.338 7.048.66 1.56 2.124 1.434 2.235-.538.112-1.972-1.58-3.485-1.665-5.762-.085-2.277.131-3.712-1.875-5.27z"
          />
          <path
            fill={data.skin}
            fillOpacity="0"
            strokeWidth="0.509"
            d="M5.52 44.138s-1.458-1.931-2.764-2.104c-1.58-.21-1.284 2.218.135 4.58 1.865 3.105 1.597 5.135 2.034 6.089.437.953.556 2.74 1.827 2.105 1.27-.636.561-3.122.561-3.122"
          />
        </g>
      </g>
      <g display="inline" transform="scale(-1 1) rotate(5.815 41.522 -787.694)">
        <g
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="0.727"
          transform="matrix(1.3018 0 0 1.4534 .53 -13.317)"
        >
          <path
            fill={data.skin}
            fillOpacity="1"
            strokeWidth="0"
            d="M4.049 42.455c-2.006-1.557-3.799.586-1.033 4.521 1.627 2.316 1.678 5.487 2.338 7.048.66 1.56 2.124 1.434 2.235-.538.112-1.972-1.58-3.485-1.665-5.762-.085-2.277.131-3.712-1.875-5.27z"
          />
          <path
            fill={data.skin}
            fillOpacity="0"
            strokeWidth="0.509"
            d="M5.52 44.138s-1.458-1.931-2.764-2.104c-1.58-.21-1.284 2.218.135 4.58 1.865 3.105 1.597 5.135 2.034 6.089.437.953.556 2.74 1.827 2.105 1.27-.636.561-3.122.561-3.122"
          />
        </g>
      </g>
    </g>
    <g id="char-neck" display="inline">
      <path
        fill={data.skin}
        fillOpacity="1"
        stroke={data.outlines}
        strokeDasharray="none"
        strokeOpacity="1"
        strokeWidth="0.8"
        d="M50 72.625l-19.615 1.164s.986 8.681 1.38 12.43c.395 3.748-.986 14.799-.986 14.799L50 100.89l19.22.127s-1.38-11.05-.986-14.8c.395-3.748 1.381-12.429 1.381-12.429z"
        className="UnoptimicedTransforms"
        clipPath="url(#clipPath22361)"
        display="inline"
      />
    </g>
    <g id="char-head" display="inline">
      <path
        fill={data.skin}
        fillOpacity="1"
        stroke={data.outlines}
        strokeOpacity="1"
        strokeWidth="0.8"
        d="M50 3.547c-21.445.342-27.332 19.807-27.332 43.77 0 12.087 2.453 25.192 9.273 30.943C39.026 84.234 42.411 90.763 50 91.078c7.589-.315 10.974-6.844 18.059-12.818 6.82-5.751 9.273-18.856 9.273-30.944 0-23.962-5.887-43.427-27.332-43.77z"
        display="inline"
      />
    </g>
  </g>
);
Head.propTypes = {
  data: PropTypes.shape({
    skin: PropTypes.string.isRequired,
    outlines: PropTypes.string.isRequired,
  }).isRequired,
};
export default Head;
