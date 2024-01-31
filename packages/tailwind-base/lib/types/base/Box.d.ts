import React, { PropsWithChildren, PropsWithRef } from 'react';
import { CnProps } from '../types';
export type BoxProps = PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & CnProps;
declare const Box: React.ForwardRefExoticComponent<Omit<BoxProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Flex: (props: PropsWithRef<BoxProps>) => JSX.Element;
export default Box;
//# sourceMappingURL=Box.d.ts.map