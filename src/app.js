class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      subtitle: 'Let the machine decide',
      options: props.options
    }
  }

  handleRemoveAll() {
    // ***** Explicit return in the updater function *****
    /* 
    this.setState(() => {
      return {
        options: []
      }
    }); */

    this.setState(() => ({ options: [] })); // One liner
  }

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => option !== optionToRemove ) // One liner i.e. implicit return
    }));
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option){
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    // ***** Explicit return in the updater function *****
    /*
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    }); */

    this.setState((prevState) => ({options: prevState.options.concat([option])})); // One liner
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
          />
        <Options 
          options={this.state.options} 
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App'
}

// ***** Explicit return in the updater function *****
/*
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
 */

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
      >What should I do?
      </button>
    </div>
  );
}

/* ***** Action as a class-based component *****
class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePickOption}
          disabled={!this.props.hasOptions}
        >What should I do?
        </button>
      </div>
    )
  }
} */

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove all</button>
      {
        props.options.map((option, i) => (
          <Option 
            optionText={option} 
            key={i}
            handleRemoveOption={props.handleRemoveOption} 
          />))
      }
    </div>
  );
}

// ***** Options as a class-based component *****
// class Options extends React.Component { 
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button> */}
//         <button onClick={this.props.handleRemoveAll}>Remove all</button>
//         {
//           this.props.options.map((option, i) => <Option optionText={option} key={i} />)
//         }
//       </div>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => props.handleRemoveOption(props.optionText)}>Remove</button>
    </div>
  );
}

/* ***** Option as a class component *****
class Option extends React.Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  }
} */

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptionLocal = this.handleAddOptionLocal.bind(this);
    this.state = {
      error: undefined
    }
  }
  
  handleAddOptionLocal(e) {
    e.preventDefault();

    const addedOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(addedOption);
    /* ***** Explicit return in the update function
    this.setState(() => {
      return {
        error: error  // { error }
      }
    });
    */
    this.setState(() => ({ error })); //One liner

    e.target.elements.option.value = '';
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptionLocal}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp options={['Devils Den', 'Second District']} />, document.getElementById('app'));