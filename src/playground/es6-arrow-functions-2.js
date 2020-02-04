//arguments object - not bound with arrow functions
/* const add = function(a, b) {
  console.log(arguments);
  return a + b;
}
 */
const add = (a, b) => {
  console.log(arguments);
  return a + b;
}

console.log(add(10, 15));

