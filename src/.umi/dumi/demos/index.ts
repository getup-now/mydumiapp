// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/agree/Desktop/dumiapp/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _dumiapp = require("dumiapp");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_dumiapp.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from 'dumiapp';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"16.14.0"},"dumiapp":{"version":"1.0.0"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
};
