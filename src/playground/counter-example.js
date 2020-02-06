/* ***** Counter ***** */

let count = 0;
const addOne = () => {
  count++;
  console.log('Increase by one', count);
  renderCounterApp();
}
const minusOne = () => {
  //count--;
  count > 0 ? count-- : count = 0
  console.log('Decrease by one');
  renderCounterApp();
}
const reset = () => {
  count = 0;
  console.log('Reset');
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const counter = (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn-primary" onClick={addOne}>+1</button>
      <button className="btn-primary" onClick={minusOne}>-1</button>
      <button className="btn-primary" onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(counter, appRoot);
}

renderCounterApp();