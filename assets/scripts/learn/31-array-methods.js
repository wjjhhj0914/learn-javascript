// 배열의 메서드(Array's Methods)
/*
const JAVASCRIPT = ['Variable', 'Function', 'Conditional Statement', 'Object', 'Array'];

// 배열 항목 위치(index) 찾기
let functionIndex, arrayIndex;

functionIndex = JAVASCRIPT.indexOf('Function'); // 기대값: 1 / 결과값 1
*/

const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지'];

// indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
// console.log(fruitBasket.indexOf('패션') > -1) // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
// console.log(fruitBasket.indexOf('애플망고') > -1) // true
// console.log(fruitBasket.indexOf('워터멜론') > -1) // true
// console.log(fruitBasket.indexOf('오렌지') > -1) // true

const hasItem = function (array, fruitName) {
  return array.indexOf(fruitName) > -1;
}
console.log(hasItem(fruitBasket, '패션후르츠'));