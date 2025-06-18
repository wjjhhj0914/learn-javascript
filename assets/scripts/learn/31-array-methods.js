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

// 1. 시작 부분에 항목 추가
const animals = ['cat', 'dog', 'elephant'];
animals.unshift('giraffe');
console.log(animals);

// 2. 끝 부분에 항목 추가
animals.push('kangaroo');
animals.push('koala', 'dolphins', 'turtle');

// ------------------------------------------------------------
// 배열에 항목 제거

// 1. 배열의 첫 번째 항목 제거
console.log(animals.shift()); // giraffe

// 여러 항목을 맨 앞에서 순차적으로 제거
const removedAnimal1 = animals.shift();
const removedAnimal2 = animals.shift();
console.log(removedAnimal1, removedAnimal2);
console.log(animals);

// 2. 끝 위치 항목 제거 (popcorn처럼 팡팡!)


const numbers = [9, 10, 3, 4, 7, 8];
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers) // [9, 10, 3, 4, 7, 8]

// 맨 앞 제거 -> 추가
// numbers.shift()
// numbers.shift() // [3, 4, 7, 8]
numbers.splice(0, 2)
// numbers.unshift(1, 2)
numbers.splice(0, 0, 1, 2)

// 맨 뒤 제거 -> 추가
// numbers.pop()
// numbers.pop()
numbers.splice(numbers.length - 2, 2) // [1, 2, 3, 4]
// numbers.push(5, 6)
numbers.splice(numbers.length, 0, 5, 6)

// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers) // [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------
// 배열 중간 위치 어딘가에 새 항목 추가 또는 삭제
// 배열의 .splice() 메서드 : 추가/삭제/교체
// 배열.splice(시작인덱스, 제거할갯수, 추가항목1, 추가항목2, ..., 추가항목n)

// 중간에 포함된 항목을 삭제
// 배열.splice(시작 인덱스, 삭제할 갯수)
// const numbers = [1, 2, 3, 4, 5, 6];
// const removedItems = numbers.splice(0, 2);
// console.log(removedItems); // [1, 2]

// 중간에 새 항목 추가
// console.log(numbers.splice(3, 0, 100, 101, 102));
// console.log(numbers);

// 증간에 포함된 항목을 삭제하고, 새 항목을 추가


// 배열의 원소 잘라(slice) 새 배열 반환
// .slice(startIndex, endIndex) -> 시작 인덱스부터 끝 이전 인덱스까지 포함한 새 배열 반환
// 배열 복제 (통째로 복사)
// .slice() -> 통째로 모두 잘라서 새 배열 반환

