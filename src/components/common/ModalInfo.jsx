import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Button, TransitionWrap, FormattedMarkdown } from '../index';

const ModalInfo = ({ info, handleOk }) => {
  const bgClass = info.show ? 'opacity-100' : 'opacity-0';
  const activePointersClass = info.show ? 'pointer-events-all' : 'pointer-events-none';
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center ${activePointersClass}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-modalBg transition-opacity duration-200 ${bgClass} ${activePointersClass}`}
      />
      <TransitionWrap show={info.show} anim="l2c2r">
        <div className="">
          <div className="rounded-md bg-gray-900 border-2 border-gray-900 max-w-xl">
            <div className="bg-primary p-4 rounded-tl-[4px] rounded-tr-[4px]">
              <h3 className="text-white font-bold text-xl leading-[1]">
                <FormattedMessage id={info?.titleKey} defaultMessage={info?.titleKey} />
              </h3>
            </div>
            <div className="p-4">
              <div>
                <FormattedMarkdown id={info?.messageKey} />
              </div>
              <div className="text-right mt-4">
                <Button onClick={handleOk} variant="primary">
                  <FormattedMessage id="common__ok" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TransitionWrap>
    </div>
  );
};

ModalInfo.propTypes = {
  info: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    titleKey: PropTypes.string.isRequired,
    messageKey: PropTypes.string.isRequired,
  }).isRequired,
  handleOk: PropTypes.func.isRequired,
};
export default ModalInfo;
