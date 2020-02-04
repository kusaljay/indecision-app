"use strict";

var _arguments = arguments;
//arguments object - not bound with arrow functions
/* const add = function(a, b) {
  console.log(arguments);
  return a + b;
}
 */
var add = function add(a, b) {
  console.log(_arguments);
  return a + b;
};

console.log(add(10, 15));
