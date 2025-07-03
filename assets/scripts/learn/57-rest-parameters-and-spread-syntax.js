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
});

// 나머지 매개변수 (Rest Parameters)
(() => {
  // ⭐️ 화살표 함수 표현식은 arguments를 사용할 수 없다❗️
  function logNames() {
    /* 인자: 매개변수의 집합 */ 
    // console.log(arguments); // 함수 안에서만 접근할 수 있음. 유사 배열로 만들어줌.
    // console.log(Array.isArray(arguments)); // false 인자 집합은 배열이 아니고, 유사 배열.

    // 유사 배열 -> 배열로 변경하기
    // Array.from()
    console.log(Array.from(arguments));
    // 전개 구문
    console.log([...arguments]);
    // 메서드 빌려쓰기 패턴
    Array.prototype.slice.call((arguments));

    for (let i = 0, l = arguments.length; i < l; i++) {
      const arg = arguments[i];
      console.log(arg);
    }
  }

  // 전개 구문은, 배열 데이터를 다른 배열 내부에 전개하는 것, 즉, 배열 ~ 각 원소를 펼친다.
  // 나머지 매개변수는, 매개변수 영역에서만 사용 가능하고, 외부에서 전달된 인수들을 하나로 모아 배열 객체로 제공한다. -> 각 원소를 배열로 생성함.

  // 화살표 함수는 arguments를 사용할 수 없으니, 나머지 매개변수 활용.
  // const logNamesArrowFunction = (firstName, secondName, ...restNames) => {
  const logNamesArrowFunction = (...names) => {
    // for (const name of names) {
    //   console.log(name);
    // }

    // names.forEach((n) => console.log(n));

    const [, , , ...restNames] = names;
    console.log(restNames); //  '진구', '초영', '영주', '주효',
  }

  logNames(
    '진형',
    '민희',
    '수영',
    '진구',
    '초영',
    '영주',
    '주효',
  );

  logNamesArrowFunction(
    '진형',
    '민희',
    '수영',
    '진구',
    '초영',
    '영주',
    '주효',
  );
});

// 객체 합성
(() => {
  /* global gsap */

  const initVars = { opacity: 0, rotateX: -480 };

  // 아래는 gsap.timeline({ defaults: { ... } }) 와 동일한 방식

  const commonVars = { opacity: 0.75, rotateX: 180 };
  const h1Vars = { scale: 1, delay: 0.5 };
  const pVars = { y: -50, color: '#551b8b', scale: 1.2, delay: 0.8 };

  // console.log(Object.assign({}, commonVars, h1Vars));
  console.log({ ...commonVars, ...h1Vars });
  console.log(commonVars);
  console.log(h1Vars);

  gsap.set('h1, p', initVars);
  gsap.to('h1', { ...commonVars, scale: 1, delay: 0.5 });
  gsap.to('p', { ...commonVars, y: -50, color: '#551b8b' });
});

// 원본 객체 유지, 새로운 객체(합성된) 사용
(() => {
  const fruitBlender = {
    blendKiwi: true,
    blendMango: true,
  }

  const megaBlender = {
    blendGuava: true,
  }

  const neoBlender = {
    ...megaBlender,
    ...fruitBlender,
  }

  console.log(megaBlender);
  console.log(neoBlender);
  console.log(fruitBlender);
});