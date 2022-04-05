/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';
import CloseButton from '../Materials/CloseButton';
import StandardButton from '../Materials/StandardButton';

const StyledStandardNotificationModal = styled(Modal)`
  padding: 20px 30px;
  font-family: ${(props) => props.theme.decorFont};
  color: #fff;
  &.ui.modal > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 20px 0;
    font-family: ${(props) => props.theme.decorFont};
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }

  &.ui.modal > .content {
    font-family: ${(props) => props.theme.decorFont};
    padding: 1.5rem 0;
    .label {
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
    }
    .error {
      color: ${(props) => props.theme.error};
    }

    .notification__button {
      margin-top: 30px;
      width: 100%;
    }
  }
`;

const StandardNotificationModal = (props) => {
  const {
    open,
    handleNotificationModalClose,
    textHeader,
    textLabel,
    textButtonCancel,
    isError,
    size,
  } = props;

  const handleClickClose = () => {
    handleNotificationModalClose();
  };

  return (
    <StyledStandardNotificationModal
      onClose={handleClickClose}
      open={open}
      closeOnEscape
      closeOnDimmerClick
      size={size || 'mini'}
    >
      <Modal.Header onClose={handleClickClose}>
        {textHeader || 'Notification'}
        <CloseButton onClose={handleClickClose} />
      </Modal.Header>
      <Modal.Content>
        {textLabel && (
          <div
            className={isError ? 'error' : 'label'}
            dangerouslySetInnerHTML={{
              __html: textLabel,
            }}
          />
        )}
        <StandardButton
          onClick={handleClickClose}
          color="primary"
          text={textButtonCancel ?? 'Cancel'}
          className="notification__button"
          inverted
        />
      </Modal.Content>
    </StyledStandardNotificationModal>
  );
};

export default StandardNotificationModal;
