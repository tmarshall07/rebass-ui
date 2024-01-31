import React, { ChangeEventHandler, ReactNode } from 'react';
export type CheckboxProps = {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};
export declare const BaseCheckbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
//# sourceMappingURL=Checkbox.d.ts.map