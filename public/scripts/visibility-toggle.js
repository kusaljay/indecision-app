'use strict';

var visibility = false;

var handleToggle = function handleToggle() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsxContent = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: handleToggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility ? React.createElement(
      'p',
      null,
      'This is the content you wanted to see'
    ) : null,
    visibility && React.createElement(
      'p',
      null,
      'Another line of content'
    )
  );
  ReactDOM.render(jsxContent, document.getElementById('app'));
};

render();
