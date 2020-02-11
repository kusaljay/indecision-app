/* ***** Understand 'this' keyword in functions and objects ***** */

const obj = {
  name: 'Kusal',
  getName() {
    return this.name;
  }
}

console.log(obj.getName()); // Returns Kusal. Works for objects as well as ES6 classes.

const getName = obj.getName; // Get a function reference
console.log(getName()); // Bummer! Returns undefined

const getName = obj.getName.bind(obj); // The fix using 'bind()'
console.log(getName()); // Returns Kusal

// -- How 'this' is not working in a function by default --
const func = function() {
  console.log(return this);
}

func(); // Returns undefined

