import React, { ChangeEventHandler, ReactNode } from 'react';
export type CheckboxProps = {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map