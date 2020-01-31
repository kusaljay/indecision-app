/* var userName = 'Kay Fer',
  userAge = 40,
  userLocation = 'Melbourne'; */

const app = {
  title: 'Indecision App',
  subtitle: 'Your decisions made easy',
  options: ['One', 'Two']
}

const templateOne = (
  <div id="singleRootElement">
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    {(app.options && app.options.length > 0) ? <p>Here are your options: {app.options.map(i => i)}</p> : <p>No options</p>}
  </div>
);

const user = {
  name: 'Jay Fer',
  age: 30,
  location: 'Melbourne'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const getLocationArrow = (location) => location ? <p>Location: {location}</p> : undefined;

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymouse'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
); 

const appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);