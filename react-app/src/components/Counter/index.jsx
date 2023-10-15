import { useState } from "react";
// rfce
function Counter() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function decrement(e) {
    // rerender the page
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        {count}
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Counter;
