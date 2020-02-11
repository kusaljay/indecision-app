class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.state = {
      title: 'Indecision App',
      subtitle: 'Let the machine decide',
      options: ['Thing one', 'Thing two', 'Thing Four',]
    }
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
          />
        <Options 
          options={this.state.options} 
          handleRemoveAll={this.handleRemoveAll}
        />
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
}

class Options extends React.Component { 
  render() {
    return (
      <div>
        {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button> */}
        <button onClick={this.props.handleRemoveAll}>Remove all</button>
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