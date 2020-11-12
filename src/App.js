import React, { useState, useEffect, useRef } from "react";
import "./index.css";
function App() {
  const [results, setResult] = useState("0");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());
  function handleClick(e) {
    setResult(results.concat(e.target.name));
  }
  function backspace() {
    setResult(results.slice(0, results.length - 1));
  }
  function clear() {
    setResult("");
  }
  function calculate() {
    try {
      setResult(eval(result) + " ");
    } catch (error) {
      setResult("error");
    }
  }
  return (
    <div className="calc-app">
      <form>
        <input id="result" type="text" value={results} ref={inputRef}></input>
      </form>
      <div className="keypad">
        <button id="clear" onClick={clear}>
          AC
        </button>
        <button id="delete" onClick={backspace}>
          delete
        </button>
        <button id="equal" onClick={calculate}>
          =
        </button>
        <button name="/" onClick={handleClick} id="divide">
          /
        </button>
        <button name="7" onClick={handleClick} id="7">
          7
        </button>
        <button name="8" onClick={handleClick} id="8">
          8
        </button>
        <button name="9" onClick={handleClick} id="9">
          9
        </button>
        <button name="*" onClick={handleClick} id="multiply">
          *
        </button>
        <button name="4" onClick={handleClick} id="4">
          4
        </button>
        <button name="5" onClick={handleClick} id="5">
          5
        </button>
        <button name="6" onClick={handleClick} id="6">
          6
        </button>
        <button name="-" onClick={handleClick} id="subtract">
          -
        </button>
        <button name="1" onClick={handleClick} id="1">
          1
        </button>
        <button name="2" onClick={handleClick} id="2">
          2
        </button>
        <button name="3" onClick={handleClick} id="3">
          3
        </button>
        <button name="+" onClick={handleClick} id="add">
          +
        </button>
        <button name="0" onClick={handleClick} id="0">
          0
        </button>
        <button name="." onClick={handleClick} id="dot">
          .
        </button>
        <button name="%" onClick={handleClick} id="percentile">
          %
        </button>
      </div>
    </div>
  );
}
export default App;
