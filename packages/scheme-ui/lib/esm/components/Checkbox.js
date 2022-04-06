import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Checkbox as _Checkbox, Label } from '@rebass/forms';
import defaultColors from '../helpers/colors';
import Box from './Box';
import useColors from '../hooks/useColors';
export default function Checkbox(props) {
  const {
    checked,
    sx,
    label,
    labelSx = {},
    color: colorProp = 'text'
  } = props;
  const colors = useColors();
  const colorsMap = colors || defaultColors;
  const color = colorsMap[colorProp] || colorProp;
  const checkbox = /*#__PURE__*/React.createElement(Box // NOTE: The absolute positioning of the checkbox element causes it to be placed below the overflow container
  // PR filed with the rebassjs repo
  , {
    sx: {
      input: {
        position: 'fixed'
      },
      'svg path': {
        color: checked ? color : colors.text
      }
    }
  }, /*#__PURE__*/React.createElement(_Checkbox, _extends({}, props, {
    sx: {
      ':focus': {
        color
      },
      ...sx
    }
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      ...labelSx
    }
  }, checkbox, label));
}
//# sourceMappingURL=Checkbox.js.map