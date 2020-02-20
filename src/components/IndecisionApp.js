import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption'; 

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      subtitle: 'Let the machine decide',
      options: []
    }
  }

  handleRemoveAll() {
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

    this.setState((prevState) => (
      {options: prevState.options.concat([option])})
    );
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options  }));
      }
    }
    catch (err) {
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(prevProps, prevState) {
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
/* 
IndecisionApp.defaultProps = {
  options: []
}
*/

export default IndecisionApp;