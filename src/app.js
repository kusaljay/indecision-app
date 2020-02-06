const app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']
}

/* function onFormSubmit(e) {
  e.preventDefault();
} */

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submittd');
}

const templateOne = (
  <div id="singleRootElement">
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    {(app.options && app.options.length > 0) ? <p>Here are your options: {app.options.map(i => i)}</p> : <p>No options</p>}
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add option</button>
    </form>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateOne, appRoot);