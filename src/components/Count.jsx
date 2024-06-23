import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1); 
  };
  let data ="";
   count % 2 === 0 ? data="even" : data ="odd";
  return (
    <>
      <button onClick={incrementCount} className='btn'>Click me</button>
      <p className='p'>Count is {count}</p>
      <p className='p'>This is {data}</p>
    </>
  );
};

export default Counter;
