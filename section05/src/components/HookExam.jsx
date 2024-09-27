import { useState, useInput } from "react";

  // hook과 관련된 특징
  // 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
  // 2. 조건부로 호출될 수 없다.
  // 3. 나만희 훅(Custom Hook)을 만들 수 있다.

  // const state = useState(); // 에러, 1번 특징

const HookExam = () => {

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  // console.log(useInput()); // ['1', ƒ]
  // console.log(input); // 1
  // console.log(onChange); // (e) => { setInput(e.target.value); }

  const state = useState(); // 가능

  // 에러, 2번 특징
  // if(true){
  //   const state1 = useState();
  // }

  // 에러, 2번 특징
  // for(;;){
  //   const state2 = useState();
  // }


  return (
    <>
      <input value={input} onChange={onChange}/>
      <input value={input2} onChange={onChange2}/>
    </>
  )  
};
export default HookExam