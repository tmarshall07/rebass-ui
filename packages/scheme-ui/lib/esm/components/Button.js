import useColors from '../hooks/useColors';
import { transparentize, darken } from 'polished';
import React from 'react';
import defaultColors from '../helpers/colors';
import { Button as RebassButton, Flex } from 'rebass/styled-components';
const TRANSPARENCY_HOVER = 0.95;
const TRANSPARENCY_ACTIVE = 0.92;

const outline = color => {
  return {
    bg: 'transparent',
    color,
    border: `1px solid ${transparentize(0.75, color)}`,
    ':hover': {
      bg: color ? transparentize(TRANSPARENCY_HOVER, color) : transparentize(TRANSPARENCY_HOVER, 'black')
    },
    ':active': {
      bg: color ? transparentize(TRANSPARENCY_ACTIVE, color) : transparentize(TRANSPARENCY_ACTIVE, 'black')
    }
  };
};

const transparent = color => ({
  bg: 'transparent',
  boxShadow: 'none',
  color,
  ':hover': {
    bg: color ? transparentize(TRANSPARENCY_HOVER, color) : transparentize(TRANSPARENCY_HOVER, 'black')
  },
  ':active': {
    bg: color ? transparentize(TRANSPARENCY_ACTIVE, color) : transparentize(TRANSPARENCY_ACTIVE, 'black')
  }
});

const disabledSx = bg => {
  const styles = {
    opacity: 0.5,
    cursor: 'initial',
    bg
  };
  return { ...styles,
    ':focus,:active,:hover': { ...styles
    }
  };
}; // eslint-disable-next-line complexity


export default function Button(props) {
  const {
    color: colorProp = 'text',
    bg: bgProp = 'gray5',
    variants: variantsProps = {},
    children,
    sx,
    startIcon,
    variant,
    endIcon,
    disabledSx: disabledSxProp,
    disabled: disabledProp = false,
    enabled = true
  } = props;
  const colors = useColors();
  const colorsMap = colors || defaultColors;
  const color = colorsMap[colorProp] || colorProp;
  const bg = colorsMap[bgProp] || bgProp;
  const variants = {
    outline,
    transparent,
    ...variantsProps
  };
  const isDisabled = !enabled || disabledProp;
  const disabledStyles = disabledSxProp || disabledSx;
  return <RebassButton disabled={isDisabled} variant={variant} px="1em" py="0.5em" {...props} sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    color,
    bg,
    ...sx,
    ':focus': {
      outline: 'none',
      ...(sx?.[':focus'] || {})
    },
    ':hover': {
      bg: darken(0.05, bg),
      ...(sx?.[':hover'] || {})
    },
    ':active': {
      bg: darken(0.1, bg),
      ...(sx?.[':active'] || {})
    },
    ...(isDisabled ? disabledStyles(bg) : {}),
    ...(variants[variant]?.(color) ?? {})
  }}>
      {startIcon && <Flex mr={2} alignItems="center">
          {startIcon}
        </Flex>}
      {children}
      {endIcon && <Flex ml={2} alignItems="center">
          {endIcon}
        </Flex>}
    </RebassButton>;
}
//# sourceMappingURL=Button.js.map