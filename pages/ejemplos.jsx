import { useState } from "react";

export default function ejemplos({initialCount}) {
    const [count, setCount] = useState(initialCount);
    initialCount = 0;
    const prevCount = 0;
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </>
    );
}
