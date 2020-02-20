import React from 'react';

export default class AddOption extends React.Component {
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
    
    if(!error) {
      e.target.elements.option.value = '';
    }
    
    this.setState(() => ({ error }));
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