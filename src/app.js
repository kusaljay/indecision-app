/* ***** Understantd 'this' keyword in functions and objects ***** */
/* 
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

*/

class IndecisionApp extends React.Component {
  render() {
    const title = 'This is a Title';
    const subtitle = 'This is the subtitle';
    const options = ['Thing one', 'Thing two', 'Thing Four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    //console.log(this.props); // props are passed down as objects
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Picked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    //alert('Removed all');
    console.log(this.props.options);
  }
  
  render() {
    return (
      <div>
        {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button> */}
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          this.props.options.map((option, i) => <Option optionText={option} key={i} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const addedOption = e.target.elements.option.value.trim();

    if (addedOption) {
      console.log(addedOption);
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));