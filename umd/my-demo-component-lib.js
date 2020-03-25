(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global.MyDemoComponentLib = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
    _inherits(Link, _Component);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Link.prototype.render = function render() {
        var message = this.props.message;

        return React__default.createElement(
            "b",
            null,
            message
        );
    };

    return Link;
}(React.Component);

Link.propTypes = {
    message: PropTypes.string.isRequired
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MyDemoComponentLib$1 = function (_Component) {
    inherits(MyDemoComponentLib, _Component);

    function MyDemoComponentLib() {
        classCallCheck(this, MyDemoComponentLib);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MyDemoComponentLib.prototype.render = function render() {
        return React__default.createElement(Link, { message: "Foo" });
    };

    return MyDemoComponentLib;
}(React.Component);

return MyDemoComponentLib$1;

})));
