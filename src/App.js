import React, { useState, useEffect, useRef } from "react";
import "./index.css";
function App() {
  const [result, setResult] = useState("0");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());
  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }
  function backspace() {
    setResult(result.slice(0, result.length - 1));
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
        <input type="text" value={result} ref={inputRef}></input>
      </form>
      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button id="result" onClick={calculate}>
          result
        </button>
        <button name="+" onClick={handleClick} id="">
          +
        </button>
        <button name="7" onClick={handleClick} id="">
          7
        </button>
        <button name="8" onClick={handleClick} id="">
          8
        </button>
        <button name="9" onClick={handleClick} id="">
          9
        </button>
        <button name="-" onClick={handleClick} id="">
          -
        </button>
        <button name="4" onClick={handleClick} id="">
          4
        </button>
        <button name="5" onClick={handleClick} id="">
          5
        </button>
        <button name="6" onClick={handleClick} id="">
          6
        </button>
        <button name="*" onClick={handleClick} id="">
          *
        </button>
        <button name="1" onClick={handleClick} id="">
          1
        </button>
        <button name="2" onClick={handleClick} id="">
          2
        </button>
        <button name="3" onClick={handleClick} id="">
          3
        </button>
        <button name="/" onClick={handleClick} id="/">
          /
        </button>
        <button name="0" onClick={handleClick} id="zero">
          0
        </button>
        <button name="." onClick={handleClick} id="decimal">
          .
        </button>
      </div>
    </div>
  );
}
export default App;
