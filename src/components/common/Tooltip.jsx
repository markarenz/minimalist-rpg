import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMarkdown } from '../index';
import { childrenType } from '../../propTypeShapes';

const Tooltip = ({ tooltipKey, position, children }) => {
  const notchClass =
    position === 'bottom'
      ? 'left-0 -top-2 border-b-[0.5rem] border-l-[0.5rem] border-r-[0.5rem] border-b-gray-100 border-l-transparent border-r-transparent'
      : 'left-0 -bottom-2 border-t-[0.5rem] border-l-[0.5rem] border-r-[0.5rem] border-t-gray-100 border-l-transparent border-r-transparent';
  const toolTipClass =
    position === 'bottom'
      ? 'rounded-bl-md rounded-tr-md rounded-br-md leading-normal top-[120%]'
      : 'rounded-tl-md rounded-tr-md rounded-br-md leading-normal bottom-0';
  return (
    <div className="relative flex flex-col group cursor-help">
      <div className="inline-block">{children}</div>
      <div
        className={`absolute z-10 ${toolTipClass} flex flex-col opacity-0 transition-opacity duration-300 mb-6 group-hover:opacity-100 pointer-events-none`}
      >
        <span
          className={`relative z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-gray-100 text-gray-900 ${toolTipClass}`}
        >
          <FormattedMarkdown id={tooltipKey} defaultMessage={tooltipKey} />
        </span>
        <div className={`absolute w-2 h-2 ${notchClass}`} />
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  position: 'bottom',
};

Tooltip.propTypes = {
  children: childrenType.isRequired,
  tooltipKey: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Tooltip;
