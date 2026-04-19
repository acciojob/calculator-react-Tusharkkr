{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */ }

import React, { useState } from "react";
import './../styles/App.css';



const App = () => {

  let [val, setVal] = useState('')

  function handleValue(e) {
    let value = e.target.innerText
    // console.log(value)
    if(value == 'C'){
      setVal('')
    }else if(value == '='){
      setVal(eval(val))
    }else{
      setVal(val + value)
    } 
  }

  return (
    <div className="main-container">
      <div className="Calculator">
        <input value={val} className="cal box-1" type="text" />
        <button onClick={handleValue} className="cal box-2" id="btn-9">C</button>
        <button onClick={handleValue} className="cal box-3" id="btn-9 btn-div">/</button>
        <button onClick={handleValue} className="cal box-4">*</button>
        <button onClick={handleValue} className="cal box-5" id="btn-9 btn--">-</button>
        <button onClick={handleValue} className="cal box-5">7</button>
        <button onClick={handleValue} className="cal box-7">8</button>
        <button onClick={handleValue} className="cal box-8">9</button>
        <button onClick={handleValue} className="cal box-9" id='btn-5 plus'>+</button>
        <button onClick={handleValue} className="cal box-10">4</button>
        <button onClick={handleValue} className="cal box-11">5</button>
        <button onClick={handleValue} className="cal box-12">6</button>
        <button onClick={handleValue} className="cal box-13">1</button>
        <button onClick={handleValue} className="cal box-14">2</button>
        <button onClick={handleValue} className="cal box-15">3</button>
        <button onClick={handleValue} className="cal box-16">=</button>
        <button onClick={handleValue} className="cal box-17">0</button>
        <button onClick={handleValue} className="cal box-18">.</button>
        <button onClick={handleValue} className="cal box-19"></button>
      </div>
    </div>
  )
}

export default App