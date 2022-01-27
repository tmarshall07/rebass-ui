import { ReactNode } from 'react';
import { CheckboxProps as _CheckboxProps } from '@rebass/forms';
import { SxStyleProp } from 'rebass';
export declare type CheckboxProps = _CheckboxProps & {
    labelSx?: SxStyleProp;
    label?: ReactNode;
};
export default function Checkbox(props: CheckboxProps): JSX.Element;
