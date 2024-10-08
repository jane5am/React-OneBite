import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  
  const lightButton = () => {
    setLight( light === "OFF" ? "ON"  : "OFF" );
  }

  return (
    <>
    <div>
      {light === "ON" ? 
      <h1 style={ { backgroundColor:"orange" } }>
        ON
      </h1> :
      <h1 style={ {backgroundColor: "gray"} }>
         OFF
      </h1>}
    </div>
    <button onClick={lightButton}>
      { light === "OFF" ? "켜기" : "끄기" }
    </button>
    </>
  )
};

export default Bulb;