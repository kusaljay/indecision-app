//arguments object - not bound with arrow functions
/* const add = function(a, b) {
  console.log(arguments);
  return a + b;
}
 */
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
}

console.log(add(10, 15));

const person = {
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
  printPlacesLived() {
    /* this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
 */
    return this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    })
  }
}

console.log(person.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
