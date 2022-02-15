import React from 'react';

const App = () => {
  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(<button key={i}>{i}</button>);
    }
    return numbers;
  };

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>0</div>

        <div className='operands'>
          <button>÷</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
          <button>C</button>
        </div>

        <div className='keys'>
          {createNumbers()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
