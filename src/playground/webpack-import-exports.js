//import isSenior, { isAdult, canDrink } from './person.js';
import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

/* console.log(isAdult(17));
console.log(canDrink(20));
console.log(isSenior(75)); */

//console.log(validator.isEmail('test'));

const template = <p>THIS IS JSX</p>;
//const template = React.createElement('p', {}, 'This is the test');

ReactDOM.render(template, document.getElementById('app'));