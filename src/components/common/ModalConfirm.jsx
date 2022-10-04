import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Button from './Button';
import TransitionWrap from './TransitionWrap';
import { childrenType } from '../../propTypeShapes';

const ModalConfirm = ({
  isOpen,
  titleKey,
  handleOk,
  handleCancel,
  children,
  labelOkKey,
  labelCancelKey,
}) => {
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
          <div className="rounded-md bg-gray-900 border-2 border-gray-700 max-w-xl">
            <div className="bg-primary p-4 rounded-tl-[4px] rounded-tr-[4px]">
              <h3 className="text-white font-bold text-xl leading-[1]">
                <FormattedMessage id={titleKey} defaultMessage={titleKey} />
              </h3>
            </div>
            <div className="p-4">
              <div>{children}</div>
              <div className="text-right mt-4">
                <span className="mr-4">
                  <Button onClick={handleCancel} variant="secondary">
                    <FormattedMessage id={labelCancelKey} />
                  </Button>
                </span>
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
ModalConfirm.defaultProps = {
  isOpen: false,
  labelOkKey: 'common__ok',
  labelCancelKey: 'common__cancel',
};
ModalConfirm.propTypes = {
  isOpen: PropTypes.bool,
  children: childrenType.isRequired,
  titleKey: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  labelCancelKey: PropTypes.string,
  labelOkKey: PropTypes.string,
};
export default ModalConfirm;
