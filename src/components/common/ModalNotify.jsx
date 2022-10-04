import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Button, TransitionWrap } from '../index';
import { childrenType } from '../../propTypeShapes';

const ModalNotify = ({ isOpen, titleKey, handleOk, children, labelOkKey }) => {
  const bgClass = isOpen ? 'opacity-100' : 'opacity-0';
  const activePointersClass = isOpen ? 'pointer-events-all' : 'pointer-events-none';
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center ${activePointersClass}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-modalBg transition-opacity duration-200 ${bgClass} ${activePointersClass}`}
      />
      <TransitionWrap show={isOpen} anim="l2c2r">
        <div className="">
          <div className="rounded-md bg-gray-900 border-2 border-gray-900 max-w-xl">
            <div className="bg-primary p-4 rounded-tl-[4px] rounded-tr-[4px]">
              <h3 className="text-white font-bold text-xl leading-[1]">
                <FormattedMessage id={titleKey} defaultMessage={titleKey} />
              </h3>
            </div>
            <div className="p-4">
              <div>{children}</div>
              <div className="text-right mt-4">
                <Button onClick={handleOk} variant="primary">
                  <FormattedMessage id={labelOkKey} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TransitionWrap>
    </div>
  );
};

ModalNotify.defaultProps = {
  isOpen: false,
  labelOkKey: 'common__ok',
};
ModalNotify.propTypes = {
  children: childrenType.isRequired,
  isOpen: PropTypes.bool,
  titleKey: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
  labelOkKey: PropTypes.string,
};
export default ModalNotify;
