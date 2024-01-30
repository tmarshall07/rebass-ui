import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { getDefaultVariant, merge } from '../utils';
const getClassesFromProps = props => {
  const {
    theme,
    variant,
    color,
    cn,
    className
  } = props;
  const classes = getDefaultVariant(theme, variant, color);
  return merge(classes, cn, className);
};
export const H1 = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("h1", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
H1.displayName = 'H1';
export const H2 = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("h2", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
H2.displayName = 'H2';
export const H3 = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("h3", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
H3.displayName = 'H3';
export const H4 = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("h4", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
H4.displayName = 'H4';
export const H5 = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("h5", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
H5.displayName = 'H5';
export const P = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("p", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
P.displayName = 'P';
export const A = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn,
    theme,
    variant,
    color,
    className,
    ...rest
  } = props;
  const classNames = getClassesFromProps({
    theme,
    variant,
    color,
    cn,
    className
  });
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
A.displayName = 'A';
//# sourceMappingURL=Text.js.map