import { useState } from "react";

function useInput() {
  console.log(111111);

  const [input, setInput] = useState("1");

  const onChange = (e) => {
    setInput(e.target.value);
  }

  return [input, onChange];
}

export default useInput;