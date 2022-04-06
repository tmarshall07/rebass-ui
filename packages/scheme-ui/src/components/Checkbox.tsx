import React, { ReactNode } from 'react';
import { Checkbox as _Checkbox, CheckboxProps as _CheckboxProps, Label } from '@rebass/forms';
import { SxStyleProp } from 'rebass';
import { defaultColors } from '../helpers/colors';

import Box from './Box';
import useColors from '../hooks/useColors';

export type CheckboxProps = _CheckboxProps & {
  labelSx?: SxStyleProp;
  label?: ReactNode;
};

export default function Checkbox(props: CheckboxProps) {
  const { checked, sx, label, labelSx = {}, color: colorProp = 'text' } = props;

  const colors = useColors();
  const colorsMap = colors || defaultColors;

  const color = colorsMap[colorProp] || colorProp;

  const checkbox = (
    <Box
      // NOTE: The absolute positioning of the checkbox element causes it to be placed below the overflow container
      // PR filed with the rebassjs repo
      sx={{
        input: {
          position: 'fixed',
        },
        'svg path': {
          color: checked ? color : colors.text,
        },
      }}
    >
      <_Checkbox
        {...props}
        sx={{
          ':focus': {
            color,
          },
          ...sx,
        }}
      />
    </Box>
  );

  return (
    <>
      <Label sx={{ display: 'flex', alignItems: 'center', ...labelSx }}>
        {checkbox}
        {label}
      </Label>
    </>
  );
}
