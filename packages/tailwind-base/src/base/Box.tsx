import React, { PropsWithChildren, PropsWithRef, forwardRef } from 'react';
import { merge } from '../utils';
import { CnProps } from '../types';

export type BoxProps = PropsWithChildren &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  CnProps;

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { cn = '', className, ...rest } = props;
  const classNames = merge(cn, className);

  return <div ref={ref} className={classNames} {...rest} />;
});

Box.displayName = 'Box';

export const Flex = (props: PropsWithRef<BoxProps>) => <Box ref={props.ref} {...props} cn={merge('flex', props.cn)} />;

export default Box;
