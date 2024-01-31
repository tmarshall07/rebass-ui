import React, { PropsWithChildren, PropsWithRef } from 'react';
import { CnProps } from '../types';
export type BoxProps = PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & CnProps;
export declare const BaseBox: React.ForwardRefExoticComponent<Omit<BoxProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Flex: (props: PropsWithRef<BoxProps>) => JSX.Element;
//# sourceMappingURL=Box.d.ts.map