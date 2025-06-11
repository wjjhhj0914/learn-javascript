// 1.
function logger(logMessage) {
  console.log('로그 메시지: ', logMessage);
}

logger('실습을 통한 연습은 언제나 옳습니다. 😊');

// 2.
function pxToRem(px) {
  // px size / base size + 'rem'
  let rem = px / 16 + 'rem';
  return rem;
}

console.log(pxToRem(16));
console.log(pxToRem(24));
console.log(pxToRem(189));

// 3.
function remToPx(rem) {
  let px = rem * 16 + 'px';
  return px;
  // return rem * 16 + 'px';
}

console.log(remToPx(1));
console.log(remToPx(1.5));

// 4. 주문한 피자 가격 계산 함수 만들기
function priceOfPizza(price, amount) {
  let sum = price * amount + '원';
  return sum;
}

console.log(priceOfPizza(28900, 2));

// 5. 주차 요금 계산 함수 만들기
const HOUR_PARKING_FEE = 1000;

let calcParkingFee = function (time) {
  let calculator = time * HOUR_PARKING_FEE + '원';
  return calculator;
};

console.log(calcParkingFee(1.5));
console.log(calcParkingFee(5));

// 6. 짝수인지 확인하는 함수 만들기
function isEvenNumber(num) {
  let evenOrOdd = num % 2 == 0;

  return evenOrOdd;
}

console.log(isEvenNumber(187091));

// 7. 생일 축하 메시지 출력 함수 만들기
function isYourBirthdayToday(name) {
  return name + '님의 생일을 축하합니다! 🎉';
}

console.log(isYourBirthdayToday('장효정'));
console.log(isYourBirthdayToday('Charlie'));

// 8. 올해 남은 날짜 계산 함수 만들기
const NUMBER_OF_DAYS_OF_YEAR = 365;

function restOfDate(dateOfToday) {
  let calc = NUMBER_OF_DAYS_OF_YEAR - dateOfToday;
  return calc;
}

console.log(restOfDate(120));

// 9. 세금 포함 가격 계산 함수 만들기
const TAX_RATIO = 0.1;

let calcPriceWithTax = function (producePrice) {
  return producePrice + producePrice * TAX_RATIO;
};

console.log(calcPriceWithTax(9000));

// 10. 나이가 성인인지 판별하는 함수 만들기
const ENTRY_AGE = 19;

let isAdult = function (yourAge) {
  return yourAge > ENTRY_AGE;
};

console.log(isAdult(19));
