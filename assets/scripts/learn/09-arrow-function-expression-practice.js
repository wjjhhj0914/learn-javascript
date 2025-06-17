// 1. 매개변수 없이, 값 10을 반환하는 ten 함수를 화살표 함수 표현식으로 작성해보세요.

const ten = () => 10;
console.log(ten());

// 2. 하나의 매개변수를 받는 logger 함수를 화살표 함수 표현식으로 작성해보세요. (괄호 사용 또는 사용 안함)

const logger = message => '로그 메시지: ' + message;
console.log(logger('화살표 함수 표현식은 매우 유용해요!'));

// 3. pxToRem 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.

let pxToRem = px => px / 16 + 'rem';
console.log(pxToRem(12));

pxToRem = px => {
  let rem = px / 16 + 'rem';
  return rem;
};
console.log(pxToRem(24));

// 4. percentage 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
let percentage = (part, total) => (part / total) * 100 + '%';
console.log(percentage(360, 1280));

percentage = (part, total) => {
  let calc = (part / total) * 100 + '%';
  return calc;
};
console.log(percentage(478, 1940));
