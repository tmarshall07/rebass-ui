import React from 'react';
import { ButtonProps as RebassButtonProps } from 'rebass/styled-components';
export declare type ButtonProps = RebassButtonProps & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    variant?: 'outline' | 'transparent';
    color?: string;
    bg?: string;
    enabled?: boolean;
    size?: 's';
    onClick?: (e: React.MouseEvent) => void;
};
export default function Button(props: ButtonProps): JSX.Element;
