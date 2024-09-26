import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  const button = () => {
    setCount(count+1);
  }

  const lightButton = () => {
    setLight( light === "OFF" ? "ON"  : "OFF");
  }


  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={lightButton}>
          { light === "OFF" ? "켜기" : "끄기" }
        </button>
        
      </div>
      <div>
      <h1>{count}</h1>
        <button onClick={button}>+</button>
        {/* <button
          onClick={ () => { setCount(count + 1)} }
          > */}
          {/* +
        </button> */}
      </div>
    </>
  )
}

export default App
