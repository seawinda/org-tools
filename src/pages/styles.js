import styled from 'styled-components';

export const StyledContainer = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  background: #000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: #fff;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(/assets/pattern.svg) 50% 50% no-repeat;
    background-size: contain;
    left: -50%;
    top: -30%;
    pointer-events: none;
  }

  &.home {
    justify-content: center;
    gap: 20px;
  }
`;

const styles = {
  StyledContainer,
};

export default styles;
