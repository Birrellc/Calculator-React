import React, { useState } from 'react';

const App = () => {
  const [calculation, setCalculation] = useState('');

  const updateCalculation = (value) => {
    setCalculation(calculation + value);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createNumbers = numbers.map((num) => {
    return (
      <button onClick={() => updateCalculation(num.toString())} key={num}>
        {num}
      </button>
    );
  });

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>{calculation || '0'}</div>

        <div className='operands'>
          <button>÷</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
          <button>C</button>
        </div>

        <div className='digits'>
          {createNumbers}
          <button>.</button>
          <button>0</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
