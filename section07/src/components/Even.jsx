import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 : useEffect의 콜백함수가 반환 하는 함수
    return () => { console.log("unMount")};
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;