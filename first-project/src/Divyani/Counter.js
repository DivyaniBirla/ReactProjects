import React, { useState } from "react";
import "./counter.css"
export { Counter };
function Counter() {
  const [count, setCount ] = useState(0);

  const add = () => {
    setCount(count +  1);
  };

  const sub = () => {
    setCount(count - 1);
    // if (count > 0) {
    //   setCount(count - 1);
    // }
  };

  return (
    <div id="counter">
      <h3>This is to create the Counter Function</h3>
      <h1>Counter Function</h1>
        <button onClick={sub} disabled = {count == 0}>-</button>&nbsp;
        <span>{count}</span>&nbsp;
        <button onClick={add}>+</button>
      <h3>Value is {count}</h3>
        
    </div>
  );
}
