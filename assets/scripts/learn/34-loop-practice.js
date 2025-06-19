// 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
(() => {
  for (let i = 1, l = 100; i < l; i++) {
    if (i % 2 === 0) console.log(i);
  }
});

// 2. while 문을 사용해 숫자 10부터 1까지 역순으로 출력
(() => {
  let i = 0;

  while (i > 0) {
    console.log(i); // 10,
    i = i - 1; // 9
  }
});

// 3. for … of 문을 사용해 다음 배열의 과일 출력

// const fruits = ['사과', '바나나', '귤', '복숭아'];


// (() => {
//   const attempts = ['0124', '8291', '3001', '9073'];
//   let i = 0, input;

//   do {
//     input = attempts[i];

//     console.log('사용자 입력 시도 = ' + (i + 1) + ' / 입력 값 = ', input);

//     if (input === '3001') {
//       console.log('사용자');
//     }
//   }
// });