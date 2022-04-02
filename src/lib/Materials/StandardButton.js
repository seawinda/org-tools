import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Sizes } from '../../designTokens';

const Button = styled.button`
  background: ${(props) => {
    if (props.disabled) return Colors[props.theme]?.grey;
    if ((props.variant === 'outlined' || props.variant === 'dashed') && !props.color) return 'none';
    if ((props.variant === 'outlined' || props.variant === 'dashed') && props.color) {
      switch (props.color) {
        case 'primary':
          return Colors[props.theme]?.opacityGreenBg;
        case 'default':
          return 'none';
        case 'negative':
          return Colors[props.theme]?.opacityRedBg;
        default:
          return Colors[props.theme]?.opacityGreenBg;
      }
    }
    switch (props.color) {
      case 'primary':
        return Colors[props.theme]?.green;
      case 'default':
        return Colors[props.theme]?.grey;
      case 'negative':
        return Colors[props.theme]?.red;
      default:
        return Colors[props.theme]?.green;
    }
  }};
  box-shadow: 5px 5px 25px 0
    ${(props) => {
      if (props.disabled || props.variant === 'outlined' || props.variant === 'dashed')
        return 'none';
      switch (props.color) {
        case 'primary':
          return Colors[props.theme]?.lightGreenBg;
        case 'default':
          return Colors[props.theme]?.opacityGreyBg;
        case 'negative':
          return Colors[props.theme]?.lightRed;
        default:
          return Colors[props.theme]?.lightGreenBg;
      }
    }};
  color: ${(props) => {
    if (props.disabled) return Colors[props.theme]?.lightFont;
    if (props.variant === 'outlined' || props.variant === 'dashed') {
      switch (props.color) {
        case 'primary':
          return Colors[props.theme]?.green;
        case 'default':
          return Colors[props.theme]?.darkFont;
        case 'negative':
          return Colors[props.theme]?.red;
        default:
          return Colors[props.theme]?.green;
      }
    }
    switch (props.color) {
      case 'primary':
        return Colors[props.theme]?.whiteFont;
      case 'default':
        return Colors[props.theme]?.darkFont;
      case 'negative':
        return Colors[props.theme]?.whiteFont;
      default:
        return Colors[props.theme]?.whiteFont;
    }
  }};

  padding: ${(p) => p.padding || (p.size === 'large' ? '1.3rem' : '0.5rem 1.5rem')};
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-width: ${(props) => {
    if (props.disabled) return `1px`;
    if (props.variant === 'outlined' || props.variant === 'dashed') {
      return '1px';
    }
    return 0;
  }};
  border-color: ${(props) => {
    if (props.disabled) return Colors[props.theme]?.grey;
    if (props.variant === 'outlined' || props.variant === 'dashed') {
      switch (props.color) {
        case 'primary':
          return Colors[props.theme]?.green;
        case 'default':
          return Colors[props.theme]?.darkFont;
        case 'negative':
          return Colors[props.theme]?.red;
        default:
          return Colors[props.theme]?.green;
      }
    }
    return 'transparent';
  }};
  border-style: ${(props) => {
    if (props.variant) {
      switch (props.variant) {
        case 'outlined':
          return 'solid';
        case 'dashed':
          return 'dashed';
        default:
          return 'solid';
      }
    } else return 'none';
  }};
  font-family: ${FontFamily.mainFont};
  font-size: ${(p) => (p.size === 'large' ? '1.2rem' : '13px')};
  transition: box-shadow 0.3s;
  min-width: 100px;
  width: ${(p) => (p.size === 'large' ? '100%' : p.width || 'auto')};
  height: ${(p) => (p.size === 'large' ? 'auto' : p.height || '40px')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:active,
  &:focus,
  &:hover {
    box-shadow: none;
    background: ${(props) => {
      if ((props.variant === 'outlined' || props.variant === 'dashed') && !props.color)
        return 'none';
      if (props.disabled) return Colors[props.theme]?.grey;
      if ((props.variant === 'outlined' || props.variant === 'dashed') && props.color) {
        switch (props.color) {
          case 'primary':
            return Colors[props.theme]?.opacityGreenBg;
          case 'default':
            return 'none';
          case 'negative':
            return Colors[props.theme]?.opacityRedBg;
          default:
            return Colors[props.theme]?.opacityGreenBg;
        }
      }
      switch (props.color) {
        case 'primary':
          return Colors[props.theme]?.green;
        case 'default':
          return Colors[props.theme]?.grey;
        case 'negative':
          return Colors[props.theme]?.red;
        default:
          return Colors[props.theme]?.green;
      }
    }};
  }
  @media (max-height: ${Sizes.smallHeight}) {
    padding: 0.7rem 1.5rem;
  }
`;

const StandardButton = (props) => {
  const {
    onClick,
    text,
    theme,
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
  } = props;

  return (
    <Button
      onClick={onClick}
      theme={theme}
      color={color}
      disabled={disabled}
      variant={variant}
      className={className}
      size={size}
      width={width}
      height={height}
      padding={padding}
      data-testid={dataTestId}
      loaderSize={loaderSize}
    >
      {loading ? <CircularProgress size={loaderSize} color="inherit" /> : text}
    </Button>
  );
};

export default StandardButton;
