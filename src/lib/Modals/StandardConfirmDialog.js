import React from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import { Sizes } from '../../designTokens';
import StandardButton from '../Materials/StandardButton';

const StyledConfirmModal = styled(Modal)`
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.mainColor};
  &.ui.modal {
    border-radius: 10px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;
      margin: 0 2rem;
      font-family: ${(props) => props.theme.decorFont};
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
    }
    .content {
      font-family: ${(props) => props.theme.decorFont};
      padding: 2rem;
      .confirm-msg {
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        word-break: break-word;
      }

      .buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 50px;
        button {
          margin-left: 20px;
          font-size: 13px;
          padding: 0.9rem 1.5rem 0.8rem;
        }
      }
    }
    @media screen and (max-width: ${Sizes.mobileLg}) {
      .header {
        padding: 1.5rem 0 !important;
      }
      .content {
        padding: 2rem !important;
      }
    }
  }
`;

const StandardConfirmDialog = (props) => {
  const {
    handleConfirm,
    handleConfirmDialogClose,
    open,
    confirmMsg,
    textHeader,
    textButtonReject,
    colorButtonReject,
    textButtonConfirm,
    colorButtonConfirm,
    size,
  } = props;
  return (
    <StyledConfirmModal
      onClose={handleConfirmDialogClose}
      open={open}
      closeOnEscape
      closeOnDimmerClick
      size={size || 'mini'}
    >
      <Modal.Header
        onClose={handleConfirmDialogClose}
        data-testid="modals-confirmDialog-header-text"
      >
        {textHeader ?? 'Confirm'}
      </Modal.Header>
      <Modal.Content>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="confirm-msg" dangerouslySetInnerHTML={{ __html: confirmMsg }} />
        <div className="buttons">
          <StandardButton
            onClick={handleConfirmDialogClose}
            color={colorButtonReject || 'default'}
            text={textButtonReject ?? 'Cancel'}
            inverted
          />
          <StandardButton
            onClick={handleConfirm}
            color={colorButtonConfirm || 'negative'}
            text={textButtonConfirm ?? 'Ok'}
            dataTestId="modals-confirmDialog-content-buttons-negative-button"
            inverted
          />
        </div>
      </Modal.Content>
    </StyledConfirmModal>
  );
};

export default withNamespaces()(StandardConfirmDialog);
