import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove all</button>
      {props.options.length === 0 && <p>Please add something</p>}
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

export default Options;