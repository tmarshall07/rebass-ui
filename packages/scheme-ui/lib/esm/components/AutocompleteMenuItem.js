import React from 'react';
import { P } from './Text';

const AutocompleteMenuItem = props => {
  const {
    onSelect,
    text,
    focused,
    sx = {}
  } = props;
  return /*#__PURE__*/React.createElement(P, {
    p: 2,
    sx: {
      cursor: 'pointer',
      ':hover': {
        bg: 'gray10'
      },
      ...(focused ? {
        bg: 'gray10'
      } : {}),
      ...{
        sx
      }
    },
    onClick: onSelect
  }, text);
};

export default AutocompleteMenuItem;
//# sourceMappingURL=AutocompleteMenuItem.js.map