import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Button = styled.button`
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
  font-family: ${(props) => props.theme.decorFont};
  white-space: nowrap;
  vertical-align: middle;
  overflow: hidden;
  z-index: 10;
  color: ${(props) => {
    if (props.disabled)
      return !props.inverted
        ? props.theme.standardBtn.color.disabled
        : props.theme.standardBtnInverted.color.disabled;
    if (props.color)
      return !props.inverted
        ? props.theme.standardBtn.color[props.color]
        : props.theme.standardBtnInverted.color[props.color];
    return !props.inverted
      ? props.theme.standardBtn.color.default
      : props.theme.standardBtnInverted.color.default;
  }};
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
    border-width: 4px;
    border-style: solid;
    border-color: ${(props) => {
      if (props.disabled)
        return !props.inverted
          ? props.theme.standardBtn.border.disabled
          : props.theme.standardBtnInverted.border.disabled;
      if (props.color)
        return !props.inverted
          ? props.theme.standardBtn.border[props.color]
          : props.theme.standardBtnInverted.border[props.color];
      return !props.inverted
        ? props.theme.standardBtn.border.default
        : props.theme.standardBtnInverted.border.default;
    }};
  }
  &:after {
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 50% 0;
    transition: transform 0.2s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: ${(props) => {
      if (props.disabled)
        return !props.inverted
          ? props.theme.standardBtn.backgroundHover.disabled
          : props.theme.standardBtnInverted.backgroundHover.disabled;
      if (props.color)
        return !props.inverted
          ? props.theme.standardBtn.backgroundHover[props.color]
          : props.theme.standardBtnInverted.backgroundHover[props.color];
      return !props.inverted
        ? props.theme.standardBtn.backgroundHover.default
        : props.theme.standardBtnInverted.backgroundHover.default;
    }};
  }
  &:hover {
    color: ${(props) => {
      if (props.disabled)
        return !props.inverted
          ? props.theme.standardBtn.colorHover.disabled
          : props.theme.standardBtnInverted.colorHover.disabled;
      if (props.color)
        return !props.inverted
          ? props.theme.standardBtn.colorHover[props.color]
          : props.theme.standardBtnInverted.colorHover[props.color];
      return !props.inverted
        ? props.theme.standardBtn.colorHover.default
        : props.theme.standardBtnInverted.colorHover.default;
    }};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    &:after {
      transform: scaleY(1);
    }
  }
`;

const StandardButton = (props) => {
  const {
    onClick,
    text,
    color,
    variant,
    disabled,
    className,
    size,
    width,
    height,
    padding,
    dataTestId,
    loaderSize,
    loading,
    inverted,
    as,
    to,
  } = props;

  return (
    <Button
      onClick={onClick}
      color={color}
      disabled={disabled}
      variant={variant}
      className={className}
      size={size}
      width={width}
      height={height}
      padding={padding}
      data-testid={dataTestId}
      inverted={inverted}
      as={as}
      to={to}
    >
      {loading && loaderSize ? <CircularProgress size={loaderSize} color="inherit" /> : text}
    </Button>
  );
};

export default StandardButton;
