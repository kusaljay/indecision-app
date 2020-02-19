'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* console.log(isAdult(17));
console.log(canDrink(20));
console.log(isSenior(75)); */

//console.log(validator.isEmail('test'));

//const template = <p>This is the test</p>
var template = _react2.default.createElement('p', {}, 'This is the test'); //import isSenior, { isAdult, canDrink } from './person.js';


_reactDom2.default.render(template, document.getElementById('app'));
