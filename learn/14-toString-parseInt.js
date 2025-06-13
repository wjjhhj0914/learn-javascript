// --------------------------------------------------------------------------
// 📌 dataType(값).toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
//   -> 2진수를 변경하면? 8진수로 변경하면? 16진수로 변경하면?
// --------------------------------------------------------------------------

// 타입 변경
console.log('안녕'.toString());
console.log((1004).toString());
console.log(true.toString());
console.log(false.toString());
// console.log(null.toString()); ❌
// console.log(undefined.toString()); ❌

// 10진수 -> 2진수 변경 / 8진수 / 16진수
let n = 255;
console.log(n.toString(2)); // 컴퓨터가 알아듣는 2진수
console.log(n.toString(8)); // 8진수
console.log(n.toString(16)); // 8진수

// 10진수 -> 16진수(hexadecimal) 변경
const toHexadecimal = n => n.toString(16);

console.log(toHexadecimal(255));

// 10진수를 2진수 또는 16진수로 변경하는 함수 작성
const calcRadix = (n, base = 16) => n.toString(base);

console.log(calcRadix(100));
console.log(calcRadix(100, 2));

// --------------------------------------------------------------------------
// 📌 parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거
console.log(parseInt('42px'));
console.log(parseFloat('1.625rem'));
console.log(parseInt('277mm'));

// 단위 제거 함수 작성
const removeUnit = unit => parseFloat(unit, 10); // 기본이 10진수
// parseFloat는 16진수로 못 바꿔줌. parseInt를 써야 함.

console.log(removeUnit('40px'));
console.log(removeUnit('1.625rem'));

// 2진수 문자열 -> 10진수 변경
console.log(parseInt('10', 2));
console.log(parseInt('100', 2));

// 16진수 문자열 -> 10진수 변경
console.log(parseInt('00', 16));
console.log(parseInt('80', 16));
console.log(parseInt('a0', 16));
console.log(parseInt('a1', 16));
console.log(parseInt('ae', 16));
console.log(parseInt('ff', 16));

// 16진수 문자열을 10진수로 변경하는 함수 작성
const fromHexadecimal = hexValue => parseInt(hexValue, 16);

console.log(fromHexadecimal('00'));
console.log(fromHexadecimal('ae'));
console.log(fromHexadecimal('ff'));
