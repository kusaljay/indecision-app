const app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderFormContents();
}

const handleRemoveAll = () => {
  app.options.length = 0;
  renderFormContents();
}

const handlePickOption = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNum];
  alert(selectedOption);
}

const appRoot = document.getElementById('app');

const renderFormContents = () => {
  const templateOne = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      {(app.options && app.options.length > 0) ? <p>Number of options: {app.options.length}</p> : <p>No options</p>}
      <button disabled={app.options.length === 0} onClick={handlePickOption}>Pick an option</button>
      <button onClick={handleRemoveAll}>Remove all</button>
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>
          }
        )}
      </ol>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  )
  ReactDOM.render(templateOne, appRoot);
}

renderFormContents();



