"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.A = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("rebass/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var base = {
  color: 'gray90'
};

var P = function P(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "p"
  }, base, props));
};

exports.P = P;

var A = function A(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "a",
    fontSize: 16,
    fontWeight: 400
  }, base, props));
};

exports.A = A;

var H4 = function H4(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "h4"
  }, base, props));
};

exports.H4 = H4;

var H3 = function H3(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "h3"
  }, base, props));
};

exports.H3 = H3;

var H2 = function H2(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "h2"
  }, base, props));
};

exports.H2 = H2;

var H1 = function H1(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({
    as: "h1",
    fontWeight: 700
  }, base, props));
};

exports.H1 = H1;

var Text = function Text(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Text, _extends({}, base, props));
};

exports.Text = Text;
//# sourceMappingURL=Text.js.map