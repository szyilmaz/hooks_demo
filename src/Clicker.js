import React, { useState, useEffect} from 'react';

const Clicker = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
    })
  return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <h1>{count}</h1>
      </div>
  );
};

export default Clicker;
