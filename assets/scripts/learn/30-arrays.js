// 배열(Array) 객체

// 배열 리터럴로 배열 만들기 (배열 생성)

const shoppingList = ['대파', '계란', '두부', '시금치', '양파', '케찹'];
console.log(shoppingList, shoppingList.length);


// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
/*
const cart = new Array('one', 'two', 'three', 'four', 'five');
console.log(cart, cart.length);
*/

// new Array()를 사용해 배열 객체를 생성할 때 발생할 수 있는 문제점
const onlyOneNumberListLiteral = [99];
console.log(onlyOneNumberListLiteral);

const onlyOneNumberList = new Array(99);
console.log(onlyOneNumberList); // 기대 값: [99] / 결과 값: [empty x 99] 빈 방 99개가 생긴 느낌

// 배열은 객체다.
// 객체의 조건은 속성:값을 가진다.
// 객체는 속성(메서드 포함)을 사용할 수 있다.
// 객체.속성
// 객체.메서드()

// 배열의 인덱스(index)는 숫자 타입이다.
/*
[
  0: 값1,
  1: 값2,
  2: 값3,
  3: 값4,
]
*/

// 객체['속성명'] -> 값
// 배열객체[인덱스(숫자)] -> 값

// 배열객체.속성
// 배열객체.메서드()

// 대괄호에 인덱스를 전달해 배열 항목 가져오기
let firstItem = shoppingList[0];
let secondFromTheEndItem = shoppingList[shoppingList.length - 2];
let lastItem = shoppingList[shoppingList.length - 1];
console.log(firstItem, lastItem, secondFromTheEndItem);

// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기
// .at() 메서드는 끝에서 항목을 가져올 때 편리함!
let firstCartItem = shoppingList.at(0);
let secondFromTheEndCartItem = shoppingList.at(-2);
let lastCartItem = shoppingList.at(-1);
console.log(firstCartItem, secondFromTheEndCartItem, lastCartItem);