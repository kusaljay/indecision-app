let visibility = false;

const handleToggle = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsxContent = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleToggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility ? (
        <p>This is the content you wanted to see</p>
        ) : null}
      {visibility && <p>Another line of content</p>}
    </div>
  )
  ReactDOM.render(jsxContent, document.getElementById('app'));
}

render();



