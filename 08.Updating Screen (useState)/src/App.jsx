import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
      <h1>Count = {count}</h1>
    </div>
  )
}

export default App
