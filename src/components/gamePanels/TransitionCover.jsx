import React from 'react';
import PropTypes from 'prop-types';

const TransitionCover = ({ transitionMode }) => {
  const isTransitioning = transitionMode !== null;
  const curtainClass = `absolute w-1/2 h-full bg-gameNavAction ease-out top-0 duration-300 transition-all ${
    isTransitioning ? 'delay-0' : 'delay-200'
  }`;
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full overflow-x-hidden z-10 pointer-events-none transition-opacity duration-300 ease-out ${
        isTransitioning ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`${curtainClass} ${
          isTransitioning ? 'left-0 opacity-100' : '-left-1/2 opacity-0'
        }`}
      />
      <div
        className={`${curtainClass} ${
          isTransitioning ? 'right-0 opacity-100' : '-right-1/2 opacity-0'
        }`}
      />
    </div>
  );
};

TransitionCover.defaultProps = {
  transitionMode: null,
};
TransitionCover.propTypes = {
  transitionMode: PropTypes.string,
};
export default TransitionCover;
