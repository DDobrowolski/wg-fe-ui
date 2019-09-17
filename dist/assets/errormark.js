"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errormark = function Errormark(_ref) {
  var color = _ref.color,
      className = _ref.className;
  return _react.default.createElement("svg", {
    className: className,
    width: "3",
    height: "16",
    viewBox: "0 0 3 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M2.55422 0V6.32044C2.55422 6.65193 2.54618 6.97606 2.53012 7.29282C2.52209 7.60958 2.50602 7.93002 2.48193 8.25414C2.45783 8.5709 2.4257 8.89871 2.38554 9.23757C2.35341 9.56906 2.31325 9.92633 2.26506 10.3094H0.807229C0.759036 9.92633 0.71486 9.56906 0.674699 9.23757C0.64257 8.89871 0.614458 8.5709 0.590362 8.25414C0.566265 7.93002 0.546185 7.60958 0.530121 7.29282C0.522088 6.97606 0.518072 6.65193 0.518072 6.32044V0H2.55422ZM0 14.6188C0 14.4273 0.0361446 14.2468 0.108434 14.0773C0.188755 13.9079 0.293173 13.7606 0.421687 13.6354C0.558233 13.5101 0.718876 13.4107 0.903615 13.337C1.08835 13.2634 1.28514 13.2265 1.49398 13.2265C1.70281 13.2265 1.8996 13.2634 2.08434 13.337C2.26908 13.4107 2.42972 13.5101 2.56627 13.6354C2.70281 13.7606 2.80723 13.9079 2.87952 14.0773C2.95984 14.2468 3 14.4273 3 14.6188C3 14.8177 2.95984 15.0018 2.87952 15.1713C2.80723 15.3333 2.70281 15.477 2.56627 15.6022C2.42972 15.7274 2.26908 15.8232 2.08434 15.8895C1.8996 15.9632 1.70281 16 1.49398 16C1.28514 16 1.08835 15.9632 0.903615 15.8895C0.718876 15.8232 0.558233 15.7274 0.421687 15.6022C0.293173 15.477 0.188755 15.3333 0.108434 15.1713C0.0361446 15.0018 0 14.8177 0 14.6188Z",
    fill: color
  }));
};

Errormark.propTypes = {
  className: _propTypes.string,
  color: _propTypes.string.isRequired
};
var _default = Errormark;
exports.default = _default;