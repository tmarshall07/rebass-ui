import React, { ReactNode } from 'react';
import Button, { ButtonProps } from './Button';

type Props = ButtonProps & {
  icon: ReactNode;
  round?: boolean;
  iconSize?: number | string;
};

export default function IconButton(props: Props) {
  const { icon, sx, round, iconSize = 24, onClick, ...rest } = props;

  return (
    <Button
      {...rest}
      onClick={onClick}
      sx={{
        fontSize: iconSize,
        width: '1.75em',
        height: '1.75em',
        padding: 0,
        ...(round ? { borderRadius: 50 } : {}),
        ...sx,
      }}
    >
      {icon}
    </Button>
  );
}
