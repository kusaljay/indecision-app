'use strict';

/* var userName = 'Kay Fer',
  userAge = 40,
  userLocation = 'Melbourne'; */

var app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']
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
  )
);

var user = {
  name: 'Jay Fer',
  age: 30,
  location: 'Melbourne'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var getLocationArrow = function getLocationArrow(location) {
  return location ? React.createElement(
    'p',
    null,
    'Location: ',
    location
  ) : undefined;
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymouse'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

/* ***** Counter ***** */

var count = 0;
var addOne = function addOne() {
  count++;
  console.log('Increase by one', count);
  renderCounterApp();
};
var minusOne = function minusOne() {
  console.log('Decrease by one');
};
var reset = function reset() {
  console.log('Reset');
};

var renderCounterApp = function renderCounterApp() {
  var counter = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { className: 'btn-primary', onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { className: 'btn-primary', onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { className: 'btn-primary', onClick: reset },
      'Reset'
    )
  );

  return counter;
};

var appRoot = document.getElementById('app');

ReactDOM.render(counter, appRoot);
