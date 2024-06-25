import React, { useState, useEffect } from 'react';
//Run the code during change in the lifecycle of component 
//f,dependency array
const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1); 
  };
  let data ="";
   count % 2 === 0 ? data="even" : data ="odd";
   useEffect(()=>{
     console.log('count got updated');
   },[count]);
   useEffect(()=>{
      console.log('mounted');
      return ()=>{
        console.log("unmounted");
      }
   },[])
  return (
    <>
      <button onClick={incrementCount} className='btn'>Click me</button>
      <p className='p'>Count is {count}</p>
      <p className='p'>This is {data}</p>
    </>
  );
};

export default Counter;
