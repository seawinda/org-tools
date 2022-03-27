import styled from 'styled-components';

export const StyledContainer = styled.div`
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
  }

  &.home {
    justify-content: center;
    gap: 20px;
  }
  &.judge {
  }
  .judge__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    z-index: 1;
    position: relative;
  }
  .judge__field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  height: 55px;
  padding: 0 20px;
  line-height: 55px;
  background-color: initial;
  border: 0;
  border-radius: 0;
  outline: none !important;
  box-shadow: none !important;
  transition: color 0.2s ease-out, border-color 0.2s ease-out, background-color 0.2s ease-out;
  text-decoration: none;
  text-align: center;
  min-width: 20px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: BebasNeue, PT Sans Narrow, Tahoma, sans-serif, Helvetica Neue;
  white-space: nowrap;
  vertical-align: middle;
  overflow: hidden;
  z-index: 10;
  color: #fff;
  width: 100%;
  max-width: 300px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:before {
    border: 4px solid #fff;
  }
  &:after {
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 50% 0;
    transition: transform 0.2s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #fff;
  }
  &:hover {
    color: #191919;
    cursor: pointer;
    &:after {
      transform: scaleY(1);
    }
  }
`;

const styles = {
  StyledContainer,
  StyledButton,
};

export default styles;
