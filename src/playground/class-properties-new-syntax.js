/***** Old Syntax with class constructor method *****/

class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this); // <--- 4. The remedy
  }

  getGreeting() {
    return `Hi my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting()); // <--- 1. Works fine

const getGreeting = oldSyntax.getGreeting; // <--- 2. Breaks the 'this' binding
console.log(getGreeting()); // <--- 3. Gives an error


/***** New Syntax with NO NEED of a constructor method in class.
  Can do this because of plugin: @babel/plugin-proposal-class-properties *****/

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi my name is ${this.name}`; // <--- Arrow function doesn't have it's own 'this'. Instead it refers to parent class's 'this'
  }
}

const newSyntax = new NewSyntax();
console.log(newSyntax.getGreeting());

const newGreeting = newSyntax.getGreeting; // <--- Does not break 'this' binding because of Arrow function
console.log(newGreeting());