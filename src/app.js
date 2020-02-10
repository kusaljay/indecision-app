class IndecisionApp extends React.Component {
  render() {
    const title = 'This is a Title';
    const subtitle = 'This is the subtitle';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    console.log(this.props);
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
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li><Option /></li>
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>Option</div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));