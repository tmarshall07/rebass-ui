import React from 'react';
import { Text as _Text } from 'rebass/styled-components';
const base = {
  color: 'gray90'
};
export const P = props => <_Text as="p" {...base} {...props} />;
export const A = props => <_Text as="a" fontSize={16} fontWeight={400} {...base} {...props} />;
export const H4 = props => <_Text as="h4" {...base} {...props} />;
export const H3 = props => <_Text as="h3" {...base} {...props} />;
export const H2 = props => <_Text as="h2" {...base} {...props} />;
export const H1 = props => <_Text as="h1" fontWeight={700} {...base} {...props} />;
export const Text = props => <_Text {...base} {...props} />;
//# sourceMappingURL=Text.js.map