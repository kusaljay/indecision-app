'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* **************************************
******** IndecisionApp Component ********
*****************************************/
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handlePickOption = _this.handlePickOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
    _this.state = {
      subtitle: 'Let the machine decide',
      // options: props.options
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      //--- Explicit return in the updater function ---
      /* 
      this.setState(() => {
        return {
          options: []
        }
      }); */

      this.setState(function () {
        return { options: [] };
      }); // One liner
    }
  }, {
    key: 'handleRemoveOption',
    value: function handleRemoveOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          }) // One liner i.e. implicit return
        };
      });
    }
  }, {
    key: 'handlePickOption',
    value: function handlePickOption() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      }); // One liner

      //--- Explicit return in the updater function ---
      /*
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        };
      }); */
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (err) {}
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount!');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: this.state.subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePickOption: this.handlePickOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleRemoveAll: this.handleRemoveAll,
          handleRemoveOption: this.handleRemoveOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);
/* 
IndecisionApp.defaultProps = {
  options: []
}
 */

/* *******************************
******** Header Component ********
**********************************/


var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'

  //--- Header as a class-based component ---
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

  /*********************************
  ******** Action Component ********
  **********************************/
};var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePickOption,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

//--- Action as a class-based component ---
/* 
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
*/

/**********************************
******** Options Component ********
**********************************/
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleRemoveAll },
      'Remove all'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add something'
    ),
    props.options.map(function (option, i) {
      return React.createElement(Option, {
        optionText: option,
        key: i,
        handleRemoveOption: props.handleRemoveOption
      });
    })
  );
};

//--- Options as a class-based component ---
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

/**********************************
******** Option Component ********
**********************************/
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          return props.handleRemoveOption(props.optionText);
        } },
      'Remove'
    )
  );
};

//--- Option as a class component ---
/*
class Option extends React.Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  }
} 
*/

/************************************
******** AddOption Component ********
*************************************/

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOptionLocal = _this2.handleAddOptionLocal.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOptionLocal',
    value: function handleAddOptionLocal(e) {
      e.preventDefault();

      var addedOption = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(addedOption);

      if (!error) {
        e.target.elements.option.value = '';
      }

      this.setState(function () {
        return { error: error };
      }); //One liner

      //--- Explicit return in the update function ---
      /*
      this.setState(() => {
        return {
          error: error  // { error }
        }
      });
      */
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOptionLocal },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
