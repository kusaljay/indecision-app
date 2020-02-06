'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']

  /* function onFormSubmit(e) {
    e.preventDefault();
  } */

};var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form submittd');
};

var templateOne = React.createElement(
  'div',
  { id: 'singleRootElement' },
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
    'Here are your options: ',
    app.options.map(function (i) {
      return i;
    })
  ) : React.createElement(
    'p',
    null,
    'No options'
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add option'
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateOne, appRoot);
