"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncTitle = void 0;

var _dynamic = _interopRequireDefault(require("next/dynamic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AsyncTitle = (0, _dynamic["default"])(function () {
  return import('./Title');
});
exports.AsyncTitle = AsyncTitle;