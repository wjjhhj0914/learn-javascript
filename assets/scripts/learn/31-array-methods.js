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

// indexOf() 메서드 대신 includes() 메서드 활용
console.log(fruitBasket.includes('워터멜론')); // true
console.log(fruitBasket.includes('수박')); // false

// 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 가능하지 않음!
// 대신 findIndex()
const LIKELION_14TH = [
  { name: '장효정' },
  { name: '장영은' },
]

// 값이 있으면 해당 인덱스를 찾아줌 0
// 값이 없으면 -1
LIKELION_14TH.findIndex((student) => student.name === '장효정');

// ------------------------------------------------------------
// 배열에 항목 추가

// 시작 부분에 항목 추가
const animals = ['cat', 'dog', 'elephant'];
animals.unshift('giraffe');
console.log(animals);

// 끝 부분에 항목 추가
animals.push('kangaroo');
animals.push('koala', 'dolphins', 'turtle');


const nestedArray = [
  [1, 2, 3],
  ['one', 'two', 'three',],
];

// 배열 원소 내부에 기본 타입만 포함된 경우
// .indexOf()
console.log(nestedArray.indexOf([1, 2, 3])); // -1 : 못 찾음

