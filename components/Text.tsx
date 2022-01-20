import React from 'react';
import { Text, TextProps } from 'rebass/styled-components';

const base = {
  color: "gray90"
};

export const P = (props: TextProps) => (
  <Text
    as="p"
    {...base}
    {...props}
  />
);

export const A = (props: TextProps) => (
  <Text as="a" fontSize={16} fontWeight={400} {...base} {...props} />
);

export const H4 = (props: TextProps) => (
  <Text
    as="h4"
    {...base}
    {...props}
  />
);

export const H3 = (props: TextProps) => (
  <Text
    as="h3"
    {...base}
    {...props}
  />
);

export const H2 = (props: TextProps) => (
  <Text
    as="h2"
    {...base}
    {...props}
  />
);

export const H1 = (props: TextProps) => (
  <Text
    as="h1"
    fontWeight={700}
    {...base}
    {...props}
  />
);

export default Text;
