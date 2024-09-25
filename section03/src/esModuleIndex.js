import division from "./esModuleMath.js"; // default로 불러오기, 이름을 마음대로 붙일 수 있다
import {add, sub, mul} from "./esModuleMath.js"; // 모듈의 확장자까지 붙여줘야한다
// import division, {add, sub, mul} from "./esModuleMath.js"; // 동일한 경로에서 임포트하는 것이라면 하나로 합치기 가능

console.log(add(1,2)); // 3
console.log(sub(1,2)); // -1
console.log(mul(1,2)); // 2

console.log(division(4,2)); //2
