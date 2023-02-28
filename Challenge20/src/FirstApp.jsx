import React, { useState } from 'react';

const Counter=() =>{
  const [count, setCount] = useState(0);

  const sumaDeContador = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={sumaDeContador}>Sumar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
