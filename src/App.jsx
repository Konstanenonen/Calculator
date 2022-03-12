import React from 'react';

function App() {
  const [calculation, setCalculation] = React.useState({
    firstValue: '0',
    secondValue: '0',
    operation: null,
    displayValue: '0',
  });

  function doCalculation(operator, operation) {
    if (calculation.operation === null) {
      setCalculation((prevState) => ({
        ...prevState,
        operation,
        displayValue: prevState.firstValue + operator,
      }));
    } else {
      setCalculation((prevState) => ({
        firstValue: prevState.operation(prevState.firstValue, prevState.secondValue),
        secondValue: '0',
        operation,
        displayValue: prevState.operation(prevState.firstValue, prevState.secondValue) + operator,
      }));
    }
  }

  function addNumber(number) {
    if (number === '0' && calculation.displayValue === '0') return;
    if (number === '.' && calculation.displayValue[calculation.displayValue.length - 1] === '.') return;
    if (number === '.' && (calculation.firstValue.includes('.') && calculation.secondValue.includes('.'))) return;
    setCalculation((prevState) => {
      if (prevState.firstValue === null || prevState.operation === null) {
        return {
          ...prevState,
          firstValue: prevState.firstValue === '0' ? number : prevState.firstValue + number,
          displayValue: prevState.displayValue === '0' ? number : prevState.displayValue + number,
        };
      }
      return {
        ...prevState,
        secondValue: prevState.secondValue + number,
        displayValue: prevState.displayValue + number,
      };
    });
  }

  function clear() {
    setCalculation({
      firstValue: '0',
      secondValue: '0',
      operation: null,
      displayValue: '0',
    });
  }

  function addOperator(operator, operatorFunction) {
    doCalculation(operator, operatorFunction);
  }

  function calculate() {
    if (calculation.operation === null) return;
    setCalculation((prevState) => ({
      firstValue: prevState.operation(prevState.firstValue, prevState.secondValue),
      operation: null,
      secondValue: '0',
      displayValue: `${prevState.displayValue} = ${prevState.operation(prevState.firstValue, prevState.secondValue)}`,
    }));
  }

  function add(a, b) {
    const result = Number(a) + Number(b);
    return Number.isInteger(result) ? result : result.toFixed(1);
  }

  function subsrtact(a, b) {
    const result = Number(a) - Number(b);
    return Number.isInteger(result) ? result : result.toFixed(1);
  }

  function multiply(a, b) {
    const result = Number(a) * Number(b);
    return Number.isInteger(result) ? result : result.toFixed(1);
  }

  function divide(a, b) {
    const result = Number(a) / Number(b);
    return Number.isInteger(result) ? result : result.toFixed(1);
  }

  console.log(calculation);

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="display-area">
          <div className="result">{calculation.displayValue}</div>
          <div id="display">{calculation.firstValue}</div>
        </div>
        <button onClick={() => addNumber('0')} type="button" id="zero">0</button>
        <button onClick={() => addNumber('1')} type="button" id="one">1</button>
        <button onClick={() => addNumber('2')} type="button" id="two">2</button>
        <button onClick={() => addNumber('3')} type="button" id="three">3</button>
        <button onClick={() => addNumber('4')} type="button" id="four">4</button>
        <button onClick={() => addNumber('5')} type="button" id="five">5</button>
        <button onClick={() => addNumber('6')} type="button" id="six">6</button>
        <button onClick={() => addNumber('7')} type="button" id="seven">7</button>
        <button onClick={() => addNumber('8')} type="button" id="eight">8</button>
        <button onClick={() => addNumber('9')} type="button" id="nine">9</button>
        <button onClick={() => addOperator('+', add)} type="button" id="add">+</button>
        <button onClick={() => addOperator('-', subsrtact)} type="button" id="subtract">-</button>
        <button onClick={() => addOperator('*', multiply)} type="button" id="multiply">*</button>
        <button onClick={() => addOperator('/', divide)} type="button" id="divide">/</button>
        <button onClick={() => addNumber('.')} type="button" id="decimal">.</button>
        <button onClick={calculate} type="button" id="equals">=</button>
        <button onClick={clear} type="button" id="clear">clear</button>
      </div>
    </div>
  );
}

export default App;
