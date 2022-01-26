import useColors from '../hooks/useColors';
import { transparentize, darken } from 'polished';
import React from 'react';
import { Button as RebassButton, ButtonProps as RebassButtonProps, Flex } from 'rebass/styled-components';

export type ButtonProps = RebassButtonProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'outline' | 'transparent';
  color?: string;
  bg?: string;
  enabled?: boolean;
  size?: 's';
  onClick?: (e: React.MouseEvent) => void;
};

const sizes: {
  [index: string]: { px: string; py: string; fontSize: string };
} = {
  s: {
    px: '0.65em',
    py: '0.5em',
    fontSize: '14px',
  },
};

const outline = (color: string) => {
  return {
    bg: 'transparent',
    color,
    border: `1px solid ${transparentize(0.75, color)}`,

    ':hover': {
      bg: color ? transparentize(0.95, color) : transparentize(0.95, 'black'),
    },
    ':active': {
      bg: color ? transparentize(0.92, color) : transparentize(0.92, 'black'),
    },
  };
};

const transparent = (color: string) => ({
  bg: 'transparent',
  boxShadow: 'none',
  color,

  ':hover': {
    bg: color ? transparentize(0.9, color) : transparentize(0.9, 'black'),
  },
  ':active': {
    bg: color ? transparentize(0.85, color) : transparentize(0.85, 'black'),
  },
});

const disabled = (isDisabled: boolean, bg: string) => {
  const styles = { opacity: 0.5, cursor: 'initial', bg };
  if (isDisabled)
    return {
      ...styles,
      ':focus,:active,:hover': { ...styles },
    };

  return {};
};

const defaultColors = {
  text: '#282C30',
  gray5: darken(0.05, '#F8F8F8'),
};

// eslint-disable-next-line complexity
export default function Button(props: ButtonProps) {
  const {
    children,
    color: colorProp = 'text',
    bgProp = 'gray5',
    sx,
    startIcon,
    variant,
    size,
    onClick,
    endIcon,
    enabled = true,
  } = props;

  const colors = useColors();
  const colorsMap = colors || defaultColors;

  const color = colorsMap[colorProp] || colorProp;
  const bg = colorsMap[bgProp] || bgProp;

  return (
    <RebassButton
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
        color,
        bg,
        ':focus': {
          outline: 'none',
        },
        ':hover': {
          bg: darken(0.05, bg),
        },
        ':active': {
          bg: darken(0.1, bg),
        },
        ...(size && sizes[size] ? sizes[size] : {}),
        ...(variant === 'outline' && color ? outline(color) : {}),
        ...(variant === 'transparent' && color ? transparent(color) : {}),
        ...disabled(!enabled, variant === 'outline' ? 'transparent' : bg),
        ...sx,
      }}
      disabled={!enabled}
      variant={variant}
      onClick={onClick}
    >
      {startIcon && (
        <Flex mr={2} alignItems="center">
          {startIcon}
        </Flex>
      )}
      {children}
      {endIcon && (
        <Flex ml={2} alignItems="center">
          {endIcon}
        </Flex>
      )}
    </RebassButton>
  );
}
