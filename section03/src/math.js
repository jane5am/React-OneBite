function add(a,b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

// commonJS 모듈을 사용하여 내보내기
module.exports = {
  add : add,
  sub, // 변수와 키값이 같을 때 변수의 이름만 적어줘도 키값으로 들어간다
}