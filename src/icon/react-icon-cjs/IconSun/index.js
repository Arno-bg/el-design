"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function IconSunComponent(iconProps, ref) {
  var _useContext = (0, _react.useContext)(_context.IconContext),
      prefixCls = _useContext.prefixCls;

  var spin = iconProps.spin,
      className = iconProps.className;

  var props = _objectSpread(_objectSpread({
    ref: ref
  }, iconProps), {}, {
    className: "".concat(className ? className + ' ' : '').concat(prefixCls, "-icon ").concat(prefixCls, "-icon-sun")
  });

  if (spin) {
    props.className = "".concat(props.className, " ").concat(prefixCls, "-icon-loading");
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "24",
    cy: "24",
    r: "7"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M23 7H25V9H23z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M23 39H25V41H23z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M41 23H43V25H41z",
    transform: "rotate(90 41 23)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 23H11V25H9z",
    transform: "rotate(90 9 23)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36.728 35.313H38.728V37.313H36.728z",
    transform: "rotate(135 36.728 35.313)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.1 12.687H16.1V14.687H14.1z",
    transform: "rotate(135 14.1 12.687)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.688 36.728H14.688V38.728H12.688z",
    transform: "rotate(-135 12.688 36.728)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M35.315 14.101H37.315V16.101H35.315z",
    transform: "rotate(-135 35.315 14.1)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M23 7H25V9H23z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M23 39H25V41H23z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M41 23H43V25H41z",
    transform: "rotate(90 41 23)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M9 23H11V25H9z",
    transform: "rotate(90 9 23)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M36.728 35.313H38.728V37.313H36.728z",
    transform: "rotate(135 36.728 35.313)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M14.1 12.687H16.1V14.687H14.1z",
    transform: "rotate(135 14.1 12.687)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M12.688 36.728H14.688V38.728H12.688z",
    transform: "rotate(-135 12.688 36.728)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    stroke: "none",
    d: "M35.315 14.101H37.315V16.101H35.315z",
    transform: "rotate(-135 35.315 14.1)"
  }));
}

var IconSun = /*#__PURE__*/_react["default"].forwardRef(IconSunComponent);

IconSun.defaultProps = {
  isIcon: true
};
IconSun.displayName = 'IconSun';
var _default = IconSun;
exports["default"] = _default;