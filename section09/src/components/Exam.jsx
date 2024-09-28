import { useReducer } from 'react';

// reducer : 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state);
  console.log(action);
  
  if (action.type === 'INCREASE') {
    return state + action.data;
  }
  if (action.type === 'DECREASE') {
  return state - action.data;
  }
  
}

const Exam = () => {

  // dispatch : 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);
  
  const onClickPlus = () => {
    //인수로는 상태가 어떻게 변화되길 원하는지를 객체로 넣는다
    // 액션객체 라고 한다
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
};

export default Exam;
