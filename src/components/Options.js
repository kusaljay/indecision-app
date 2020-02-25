import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button 
        className="button button--link"
        onClick={props.handleRemoveAll}
      >
        Remove all
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add something</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={index}
          optionText={option} 
          count={index + 1}
          handleRemoveOption={props.handleRemoveOption} 
        />))
    }
  </div>
);


export default Options;