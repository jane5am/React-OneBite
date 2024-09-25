import randomColor from "randomcolor"; // randomColor라이브러리의 기본값을 불러온 것

console.log(randomColor); //<ref *1> [Function: randomColor] { randomColor: [Circular *1] }

const color = randomColor();
console.log(randomColor()); // #e285b2 , #cfa7e8 등 랜덤 결과
