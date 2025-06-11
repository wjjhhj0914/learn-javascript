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
  // return num * 16 + 'px';
}

console.log(remToPx(1));
console.log(remToPx(1.5));
