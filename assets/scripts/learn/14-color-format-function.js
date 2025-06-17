// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, value) : #hexcode 반환
// - [ ] setRgbColor(red, green, value) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
// 10진수 -> 16진수 함수
const toHexadecimal = function (decimal) {
  return decimal.toString(16);
};

console.log(toHexadecimal(255));

// 16진수 -> 10진수 함수
const toDecimal = function (hexadecimal) {
  return parseInt(hexadecimal, 10);
};

// const setHexColor = function(red, green, blue) {
//   const redValue = toHexadecimal(red);
//   const greenValue = toHexadecimal(green);
//   const blueValue = toHexadecimal(blue);

//   const colorValue = '#' + redValue + greenValue + blueValue;
//   return colorValue;
// }

// console.log(setHexColor(255, 255, 255));

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'
const setRgbColor = function (red, green, blue) {
  const redValue = toDecimal(red);
  const greenValue = toDecimal(green);
  const blueValue = toDecimal(blue);

  const colorValue =
    'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
  return colorValue;
};

console.log(setRgbColor(255, 255, 255));
