import React, { ChangeEventHandler, ReactNode, forwardRef } from 'react';
import { merge } from '../utils';

export type CheckboxProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};

const classes = `
  cursor-pointer
  w-6 h-6
`;

const Checkbox = forwardRef(({ label, checked, onChange, inputProps, labelProps }: CheckboxProps) => {
  return (
    <label className="flex gap-2 cursor-pointer group" {...labelProps}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...inputProps}
        className={merge(classes, inputProps?.className)}
      />
      {label}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
