import React from 'react';
import PropTypes from 'prop-types';
import { childrenType } from '../../../propTypeShapes';

const ActionTransitionWrap = ({ show, children }) => (
  <div
    className={`${
      show ? 'opacity-100 blur-none' : 'opacity-0 blur-md'
    } transition-all duration-200`}
  >
    {children}
  </div>
);

ActionTransitionWrap.propTypes = {
  show: PropTypes.bool.isRequired,
  children: childrenType.isRequired,
};
export default ActionTransitionWrap;
