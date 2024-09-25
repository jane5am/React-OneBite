// 1. 첫번째 방법
function add(a,b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

export { add, sub };

// 2. 두번째 방법
export function mul(a,b) {
  return a * b;
}

// defalt 기본값으로 내보내기
export default function div(a,b){
  return a / b;
}