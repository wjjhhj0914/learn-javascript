// 하살표 함수 표현식 (Arrow Function Expression)
// ------------------------------------------------------

// 함수를 만드는 방법 3가지

// 1. 함수 선언
// function showMeTheMoney() {
//   console.log('Show me the money.');
// }
// showMeTheMoney();

// 2. 함수 표현식
// let lookAtMe = function () {
//   console.log('Look at me!');
// };
// lookAtMe();

// 3. 화살표 함수 표현식
// let readABook = bookName => {
//   console.log('"' + bookName + '"을 읽다.');
// };
// readABook('노르웨이의 숲');

// ------------------------------------------------------
// 다양한 화살표 함수 구문
// ------------------------------------------------------

// 1. 매개변수의 갯수 : 0개, 2개 이상은 소괄호 생각할 수 없고, 1개는 소괄호 생략 가능하고, (_) 언더바로 표시하는 게 관례.

// 0개
// let readABook = () => {
//   console.log('"책을 읽다.');
// }

// 자바스크립트 월드 사람들의 관례
// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용한다.
// let readABook = _ => {
//   console.log('"책을 읽다.');
// };

// 1개
// let readABook = bookName => {
//   console.log('"' + bookName + '"을 읽다.');
// };

// readABook('오만과 편견');

// 2개 이상
let readABook = (day, bookName) => {
  console.log(day + '일에 걸쳐 ' + '"' + bookName + '"을 읽다.');
};

readABook(21, '오만과 편견');

// 2. 암묵적 반환
// return undefined (암묵적 반환, 기본 반환)
// return 값 (명시적 반환)
let px2rem = pxValue => pxValue / 16 + 'rem';
console.log(px2rem(28));
