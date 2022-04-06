import React from 'react';
import { ButtonProps as RebassButtonProps, SxProps } from 'rebass/styled-components';
export declare type VariantProps = {
    [index: string]: (color: string) => SxProps;
};
export declare type ButtonProps = RebassButtonProps & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    variant?: 'outline' | 'transparent';
    variants?: VariantProps;
    color?: string;
    bg?: string;
    enabled?: boolean;
    disabledSx?: (bg: string) => SxProps;
};
export default function Button(props: ButtonProps): JSX.Element;
//# sourceMappingURL=Button.d.ts.map