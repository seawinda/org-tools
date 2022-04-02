import React from 'react';
import styled from 'styled-components';

const StyledCloseBtn = styled.div`
  color: ${(props) => props.theme.closeBtn.color};
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  content: '×';
  border: 3px solid ${(props) => props.theme.closeBtn.color};
  font: 21px / 1 Arial, 'Helvetica Neue', Helvetica, sans-serif;
  background: #fff;
  &:hover {
    color: ${(props) => props.theme.closeBtn.colorHover};
    background: ${(props) => props.theme.closeBtn.bgHover};
  }
`;

const CloseButton = (props) => {
  const { className, onClose, color, dataTestId } = props;

  return (
    <StyledCloseBtn className={className} onClick={onClose} color={color} data-testid={dataTestId}>
      x
    </StyledCloseBtn>
  );
};

export default CloseButton;
