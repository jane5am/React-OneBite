const moduleData = require("./math");
const {add, sub} = require("./math"); // 구조분해할당

console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }
console.log(moduleData.add(1,2)); // 3
console.log(moduleData.sub(1,2)); // -1
console.log(add(1,2)); //3