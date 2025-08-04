import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! The counter was incremented.");
  };

  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  const handleClick = (e) => {
    e.preventDefault(); // Synthetic Event
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to the React Event App!")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleClick}>Synthetic Event Button</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
