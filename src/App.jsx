import React from 'react';

function App() {
  const [calculation, setCalculation] = React.useState('');

  function addNumber(number) {
    setCalculation((prevState) => prevState + number);
  }

  return (
    <div className="App">
      <div type="text" id="display">{calculation}</div>
      <button type="button" id="equals">=</button>
      <button onClick={() => addNumber(0)} type="button" id="zero">0</button>
      <button onClick={() => addNumber(1)} type="button" id="one">1</button>
      <button onClick={() => addNumber(2)} type="button" id="two">2</button>
      <button onClick={() => addNumber(3)} type="button" id="three">3</button>
      <button onClick={() => addNumber(4)} type="button" id="four">4</button>
      <button onClick={() => addNumber(5)} type="button" id="five">5</button>
      <button onClick={() => addNumber(6)} type="button" id="six">6</button>
      <button onClick={() => addNumber(7)} type="button" id="seven">7</button>
      <button onClick={() => addNumber(8)} type="button" id="eight">8</button>
      <button onClick={() => addNumber(9)} type="button" id="nine">9</button>
      <button type="button" id="add">+</button>
      <button type="button" id="subtract">-</button>
      <button type="button" id="multiply">*</button>
      <button type="button" id="divide">/</button>
      <button type="button" id="decimal">.</button>
      <button type="button" id="clear">clear</button>
    </div>
  );
}

export default App;
