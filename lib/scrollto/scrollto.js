'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollTo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animatescroll = require('./animatescroll');

var _animatescroll2 = _interopRequireDefault(_animatescroll);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSharestateHoc = require('react-sharestate-hoc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var ScrollTo = exports.ScrollTo = (0, _reactSharestateHoc.sharedState)((_temp2 = _class = function (_React$Component) {
  _inherits(ScrollTo, _React$Component);

  function ScrollTo() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollTo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollTo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
      event.preventDefault();

      var element = _reactDom2.default.findDOMNode(_this.props._instance);
      (0, _animatescroll2.default)(element, _this.props.animate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollTo, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dest = _props.dest;
      var className = _props.className;
      var activeClassName = _props.activeClassName;
      var _shared = _props._shared;

      var _activeClassName = _shared && _shared.scrollIn ? activeClassName : '';
      var _className = (0, _classnames2.default)(className, _activeClassName);

      return _react2.default.createElement(
        'div',
        { className: _className },
        _react2.default.createElement(
          'a',
          { href: '#' + dest.name, onClick: this.handleClick },
          this.props.children
        )
      );
    }
  }]);

  return ScrollTo;
}(_react2.default.Component), _class.propTypes = {
  dest: func,
  animate: object,
  activeClassName: string,
  className: string
}, _temp2), 'dest');