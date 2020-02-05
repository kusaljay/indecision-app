'use strict';

//arguments object - not bound with arrow functions
/* const add = function(a, b) {
  console.log(arguments);
  return a + b;
}
 */
var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(10, 15));

var person = {
  name: 'John Jackson',
  cities: ['London', 'New York', 'Zurich'],
  /*   
    printPlacesLived: function () {
      //console.log(this.name);
      //console.log(this.cities);
      const that = this; // Workaround for ES5
      this.cities.forEach(function(city) {
        console.log(that.name + ' has lived in ' + city);
      })
    }
   */
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    /* this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
    */
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(person.printPlacesLived());

var multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
