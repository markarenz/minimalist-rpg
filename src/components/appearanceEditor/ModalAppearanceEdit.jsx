import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AppearanceEditor from './AppearanceEditor';
import { TransitionWrap, Button } from '../index';
import { appearanceType } from '../../propTypeShapes';

const ModalAppearanceEdit = ({ isOpen, appearance, handleCancel, updateAppearance, handleOk }) => {
  const bgClass = isOpen ? 'opacity-100' : 'opacity-0';
  const activePointersClass = isOpen ? 'pointer-events-all' : 'pointer-events-none';
  if (!appearance.skin) {
    return null;
  }
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen z-10 flex justify-center items-center ${activePointersClass}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-900 transition-opacity duration-200 ${bgClass} ${activePointersClass}`}
      />
      <TransitionWrap show={isOpen} anim="l2c2r">
        <div className="">
          <div className="w-screen min-w-screen h-screen min-h-screen ">
            <div className="p-4 max-w-4xl mx-auto">
              <AppearanceEditor
                initAppearance={appearance}
                updateAppearance={updateAppearance}
                mode="edit"
              />
              <div className="text-right mt-4">
                <span className="mr-4">
                  <Button onClick={handleCancel} variant="secondary">
                    <FormattedMessage id="common__cancel" />
                  </Button>
                </span>
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
ModalAppearanceEdit.propTypes = {
  appearance: appearanceType.isRequired,
  updateAppearance: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
};
export default ModalAppearanceEdit;
