// 🚀 나머지 매개변수, 전개 구문 (Rest Parameters and Spread Syntax)
// ----------------------------------------------------------------

// 전개 연산자(...)

// 배열 전개
(() => {
  const breads = ['크림빵', '소보로빵', '소금빵'];
  // 문자열 값
  // console.log(`${breads[0]},${breads[1]},${breads.at(-1)}`);
  // console.log(breads.toString());

  // 구조 분해 할당 활용
  // const [x, y, z] = breads;
  // console.log(x, y, z);

  // 전개 구문(배열의 원소를 전개한다) 활용
  console.log(...breads);
});

// 함수를 호출할 때 배열을 전개해 전달할 수 있음.
(() => {
  const messages = ['hello', 'hi', 'how are you?'];

  function log(message1, message2, message3) {
    console.log(message1);
    console.log(message2);
    console.log(message3);
  }

  log(...messages);
});

// 다른 배열 내부에도 전개 가능
(() => {
  const team = ['one', 'two', 'three'];

  const anotherTeam = ['four', 'six', ...team, 'nine'];

  console.log(anotherTeam);
});

// .concat() 메서드 vs. 전개 구문
(() => {
  const itemToAdd = 1;
  const existingArray = [2, 3];

  // .concat()
  const arr = [];
  arr.push(itemToAdd);
  let combinedArr = arr.concat(existingArray);
  console.log(combinedArr);

  // Spread Syntax
  combinedArr = [...existingArray, itemToAdd];
  console.log(combinedArr);
});

// HTMLCollection or NodeList -> Array 변환
// Array.from() vs. Spread Syntax
(() => {
  const mainChildrenArray = document.querySelector('main').children;
  const bodyChildrenArray = [...document.body.children];

  console.log(mainChildrenArray);
  console.log(bodyChildrenArray);

  // console.log(Array.from(mainChildren));
  console.log([...mainChildren]);
})();