'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']
};

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderFormContents();
};

var handleRemoveAll = function handleRemoveAll() {
  app.options.length = 0;
  renderFormContents();
};

var handlePickOption = function handlePickOption() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var selectedOption = app.options[randomNum];
  alert(selectedOption);
};

var appRoot = document.getElementById('app');

var renderFormContents = function renderFormContents() {
  var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'h2',
      null,
      app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Number of options: ',
      app.options.length
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: handlePickOption },
      'Pick an option'
    ),
    React.createElement(
      'button',
      { onClick: handleRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: index },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(templateOne, appRoot);
};

renderFormContents();
