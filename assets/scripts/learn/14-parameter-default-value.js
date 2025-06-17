// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

/* 짧은 버전
function getMoney(price, unit) {
  if (!unit) unit = '원';
  if (unit === '달러') return '$' + price;
  return price + unit;
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500);
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러');

console.log(moneyKR);
console.log(moneyUS);
*/

function getMoney(price, unit) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'
  console.log(price);
  console.log(unit);

  // if (unit === undefined) {
  // if (typeof unit === 'undefined') {
  if (!unit) {
    unit = '원'; // unit 매개변수에 '원' 값을 재할당
  }

  if (unit === '달러') {
    unit = '$';
    return '$' + price;
  }

  return price + unit;

  // 함수는 암묵적으로 undefined 반환
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500); // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러'); // '$80.75'

console.log(moneyKR);
console.log(moneyUS);
