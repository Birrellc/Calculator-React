import React, { useState } from 'react';

const App = () => {
  const [calculation, setCalculation] = useState('');

  const operands = ['/', '*', '+', '-', '.'];

  const updateCalculation = (value) => {
    if (
      (operands.includes(value) && calculation === '') ||
      (operands.includes(value) && operands.includes(calculation.slice(-1)))
    ) {
      return;
    }
    setCalculation(calculation + value);
  };

  const calculateTotal = () => {
    setCalculation(eval(calculation).toString());
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createNumbers = numbers.map((num) => {
    return (
      <button onClick={() => updateCalculation(num.toString())} key={num}>
        {num}
      </button>
    );
  });

  const clearLast = () => {
    if (calculation === '') {
      return;
    }

    const value = calculation.slice(0, -1);

    setCalculation(value);
  };

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>{calculation || '0'}</div>

        <div className='operands'>
          <button onClick={() => updateCalculation('/')}>÷</button>
          <button onClick={() => updateCalculation('*')}>x</button>
          <button onClick={() => updateCalculation('-')}>-</button>
          <button onClick={() => updateCalculation('+')}>+</button>
          <button onClick={clearLast}>C</button>
        </div>

        <div className='digits'>
          {createNumbers}
          <button onClick={() => updateCalculation('.')}>.</button>
          <button onClick={() => updateCalculation('0')}>0</button>
          <button onClick={calculateTotal}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
