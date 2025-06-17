// ------------------------------------------
// 📌 JavaScript 객체 (Object)
// ------------------------------------------

// 기본 타입(Primitive Types, 간단)
/*
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/

// 객체 타입(Object Types, 복잡)
/*
1. Object - {}
2. Function - function 함수이름() {} | function() {}; | () => {};
3. Array - []
*/

// ------------------------------------------
// 📌 JavaScript 객체 (Object)
// ------------------------------------------

// 객체 리터럴을 사용해 객체 정의 (쉬운 방법)
const coffee = {
  size: 'grande',
  brand: 'Starbucks',
  name: 'Americano',
};

// 객체 생성자(Constructor)를 사용해 객체 생성
// const coffee = new Object();

// coffee.size = 'grande';
// coffee.brand = 'Starbucks';
// coffee.name = 'Americano';

// console.log(coffee);

// const 객체 = {
//   number: 1,
//   string: '문자',
//   boolean: false,
//   null: null,
//   undefined: undefined,
//   심볼: Symbol('객체'),
//   빅인트: 910n,
//   array: [],
//   객체: {},
//   함수: () => {},
// };
// console.log(객체);

const anchorCamel = {
  textDecoration: 'underline',
  fontColor: 'blue',
};

const anchorKebab = {
  'text-decoration': 'underline',
  'font-color': 'blue',
};

const hyojungJang = {
  sex: 'Female',
  age: 26,
  race: 'Korean',
  eat: function () {
    return '장효정은 밥을 먹는다.';
  },
  sleep: function () {
    return '장효정은 잠을 잔다.';
  },
};
console.log(hyojungJang.eat());

// ------------------------------------------------------------
// 📌 함수의 타입은?
// JavaScript 함수는 객체이다.

function likeLion() {
  console.log('우리는 멋사 14기!');
}

likeLion.order = 14;

console.log(likeLion.order);

// 고차 함수
// "함수는 값이다."Add commentMore actions
// - 함수는 값이므로 함수에 인수로 전달 가능하다. (일급 객체, 일급 함수)
{
  greeting(sayHello, '🌈 자바스크립트'); // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return '안녕! ';
  }

  function greeting(helloMessage /* = sayHello */, name) {
    // const helloMessage = sayHello = function () { ... }

    console.log(helloMessage() + name);
  }
}

// - 함수는 값이므로 함수가 값으로 반환할 수 있다. (고차 함수)
{
  const greeting = sayHello();
  greeting('🌈 자바스크립트'); // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return name => {
      console.log('안녕! ' + name);
    };
  }
}

{
  const galaxyNoteBook = {
    deviceName: '갤럭시 노트북',
    getDeviceName: function () {
      return galaxyNoteBook.deviceName;
    },
  };

  // console.log(galaxyNoteBook.getDeviceName) 이렇게 하면 함수가 나오고
  // 함수(컴퓨터 메모리 상에 기억: 주소) 참조
  console.log(galaxyNoteBook.getDeviceName);

  // console.log(galaxyNoteBook.getDeviceName()) 이렇게 했을때 value가 나오는데 왜 그런건가요?
  // 함수(컴퓨터 메모리 상에 기억: 주소) 실행 (소괄호()는 함수이름이 실행 연산자를 만나면 함수가 실행 => 값 반환)
  console.log(galaxyNoteBook.getDeviceName());
}
