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
  handleRemoveAll() {
    alert('Removed all');
  }
  
  render() {
    return (
      <div>
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