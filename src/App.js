import { useState } from "react";
import './App.css';
import Button from  './components/Button';
import Input from  './components/Input'
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("")

  const addToInput = (val) => {
    setInput(input + val)
  }

  const handleEqual = () => {
    setInput(math.evaluate(input))
  }
  
  return (
    <div className="app">
      <div className='calc-wrapper'>
        <Input input={input}></Input>
        <div className='row'>
        <Button handleclick={addToInput}>7</Button>
        <Button handleclick={addToInput}>8</Button>
        <Button handleclick={addToInput}>9</Button>
        <Button handleclick={addToInput}>/</Button>
        </div>
        <div className='row'>
        <Button handleclick={addToInput}>4</Button>
        <Button handleclick={addToInput}>5</Button>
        <Button handleclick={addToInput}>6</Button>
        <Button handleclick={addToInput}>*</Button>
        </div>
        <div className='row'>
        <Button handleclick={addToInput}>1</Button>
        <Button handleclick={addToInput}>2</Button>
        <Button handleclick={addToInput}>3</Button>
        <Button handleclick={addToInput}>+</Button>
        </div>
        <div className='row'>
        <Button handleclick={addToInput}>.</Button>
        <Button handleclick={addToInput}>0</Button>
        <Button handleclick={handleEqual}>=</Button>
        <Button handleclick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton onClear = {() => setInput("")}>clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
