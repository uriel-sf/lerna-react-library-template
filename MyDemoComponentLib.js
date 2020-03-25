"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _myDemoComponent = require("my-demo-component");

var _myDemoComponent2 = _interopRequireDefault(_myDemoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDemoComponentLib = function (_Component) {
    _inherits(MyDemoComponentLib, _Component);

    function MyDemoComponentLib() {
        _classCallCheck(this, MyDemoComponentLib);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MyDemoComponentLib.prototype.render = function render() {
        return _react2.default.createElement(_myDemoComponent2.default, { message: "Foo" });
    };

    return MyDemoComponentLib;
}(_react.Component);

exports.default = MyDemoComponentLib;