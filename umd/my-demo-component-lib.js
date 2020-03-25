(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('my-demo-component')) :
	typeof define === 'function' && define.amd ? define(['react', 'my-demo-component'], factory) :
	(global.MyDemoComponentLib = factory(global.React,global.MyDemoComponent));
}(this, (function (React,MyDemoComponent) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
MyDemoComponent = MyDemoComponent && MyDemoComponent.hasOwnProperty('default') ? MyDemoComponent['default'] : MyDemoComponent;

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
        return React__default.createElement(MyDemoComponent, { message: "Foo" });
    };

    return MyDemoComponentLib;
}(React.Component);

return MyDemoComponentLib$1;

})));
