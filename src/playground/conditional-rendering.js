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
ReactDOM.render(templateTwo, appRoot);