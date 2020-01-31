"use strict";

//ES5
function square(x) {
  return x * x;
}

console.log(square(4));

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(5));

const fullName = 'Jay Ferni';

const nameExtract = (nameX) => nameX.split(' ')[0];

console.log(nameExtract(fullName));
