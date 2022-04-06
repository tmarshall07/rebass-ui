import React from 'react';
import Button from './Button';
export default function IconButton(props) {
  const {
    icon,
    sx,
    round,
    iconSize = 24,
    onClick,
    ...rest
  } = props;
  return <Button {...rest} onClick={onClick} sx={{
    fontSize: iconSize,
    width: '1.75em',
    height: '1.75em',
    padding: 0,
    ...(round ? {
      borderRadius: 50
    } : {}),
    ...sx
  }}>
      {icon}
    </Button>;
}
//# sourceMappingURL=IconButton.js.map