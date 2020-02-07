class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, my name is ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  } 
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  /* hasHomeLocation() {
    return !!this.homeLocation;
  } */

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I live in ${this.homeLocation}.`
    }

    return greeting; 
  }
}

const me = new Traveller('Kusal Fernando', 39, 'Melbourne');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());